// // import { Link } from "react-router-dom";
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { GoogleLogin } from "react-google-login";
// // import GitHubLogin from "react-github-login";

// // export default function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleLogin = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await axios.post(
// //         "http://localhost:5600/api/user/login",
// //         {
// //           email,
// //           password,
// //         }
// //       );
// //       console.log(response.data); // Handle successful login
// //       // Redirect to the login page
// //       window.location.href = "/";
// //     } catch (error) {
// //       console.error("Login error:", error.response.data); // Handle login error
// //     }
// //   };

// //   const responseGoogle = async (response) => {
// //     try {
// //       const tokenId = response.tokenId;
// //       // Call your API endpoint to authenticate the user using the tokenId
// //       const apiResponse = await axios.post("/api/google-login", { tokenId });
// //       console.log(apiResponse.data); // Handle successful login
// //     } catch (error) {
// //       console.error("Google login error:", error.response.data); // Handle login error
// //     }
// //   };

// //   //   const responseGitHub = async (response) => {
// //   //     try {
// //   //       const accessToken = response.code;
// //   //       // Call your API endpoint to authenticate the user using the accessToken
// //   //       const apiResponse = await axios.post("/api/github-login", {
// //   //         accessToken,
// //   //       });
// //   //       console.log(apiResponse.data); // Handle successful login
// //   //     } catch (error) {
// //   //       console.error("GitHub login error:", error.response.data); // Handle login error
// //   //     }
// //   //   };

// //   return (
// //     <>
// //       {/*
// //           This example requires updating your template:

// //           ```
// //           <html class="h-full bg-white">
// //           <body class="h-full">
// //           ```
// //         */}
// //       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
// //         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
// //           <img
// //             className="mx-auto h-10 w-auto invert"
// //             src="./logo.png"
// //             alt="Homyz"
// //           />
// //           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
// //             Log in to your account
// //           </h2>
// //         </div>

// //         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
// //           <form className="space-y-6" action="#" method="POST">
// //             <div>
// //               <label
// //                 htmlFor="email"
// //                 className="block text-sm font-medium leading-6 text-gray-900"
// //               >
// //                 Email address
// //               </label>
// //               <div className="mt-2">
// //                 <input
// //                   id="email"
// //                   name="email"
// //                   type="email"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   autoComplete="email"
// //                   required
// //                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <div className="flex items-center justify-between">
// //                 <label
// //                   htmlFor="password"
// //                   className="block text-sm font-medium leading-6 text-gray-900"
// //                 >
// //                   Password
// //                 </label>
// //                 <div className="text-sm">
// //                   <a
// //                     href="#"
// //                     className="font-semibold text-indigo-600 hover:text-indigo-500"
// //                   >
// //                     Forgot password?
// //                   </a>
// //                 </div>
// //               </div>
// //               <div className="mt-2">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   autoComplete="current-password"
// //                   required
// //                   className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
// //                 onClick={handleLogin}
// //               >
// //                 Log in
// //               </button>
// //             </div>
// //           </form>
// //           <div className="space-y-6 mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
// //             <p className="mt-10 text-center text-sm text-gray-500">
// //               Or Continue with{" "}
// //             </p>
// //             <GoogleLogin
// //               className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
// //               clientId="YOUR_GOOGLE_CLIENT_ID"
// //               buttonText="Login with Google"
// //               onSuccess={responseGoogle}
// //               onFailure={responseGoogle}
// //               cookiePolicy={"single_host_origin"}
// //             />
// //             {/* <GitHubLogin
// //             className="text-center flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
// //             clientId="YOUR_GITHUB_CLIENT_ID"
// //             buttonText="Login with GitHub"
// //             onSuccess={responseGitHub}
// //             onFailure={responseGitHub}
// //           /> */}
// //           </div>

