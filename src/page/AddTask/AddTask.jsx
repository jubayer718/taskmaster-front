import axios from 'axios';


const AddTask = () => {


  const handleSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const taskValue = {
      title,
      description,
      
      
    }
    // console.log(taskValue);
    const { data } = await axios.post('http://localhost:3000/task',taskValue);
    // console.log(data);
  }
  return (
   <div className="hero  min-h-screen mt-16 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
         
          <label className="label">Title</label>
          <input type="text"  name="title" className="input input-bordered" placeholder="title" />
         
          <label className="label">Description</label>
          <input type="text"  name="description" className="input input-bordered" placeholder="description" />
         
          
        
          
         
          
          <button type="submit" className="btn btn-neutral mt-4">Add Task</button>
            </form>
          
      </div>
    </div>
  </div>
</div>
  );
};

export default AddTask;