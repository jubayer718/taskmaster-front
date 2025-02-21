

// import { useNavigate } from 'react-router-dom';
// import useAxiosPublic from '../axiosPublic/UseAxiosPublic';
import { FaGoogle } from 'react-icons/fa';
import { UseAuth } from '../../Hooks/useAuth';

const Social = () => {
  const { loginWithGoogle } = UseAuth();
  // const navigate = useNavigate();
  // const axiosPublic = useAxiosPublic();
  const handleGoogleSignIn = () => {
    loginWithGoogle()
      .then(result => {
      console.log(result.user);
      // const userInfo = {
      //   email: result.user?.email,
      //   name: result.user?.displayName,
      //   joinedDate:new Date()
        
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