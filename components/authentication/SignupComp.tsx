import React, { useState } from "react";
import { signup } from "../../api/auth/auth";
import { useRouter } from "next/router";
import Link from "next/link";

//implement google login also
const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    fullname: "",
    password: "",
    confirmpassword: "",
  });
  const router = useRouter();

  const [profile_pic, setProfile_pic] = useState<File | null>(null);

  const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const fileHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setProfile_pic(e.target.files[0]);
    }
  };

  const onsubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signup({ ...user, profile_pic }, router);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
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
              value={user.username}
              onChange={onchangeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="full-name">
              Full Name
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="text"
              id="full-name"
              name="fullname"
              value={user.fullname}
              onChange={onchangeHandler}
              required
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
              name="password"
              value={user.password}
              onChange={onchangeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="password"
              id="confirm-password"
              name="confirmpassword"
              value={user.confirmpassword}
              onChange={onchangeHandler}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2" htmlFor="profile-image">
              Profile Image
            </label>
            <input
              className="border border-gray-400 p-2 w-full rounded-lg"
              type="file"
              id="profile-image"
              accept="image/*"
              onChange={fileHandler}
              required
            />
          </div>
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-gray-500">
          Already have an account? <Link href="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;


    // <form
    //   onSubmit={onsubmitHandler}
    //   className="flex flex-col gap-y-2 w-80 border"
    // >
    //   <input
    //     required
    //     name="username"
    //     value={user.username}
    //     onChange={onchangeHandler}
    //     type="text"
    //     placeholder="username"
    //   />
    //   <input
    //     required
    //     name="fullname"
    //     value={user.fullname}
    //     onChange={onchangeHandler}
    //     type="full name"
    //     placeholder="fullname"
    //   />
    //   <input
    //     required
    //     onChange={onchangeHandler}
    //     name="password"
    //     value={user.password}
    //     type="text"
    //     placeholder="password"
    //   />
    //   <input
    //     required
    //     name="confirmpassword"
    //     value={user.confirmpassword}
    //     onChange={onchangeHandler}
    //     type="text"
    //     placeholder="confirm password"
    //   />
    //   <input
    //     onChange={fileHandler}
    //     required
    //     type="file"
    //     placeholder="profilepic"
    //   />
    //   <input type="submit" value="Signup" />
    // </form>