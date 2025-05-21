import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { USER_API_END_POINT } from "@/utils/constants";
import { setUser } from "@/redux/authSlice";

const Navbar = () => {
  const {user} = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-blue-600">Nest</span>
          </h1>
        </div>
        <div className="flex items-center gap-9">
          <ul className="flex items-center space-x-9">
            <li className="text-gray-700">
              <Link to="/">Home</Link>
            </li>
            <li className="text-gray-700">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="text-gray-700">
              <Link to="/browse">Browse</Link>
            </li>
            {!user ? (
              <div className="flex items-center gap-2">
                <Link to="/login">
                  <Button
                    className="bg-red-600 text-white hover:bg-red-700 cursor-pointer"
                    variant="link"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
                    variant="link"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            ) : (
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="flex gap-2 space-y-2">
                      <Avatar className="cursor-pointer">
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="@shadcn"
                        />
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{user?.fullname}</h4>
                        <p className="text-gray-500 text-sm">{user?.profile?.bio}</p>
                      </div>
                    </div>
                    <div className="flex flex-col text-gray-500">
                      <div className="flex w-fit items-center gap-2">
                        <User2 />
                        <Button className="cursor-pointer" variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </div>
                      <div className="flex w-fit items-center gap-2">
                        <LogOut />
                        <Button onClick={handleLogout} className="cursor-pointer" variant="link">
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
