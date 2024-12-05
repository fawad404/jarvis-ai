"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <header className="bg-primary text-secondary h-screen flex flex-col justify-center items-center text-center relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-accent opacity-20 rounded-full"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to <span className="text-highlight">Jarvis AI</span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-Secondary"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Your ultimate productivity companion for email, calendar, and task
          management. Let AI take care of your busy work!
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-8 flex justify-center space-x-4"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <button className="bg-secondary text-light px-6 py-3 rounded-lg hover:bg-highlight transition duration-200">
            Get Started
          </button>
          <button className="bg-light text-secondary px-6 py-3 rounded-lg hover:bg-info transition duration-200">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Floating Animation Elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-highlight rounded-full opacity-30"
        animate={{
          x: [0, 20, -20, 0],
          y: [0, 20, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-info rounded-full opacity-30"
        animate={{
          x: [0, -20, 20, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>
    </header>
  );
}
