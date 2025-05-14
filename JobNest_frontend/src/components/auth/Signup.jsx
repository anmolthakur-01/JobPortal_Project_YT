import React, { useEffect, useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { USER_API_END_POINT } from "../../utils/constants";
import { toast } from "react-toastify";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(input)
    try {
      const res = await axios.post(`${USER_API_END_POINT}/register`, input, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if(res.data.success){
        navigate("/login");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto ">
        <form
          onSubmit={submitHandler}
          className="w-1/2 border border-gray-300 rounded-md p-4 my-10"
        >
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>
          <div className="my-2">
            <Label className="p-2">Name</Label>
            <Input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              placeholder="Enter your full name"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Email</Label>
            <Input
              type="text"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              placeholder="Example@abc.com"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Phone Number</Label>
            <Input
              type="text"
              name="phoneNumber"
              value={input.phoneNumber}
              onChange={changeEventHandler}
              placeholder="12345 56789"
            />
          </div>
          <div className="my-2">
            <Label className="p-2">Password</Label>
            <Input
              type="password"
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              placeholder="Enter password"
            />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <Input
                type="radio"
                name="role"
                value="jobseeker"
                checked={input.role === "jobseeker"}
                onChange={changeEventHandler}
                className="cursor-pointer"
              />
              <div className="flex items-center space-x-2 cursor-pointer">
                <Label htmlFor="option-one">JobSeeker</Label>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Input
                  type="radio"
                  name="role"
                  value="employer"
                  checked={input.role === "employer"}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="option-two">Employer</Label>
              </div>
            </RadioGroup>
            {/* <div className="flex items-center gap-2">
              <Label>Profile</Label>
              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                className="cursor-pointer"
              />
            </div> */}
          </div>
          <Button type="submit" value="submit" className="w-full my-4">
            Sign Up
          </Button>
          <span className="text-sm">
            Already have an account?{" "}
            <Link className="text-blue-700 " to="/login">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
