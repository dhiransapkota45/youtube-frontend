import React, { useState } from "react";
import { signin } from "../../api/auth/auth";
import { useRouter } from "next/router";

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
    <form onSubmit={onsubmitHandler} className=" flex flex-col w-80 border">
      <input
        name="username"
        value={userdetails.username}
        onChange={onchangeHandler}
        type="text"
        placeholder="username"
        className="border"
        required
      />
      <div>{error.username && <p>{error.username}</p>}</div>
      <input
        name="password"
        value={userdetails.password}
        onChange={onchangeHandler}
        type="text"
        placeholder="password"
        className="border"
        required
      />
      <div>{error.password && <p>{error.password}</p>}</div>

      <input type="submit" value="Signup" />
    </form>
  );
};

export default Login;
