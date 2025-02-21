import React from 'react';
import { useLoaderData } from 'react-router-dom';

const TaskDetails = () => {
  const detailsData = useLoaderData();
  return (
    <div className="card shadow-2xl  mt-16 w-1/2 mx-auto">
  <div className="card-body">
        <h2 className="card-title"> Title: { detailsData?.title}</h2>
        <p> Description: { detailsData?.description}</p>
   
  </div>
</div>
  );
};

export default TaskDetails;