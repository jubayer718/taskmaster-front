import { DndContext } from "@dnd-kit/core";
import Column from "../../Components/Column";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
const socket = io("https://task-master-server-black.vercel.app");

const COLUMNS = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];
// const INITIAL_TASKS = [
//   {
//     id: '1',
//     title: 'Research Project',
//     description: 'Gather requirements and create initial documentation',
//     status: 'TODO',
//   },
//   {
//     id: '2',
//     title: 'Design System',
//     description: 'Create component library and design tokens',
//     status: 'TODO',
//   },
//   {
//     id: '3',
//     title: 'API Integration',
//     description: 'Implement REST API endpoints',
//     status: 'IN_PROGRESS',
//   },
//   {
//     id: '4',
//     title: 'Testing',
//     description: 'Write unit tests for core functionality',
//     status: 'DONE',
//   },
// ];

const Home = () => {

  // const [tasks, setTasks] = useState([]);
  // useEffect(() => {
  //   fetch('https://task-master-server-black.vercel.app/allTask')
  //     .then(res => res.json())
  //   .then(data=>setTasks(data))


  // }, [])
  
  // // get realtime update from database
  //   socket.on("task_added", (newTask) => {
  //     setTasks((prevTasks) => [...prevTasks, newTask]);
  //   });
  
  
  //   socket.on("task_updated", (updatedTask) => {
  //     setTasks((prevTasks) =>
  //       prevTasks.map((task) =>
  //         task._id === updatedTask._id ? { ...task, ...updatedTask } : task
  //       )
  //     );
  //   });
  
  //  socket.on("task_deleted", (taskId) => {
  //     setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  //   });

  //  return () => {
  //     socket.off("task_added");
  //     socket.off("task_updated");
  //     socket.off("task_deleted");
  //   };
  // }, [];

  // function handleDragEnd(event) {
  //   const { active, over } = event;
  // // console.log(event);
  //   if (!over) return;

  //   const taskId = active._id ;
  //   const newStatus = over._id ;

  //   setTasks(() =>
  //     tasks.map((task) =>
  //       task._id === taskId
  //         ? {
  //             ...task,
  //             status: newStatus,
  //           }
  //         : task,
  //     ),
  //   );
  // }



   const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://task-master-server-black.vercel.app/allTask")
      .then((res) => res.json())
      .then((data) => setTasks(data));

    // ✅get realtime update data from server
    socket.on("task_added", (newTask) => {
      setTasks((prevTasks) => [...prevTasks, newTask]);
    });

    socket.on("task_updated", (updatedTask) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task._id === updatedTask._id ? { ...task, ...updatedTask } : task
        )
      );
    });

    socket.on("task_deleted", (taskId) => {
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
    });

    return () => {
      socket.off("task_added");
      socket.off("task_updated");
      socket.off("task_deleted");
    };
  }, []);

  function handleDragEnd(event) {
    const { active, over } = event;
    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    // ✅ update to local state (Optimistic UI)
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task._id === taskId ? { ...task, status: newStatus } : task
      )
    );

    // ✅ send new status to server
    socket.emit("update_task", { taskId, status: newStatus });
  }

  return (
      <div className="p-4 mt-16">
      <div className="flex gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
};

export default Home;