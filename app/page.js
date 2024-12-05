"use client";


import { HiOutlineMail, HiOutlineCalendar, HiOutlineChat } from "react-icons/hi";
import FeatureCard from "./components/FeatureCard";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonial";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
  


 
      <div className="min-h-screen bg-primary flex items-center justify-center px-6 py-12">
      <div className="flex flex-wrap gap-6 justify-center">
        <FeatureCard
          title="Email Management"
          subtitle="Prioritize and organize your emails"
          description="Automatically categorize emails, extract tasks, and draft polite responses with ease."
          icon={<HiOutlineMail className="h-8 w-8" />}
        />
        <FeatureCard
          title="Calendar Management"
          subtitle="Effortless scheduling"
          description="Seamlessly manage your calendar, set reminders, and summarize meetings effectively."
          icon={<HiOutlineCalendar className="h-8 w-8" />}
        />
        <FeatureCard
          title="AI Conversations"
          subtitle="Intelligent assistance"
          description="Engage with an AI-powered assistant that understands and responds to your queries naturally."
          icon={<HiOutlineChat className="h-8 w-8" />}
        />
      </div>
    </div>
    <Testimonials/>
  

      <Footer/>
      
    </div>
  );
}
