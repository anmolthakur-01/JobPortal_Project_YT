import React from "react";
import { Input } from "./ui/input";
import {Button} from './ui/button'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Search } from "lucide-react";

const Hero = () => {
  const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }
  return (
    <div className='text-center'>
            <div className='flex flex-col gap-5 my-10'>
                <span className=' mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
                <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full'

                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2]">
                        <Search className='h-5 w-5' />
                    </Button>
                </div>
            </div>
        </div>
    // <div className="text-center">
    //   <div className="flex flex-col gap-5 my-10">
    //     <span className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium">
    //       Welcome to JobNest
    //     </span>
    //     <h1 className="text-5xl font-bold">
    //       Search, Apply & <br /> Get Your{" "}
    //       <span className="text-[#6a38c2]">Dream Job</span>
    //     </h1>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
    //       adipisci dolorum voluptas accusamus impedit explicabo.
    //     </p>
    //     <div className="flex w-[40%] item-center mx-auto">
    //       <Input
    //         type="text"
    //         placeholder="Enter your job title"
    //         className="cursor-pointer "
    //       />
    //       <Button
    //         // onClick={searchJobHandler}
    //         className="rounded-r-full bg-[#6A38C2]"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           strokeWidth={1.5}
    //           stroke="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    //           />
    //         </svg>
    //       </Button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Hero;
