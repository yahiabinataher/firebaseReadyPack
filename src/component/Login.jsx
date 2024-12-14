import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { myToast } from "../utils";
import { auth } from "../firebaseConfig";

const Login = () => {
  const [showpass, setShowPass] = useState(true);
  const [error,setError] = useState({})
  const [loading,setLoding] = useState(false)
  const navigate = useNavigate()
  const { loginUser } = useContext(AuthContext);
  const location = useLocation()
  // handle form
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {

    setError({})
    setLoding(true)
    e.preventDefault();
    loginUser(formData.email, formData.password)
   
      .then((result) => {
        myToast("You are Successful Login","success")
        navigate(location?.state ? location.state : "/")
        setFormData({
          email: "",
          password: "",
        });
        setLoding(false);
      })
      .catch((error) => {
        setError({...error,msg:"You Give Wrong Email || Wrong Password"});
        setLoding(false)
      });
  };


  return (
    <div className="flex justify-center items-center min-h-screen px-4 sm:px-0 bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-center text-gray-600 mb-6">
          You are not account{" "}
          <Link to="/signup" className="text-blue-500 font-medium hover:underline">
            Ragister Here
          </Link>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <svg
              className="absolute top-3 left-4"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.88 78.607"
              enableBackground="new 0 0 122.88 78.607"
              xmlSpace="preserve"
            >
              <g>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
                />
              </g>
            </svg>
            <input
              type="email"
              name="email"
              className="w-full pl-12 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <svg
              className="w-5 h-5 absolute top-3 left-2"
              xmlns="http://www.w3.org/2000/svg"
              shapeRendering="geometricPrecision"
              textRendering="geometricPrecision"
              imageRendering="optimizeQuality"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 512 509.939"
            >
              <path
                fillRule="nonzero"
                d="M467.741 267.225c-29.508 29.507-68.357 44.26-107.168 44.26-27.525 0-55.065-7.421-79.28-22.259L60.581 509.939 2.067 451.424l29.258-29.258L0 390.842l37.804-37.806 31.326 31.325 9.609-9.609-46.357-46.357 41.01-41.01 46.357 46.357 103.056-103.056c-14.744-24.161-22.12-51.694-22.121-79.255h-.168c0-38.81 14.752-77.657 44.258-107.163C274.29 14.756 313.135 0 351.946 0c38.81 0 77.66 14.756 107.167 44.263l8.631 8.632C497.249 82.4 512 121.247 512 160.057h-.167c-.002 38.919-14.704 77.779-44.092 107.168zm-60.198-60.185c12.993-12.995 19.489-30.023 19.489-46.983h-.168c0-17.062-6.438-34.096-19.312-46.97l-8.632-8.631c-12.877-12.878-29.911-19.32-46.974-19.32-17.064 0-34.097 6.442-46.975 19.32-12.881 12.881-19.319 29.912-19.319 46.975h-.168c0 16.96 6.498 33.988 19.485 46.975l8.632 8.632c12.874 12.872 29.906 19.31 46.972 19.31 17.064 0 34.098-6.438 46.97-19.308z"
              />
            </svg>
            <svg
              onClick={() => setShowPass(!showpass)}
              className="absolute top-3 right-6 cursor-pointer"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="20px"
              height="20px"
              viewBox="0 0 122.879 79.699"
              enableBackground="new 0 0 122.879 79.699"
              xmlSpace="preserve"
            >
              <g>
                <path d="M0.955,37.326c2.922-3.528,5.981-6.739,9.151-9.625C24.441,14.654,41.462,7.684,59.01,7.334 c6.561-0.131,13.185,0.665,19.757,2.416l-5.904,5.904c-4.581-0.916-9.168-1.324-13.714-1.233 c-15.811,0.316-31.215,6.657-44.262,18.533l0,0c-2.324,2.115-4.562,4.39-6.702,6.82c4.071,4.721,8.6,8.801,13.452,12.227 c2.988,2.111,6.097,3.973,9.296,5.586l-5.262,5.262c-2.782-1.504-5.494-3.184-8.12-5.039c-6.143-4.338-11.813-9.629-16.78-15.85 C-0.338,40.563-0.228,38.59,0.955,37.326L0.955,37.326L0.955,37.326z M96.03,0l5.893,5.893L28.119,79.699l-5.894-5.895L96.03,0 L96.03,0z M97.72,17.609c4.423,2.527,8.767,5.528,12.994,9.014c3.877,3.196,7.635,6.773,11.24,10.735 c1.163,1.277,1.22,3.171,0.226,4.507c-4.131,5.834-8.876,10.816-14.069,14.963C95.119,67.199,79.338,72.305,63.352,72.377 c-6.114,0.027-9.798-3.141-15.825-4.576l3.545-3.543c4.065,0.705,8.167,1.049,12.252,1.031c14.421-0.064,28.653-4.668,40.366-14.02 c3.998-3.191,7.706-6.939,11.028-11.254c-2.787-2.905-5.627-5.543-8.508-7.918c-4.455-3.673-9.042-6.759-13.707-9.273L97.72,17.609 L97.72,17.609z M61.44,18.143c2.664,0,5.216,0.481,7.576,1.359l-5.689,5.689c-0.619-0.079-1.248-0.119-1.886-0.119 c-4.081,0-7.775,1.654-10.449,4.328c-2.674,2.674-4.328,6.369-4.328,10.45c0,0.639,0.04,1.268,0.119,1.885l-5.689,5.691 c-0.879-2.359-1.359-4.912-1.359-7.576c0-5.995,2.43-11.42,6.358-15.349C50.02,20.572,55.446,18.143,61.44,18.143L61.44,18.143z M82.113,33.216c0.67,2.09,1.032,4.32,1.032,6.634c0,5.994-2.43,11.42-6.357,15.348c-3.929,3.928-9.355,6.357-15.348,6.357 c-2.313,0-4.542-0.361-6.633-1.033l5.914-5.914c0.238,0.012,0.478,0.018,0.719,0.018c4.081,0,7.775-1.652,10.449-4.326 s4.328-6.369,4.328-10.449c0-0.241-0.006-0.48-0.018-0.72L82.113,33.216L82.113,33.216z" />
              </g>
            </svg>
            <input
              type={showpass ? "password" : "text"}
              name="password"
              className="w-full pl-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
            />
            {error && <p className="text-xs text-red-400 mt-4">{error.msg}</p>}
            <Link to="/resetpass" className="pt-2 text-sm">
              Forget Password
            </Link>
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            {loading ? "Loading...." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
