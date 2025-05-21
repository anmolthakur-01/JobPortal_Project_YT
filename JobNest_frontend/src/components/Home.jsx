import React from "react";
import Navbar from "./shared/Navbar";
import Hero from "./Hero";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import LatestJobsCards from "./LatestJobsCards";
import Footer from "./shared/Footer";
import useGetAllJobs from "../hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();
  // useGetAllJobs is a custom hook that fetches all jobs and updates the Redux store
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
