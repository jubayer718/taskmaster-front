import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateTask = () => {
  const singleUpdateData = useLoaderData();
  console.log(singleUpdateData);


  const handleSubmit = async(e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const updatedValue = {
      title,
      description
    }
    const {data}=await axios.put(`https://task-master-server-black.vercel.app/taskUpdate/${singleUpdateData._id}`,updatedValue)
    // console.log(data);
    if (data.modifiedCount > 0) {
      alert("Update successful")
    }
    
  }
  return (
     <div className="hero  min-h-screen mt-16 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
         
          <label className="label">Title</label>
          <input type="text"  defaultValue={singleUpdateData?.title} name="title" className="input input-bordered" placeholder="title" />
         
          <label className="label">Description</label>
          <input type="text" defaultValue={singleUpdateData?.description} name="description" className="input input-bordered" placeholder="description" />
         
          
        
          
         
          
          <button type="submit" className="btn btn-neutral mt-4">Update</button>
            </form>
          
      </div>
    </div>
  </div>
</div>
  );
};

export default UpdateTask;