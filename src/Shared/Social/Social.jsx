

// import { useNavigate } from 'react-router-dom';
// import useAxiosPublic from '../axiosPublic/UseAxiosPublic';
import { FaGoogle } from 'react-icons/fa';
import { UseAuth } from '../../Hooks/useAuth';
import axios from 'axios';

const Social = () => {
  const { loginWithGoogle,user } = UseAuth();
  // const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(async (result) => {
      console.log(result.user);
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
           userId:user?.uid,
          joinedDate: new Date()
        }
        
        const { data } = await axios.post("http://localhost:3000/users", userInfo);
        console.log(data);
        // }
        
      // axiosPublic.post('/users', userInfo)
      //   .then(result => {
      //     // console.log(result.data);
      //   navigate('/')
      // })
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