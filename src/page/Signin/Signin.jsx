import { UseAuth } from "../../Hooks/useAuth";
import Social from "../../Shared/Social/Social";


const Signin = () => {
  const { handleSignin } = UseAuth();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;


    const email = form.email.value;
    const password = form.password.value;

    // const updatedValue = {

    //   email,
    //   photo,


    // }
    handleSignin(email, password)
      .then(result => {
      console.log(result);
    })


  }
  return (
     <div className="hero  min-h-screen mt-16 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSubmit} className="fieldset">
         
          <label className="label">Email</label>
          <input type="text"  name="email" className="input input-bordered" placeholder="email" />
         
          
          <label className="label">Password</label>
          <input  type="password"  name="password" className="input input-bordered" placeholder="Password" />
          
         
          
          <button type="submit" className="btn btn-neutral mt-4">Sign in</button>
            </form>
            <Social></Social>
      </div>
    </div>
  </div>
</div>
  );
};

export default Signin;