import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });

  const style = transform
    ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
    : undefined;

  return (
    <div className=''>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        className="cursor-grab rounded-lg bg-neutral-700 p-4 shadow-sm hover:shadow-md flex flex-col lg:flex-row items-center justify-between"
        style={style}
      >
        <div>
          <h3 className="font-medium text-neutral-100">{task.title.slice(0, 50)}...</h3>
          <p className="mt-2 text-sm text-neutral-400">{task.description.slice(0, 200)}...</p>
        </div>
        <div className='flex lg:flex-col gap-2'>
          <Link to={`/updateTask/${task._id}`}><button className='btn'>Edit</button></Link>

          <Link to={`/detailsTask/${task._id}`}><button className='btn'>Details</button></Link>
          <Link><button>delete</button></Link>
        </div>
      </div>


    </div>
  );
};

export default TaskCard;