import React, { useState } from "react";
import { signup } from "../../api/auth/auth";
import { useRouter } from "next/router";

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
    <form
      onSubmit={onsubmitHandler}
      className="flex flex-col gap-y-2 w-80 border"
    >
      <input
        required
        name="username"
        value={user.username}
        onChange={onchangeHandler}
        type="text"
        placeholder="username"
      />
      <input
        required
        name="fullname"
        value={user.fullname}
        onChange={onchangeHandler}
        type="full name"
        placeholder="fullname"
      />
      <input
        required
        onChange={onchangeHandler}
        name="password"
        value={user.password}
        type="text"
        placeholder="password"
      />
      <input
        required
        name="confirmpassword"
        value={user.confirmpassword}
        onChange={onchangeHandler}
        type="text"
        placeholder="confirm password"
      />
      <input
        onChange={fileHandler}
        required
        type="file"
        placeholder="profilepic"
      />
      <input type="submit" value="Signup" />
    </form>
  );
};

export default Signup;
