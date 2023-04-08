import React, { useState } from "react";
import { signin } from "../../api/auth/auth";
import { useRouter } from "next/router";
import Link from "next/link";

export interface Userdetails {
  username: string;
  password: string;
}

const Login = () => {
  const router = useRouter();
  const [userdetails, setUserdetails] = useState<Userdetails>({
    username: "",
    password: "",
  });
  const [error, setError] = useState<Userdetails>({
    username: "",
    password: "",
  });
  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserdetails({ ...userdetails, [e.target.name]: e.target.value });
  };

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signin(userdetails, router);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <form onSubmit={onsubmitHandler}>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="text"
              id="username"
              name="username"
              placeholder="username"
              value={userdetails.username}
              onChange={onchangeHandler}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="password"
              id="password"
              placeholder="password"
              name="password"
              value={userdetails.password}
              onChange={onchangeHandler}
            />
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Sign In
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          Dont have an account?{" "}
          <Link href="/signup" className="text-blue-500 hover:text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

// <form onSubmit={onsubmitHandler} className=" flex flex-col w-80 border">
//   <input
//     name="username"
//     value={userdetails.username}
//     onChange={onchangeHandler}
//     type="text"
//     placeholder="username"
//     className="border"
//     required
//   />
//   <div>{error.username && <p>{error.username}</p>}</div>
//   <input
//     name="password"
//     value={userdetails.password}
//     onChange={onchangeHandler}
//     type="text"
//     placeholder="password"
//     className="border"
//     required
//   />
//   <div>{error.password && <p>{error.password}</p>}</div>

//   <input type="submit" value="Signin" />
//   <div>
//     Dont have an channel,{" "}
//     <Link href="/signup" className=" bg-red-200">
//       Signup
//     </Link>
//   </div>
// </form>x
