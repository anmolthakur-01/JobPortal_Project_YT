import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Hero from "./Hero";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import LatestJobsCards from "./LatestJobsCards";
import Footer from "./shared/Footer";
import useGetAllJobs from "../hooks/useGetAllJobs";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Home = () => {
  useGetAllJobs(); // useGetAllJobs is a custom hook that fetches all jobs and updates the Redux store
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === 'recruiter') {
      navigate("/admin/companies");
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <CategoryCarousel />
      <LatestJobs />
      <Footer />
    </>
  );
};

export default Home;
