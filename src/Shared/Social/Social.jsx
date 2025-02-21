
import { FaGoogle } from 'react-icons/fa';
import { UseAuth } from '../../Hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Social = () => {
  const { loginWithGoogle,user } = UseAuth();
  const navigate = useNavigate();
  
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(async (result) => {
      console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
          joinedDate: new Date()
        }
        // store user data to the server
        const { data } = await axios.post("https://task-master-server-black.vercel.app/users", userInfo);
        // console.log(data);
        if (data.insertedId) {
          alert('Signin successful')
        }
        // navigate to home
        navigate('/')


        
    })
  }
  return (
    <div>
      <button onClick={handleGoogleSignIn} className="btn w-full my-3 mx-auto">
<FaGoogle></FaGoogle>
  Sign In With Google
</button>
    </div>
  );
};

export default Social;