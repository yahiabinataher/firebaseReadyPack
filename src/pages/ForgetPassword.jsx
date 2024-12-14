import React, { useRef,} from 'react'
import { myToast } from '../utils';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const emailRef = useRef(null);
  const navigate = useNavigate()
    //handle password
    const handlePassword = (e) => {
      e.preventDefault()
      const email = emailRef.current.value;
      sendPasswordResetEmail(auth, email)
      .then(() => {
        myToast("see your email","success")
        setTimeout(() => {
          navigate("/");
        }, 2000);
      })
      .catch((error) => {
        console.log(error.message);
      });
      
    };
  return (
    <div>
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-0 bg-gray-100">
 <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
   <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
    <form onSubmit={handlePassword}>
      <div className="mb-4 relative">
       <svg className="absolute top-3 left-4" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 122.88 78.607" enableBackground="new 0 0 122.88 78.607" xmlSpace="preserve"><g><path fillRule="evenodd" clipRule="evenodd" d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"/></g></svg>
       <input
       ref={emailRef}
         type="email"
         name="email"
         className="w-full pl-12 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
         placeholder="Enter your Email"
         required
       />
     </div> 
     <button
       type="submit"
       className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
     >
      Reset Password
     </button>
   </form>
</div>
</div>
</div>
  )
}

export default ForgetPassword