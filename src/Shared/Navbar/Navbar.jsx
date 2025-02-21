import { Link } from "react-router-dom";
import { UseAuth } from "../../Hooks/useAuth";

const Navbar = () => {
  const { user, handleLogOut } = UseAuth();
  console.log(user);
  
  return (
    <div className="navbar bg-base-100 shadow-sm fixed z-50 top-0">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Task <span className="text-orange-400 font-bold">Master</span></a>
      </div>
        <div className="mr-16">
        <ul>
           <li><Link to="/add-task">Add task</Link></li>
         </ul>
   </div>
      
  <div className="flex-none">
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div title={user?.displayName}  className="w-10 rounded-full">
          <img
            alt="profile"
            src={user?.photoURL} />
        </div>
      </div>
      <ul
        tabIndex={0}
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
      
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
        <li><button onClick={handleLogOut}>Logout</button></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Navbar;