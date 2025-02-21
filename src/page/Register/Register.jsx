import axios from "axios";
import { UseAuth } from "../../Hooks/useAuth";
import Social from "../../Shared/Social/Social";


const Register = () => {
  const { handleCreateNewUser,user } = UseAuth()
  

  const handleSubmit = async (e) => {
    

    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const updatedValue = {
      name,
      email,
      photo,
      userId: user?.uid,
      joinedDate: new Date()

    }
    handleCreateNewUser(email, password)
      .then(async(result) => {
        // console.log(result);
        const { data } = await axios.post("http://localhost:3000/users", updatedValue);
        console.log(data);
        

    })

  }
  return (
   <div className="hero  min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
          <label className="label">Name</label>
          <input type="text"  name="name" className="input input-bordered" placeholder="Name" />
          <label className="label">Email</label>
          <input type="text"  name="email" className="input input-bordered" placeholder="email" />
          <label className="label">ProfileImage</label>
          <input  type="url"  name="photo" className="input input-bordered" placeholder="Profile Image" />
          
          <label className="label">Password</label>
          <input  type="password"  name="password" className="input input-bordered" placeholder="Password" />
          
         
          
          <button type="submit" className="btn btn-neutral mt-4">Register</button>
            </form>
            <Social></Social>
      </div>
    </div>
  </div>
</div>
  );
};

export default Register;