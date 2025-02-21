// import React, { useEffect, useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const TaskBoard = ({ tasks, onTaskUpdate }) => {
//   const [taskList, setTaskList] = useState(tasks);

//   useEffect(() => {
//     setTaskList(tasks);
//   }, [tasks]);

//   const handleDragEnd = (result) => {
//     if (!result.destination) return;
//     const updatedTasks = Array.from(taskList);
//     const [reorderedTask] = updatedTasks.splice(result.source.index, 1);
//     updatedTasks.splice(result.destination.index, 0, reorderedTask);
//     setTaskList(updatedTasks);
//     onTaskUpdate(updatedTasks);
//   };

//   return (
//     <DragDropContext onDragEnd={handleDragEnd}>
//       <Droppable droppableId="tasks">
//         {(provided) => (
//           <div {...provided.droppableProps} ref={provided.innerRef}>
//             {taskList.map((task, index) => (
//               <Draggable key={task._id} draggableId={task._id} index={index}>
//                 {(provided) => (
//                   <div
//                     ref={provided.innerRef}
//                     {...provided.draggableProps}
//                     {...provided.dragHandleProps}
//                   >
//                     <h3>{task.title}</h3>
//                     <p>{task.description}</p>
//                   </div>
//                 )}
//               </Draggable>
//             ))}
//             {provided.placeholder}
//           </div>
//         )}
//       </Droppable>
//     </DragDropContext>
//   );
// };

// export default TaskBoard;