// //           <p className="mt-8 text-center text-sm text-gray-500">
// //             Do not have account?{" "}
// //             <Link
// //               to="/register"
// //               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
// //             >
// //               Sign up
// //             </Link>
// //           </p>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// import { Link } from "react-router-dom";
// import React, { useState } from "react";
// import axios from "axios";
// import { GoogleLogin } from "react-google-login";
// import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
// import GitHubLogin from "react-github-login";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { loginWithRedirect } = useAuth0(); // Use loginWithRedirect function from useAuth0 hook

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post(
//         "http://localhost:5600/api/user/login",
//         {
//           email,
//           password,
//         }
//       );
//       console.log(response.data); // Handle successful login

//       // Store email in localStorage upon successful login
//       localStorage.setItem("userEmail", email);

//       // Redirect to the home page or any other desired page
//       window.location.href = "/";
//     } catch (error) {
//       console.error("Login error:", error.response.data); // Handle login error
//     }
//   };

//   const responseGoogle = async (response) => {
//     try {
//       const tokenId = response.tokenId;
//       // Call your API endpoint to authenticate the user using the tokenId
//       const apiResponse = await axios.post("/api/google-login", { tokenId });
//       console.log(apiResponse.data); // Handle successful login
//     } catch (error) {
//       console.error("Google login error:", error.response.data); // Handle login error
//     }
//   };

//   return (
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//             Log in to your account
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form className="space-y-6" action="#" method="POST">
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   autoComplete="email"
//                   required
//                   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label
//                   htmlFor="password"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a
//                     href="#"
//                     className="font-semibold text-indigo-600 hover:text-indigo-500"
//                   >
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   autoComplete="current-password"
//                   required
//                   className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                 onClick={handleLogin}
//               >
//                 Log in
//               </button>
//             </div>
//           </form>
//           <div className="space-y-6 mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
//             <p className="mt-10 text-center text-sm text-gray-500">
//               Or Continue with{" "}
//             </p>
//             <GoogleLogin
//               className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
//               clientId="YOUR_GOOGLE_CLIENT_ID"
//               buttonText="Login with Google"
//               onSuccess={responseGoogle}
//               onFailure={responseGoogle}
//               cookiePolicy={"single_host_origin"}
//             />
//             {/* <GitHubLogin
//             className="text-center flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
//             clientId="YOUR_GITHUB_CLIENT_ID"
//             buttonText="Login with GitHub"
//             onSuccess={responseGitHub}
//             onFailure={responseGitHub}
//           /> */}
//           </div>

//           <p className="mt-8 text-center text-sm text-gray-500">
//             Do not have account?{" "}
//             <Link
//               to="/register"
//               className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//             >
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </>
//   );
// }

import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import { useAuth0 } from "@auth0/auth0-react"; // Import useAuth0 hook
import GitHubLogin from "react-github-login";

export default function Login() {
  const { isAuthenticated, user } = useAuth0(); // Destructure isAuthenticated and user from useAuth0 hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginWithRedirect } = useAuth0(); // Use loginWithRedirect function from useAuth0 hook

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5600/api/user/login",
        {
          email,
          password,
        }
      );
      console.log(response.data); // Handle successful login

      // Store email in localStorage upon successful login
      localStorage.setItem("userEmail", email);

      // Redirect to the home page or any other desired page
      window.location.href = "/";
    } catch (error) {
      console.error("Login error:", error.response.data); // Handle login error
    }
  };

  const responseGoogle = async (response) => {
    try {
      const tokenId = response.tokenId;
      // Call your API endpoint to authenticate the user using the tokenId
      const apiResponse = await axios.post("/api/google-login", { tokenId });
      console.log(apiResponse.data); // Handle successful login
    } catch (error) {
      console.error("Google login error:", error.response.data); // Handle login error
    }
  };

  const redirectToBookingPage = () => {
    // Redirect to the booking page if the user is logged in
    if (isAuthenticated && user.email) {
      window.location.href = "/booking"; // Change the path to your booking page
    } else {
      // If the user is not logged in or their email is not available, prompt them to log in
      loginWithRedirect();
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleLogin}
              >
                Log in
              </button>
            </div>
          </form>
          <div className="space-y-6 mt-1 sm:mx-auto sm:w-full sm:max-w-sm">
            <p className="mt-10 text-center text-sm text-gray-500">
              Or Continue with{" "}
            </p>
            <GoogleLogin
              className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              clientId="YOUR_GOOGLE_CLIENT_ID"
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {/* <GitHubLogin
            className="text-center flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6  shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            clientId="YOUR_GITHUB_CLIENT_ID"
            buttonText="Login with GitHub"
            onSuccess={responseGitHub}
            onFailure={responseGitHub}
          /> */}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Do not have account?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
