"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';


export default function Hero() {
  return (
    <section
      className="dark-bg relative min-h-screen  overflow-x-hidden flex items-center justify-center border-b border-gray-700 "
      id="home"
    >
      <div class="absolute bottom-44 -left-64  h-[150px] w-[900px] -rotate-45 rounded-3xl bg-gradient-to-r from-violet-600 to-indigo-800 opacity-30 blur-3xl filter dark:block lg:bottom-44 lg:-left-20 lg:h-28 lg:w-[250px] lg:-rotate-12 lg:opacity-20 xl:h-40 xl:w-[400px]"></div>

      <div class="absolute left-[28%] top-28  rotate-12 rounded-3xl bg-sky-800 opacity-90 blur-3xl filter dark:opacity-30 lg:h-32 lg:w-[450px] dark:lg:block xl:h-44 xl:w-[600px]"></div>

      <div class="absolute right-[28%] top-0  h-[150px] w-[200px] rotate-12 rounded-3xl bg-gradient-to-l from-blue-600 to-sky-400 opacity-20 blur-3xl filter dark:block dark:opacity-30 lg:top-44 lg:-right-20 lg:h-72 lg:w-[350px] xl:h-80 xl:w-[500px]"></div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 lg:px-8">
          <motion.div
            className="lg:mt-12 mt-[60px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-[36px] md:text-[52px] font-bold text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              Hi I'am <span className="text-primary-h">Jenifar Jui</span>
            </motion.h1>
            <motion.h3
        className="text-[30px] md:text-[40px] text-slate-200 font-semibold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <Typewriter
          words={['Web Developer','Web Designer']}
          loop={Infinity} 
          cursor
          cursorStyle="_"
          typeSpeed={150}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h3>
            <motion.p
              className="text-slate-400 text-[15px] font-normal mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Your one-stop solution provider for a wide range of services,
              including website design and development. With a team of experts
              by my side, we are ready to tackle any challenge you throw our
              way. Whether you're looking to create a stunning website or solve
              complex digital issues. Let's collaborate and conquer your digital
              goals together!
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <button className="bg-primary text-white font-medium text-lg rounded hover:bg-primary-h duration-150 px-4 py-2">
                Contact us
              </button>
              <button className="bg-slate-900 ml-4 border border-primary text-white font-medium text-lg rounded hover:bg-primary duration-150 px-4 py-2">
                About Us
              </button>
            </motion.div>

            <div>
              <h4 className="uppercase text-lg font-medium text-slate-200 mt-8">
                find with me
              </h4>
              <div className="mt-2 flex gap-3 items-center">
                {/* Social Icons */}
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  href="https://www.facebook.com/jenifar.jui.1"
                  target="_blank"
                  title="facebook"
                  className="border border-primary text-primary hover:bg-primary rounded-full hover:text-white duration-150 w-9 h-9  flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  href="https://www.instagram.com/jenifarjui/"
                  title="instagram"
                  target="_blank"
                  className="border border-primary text-primary hover:bg-primary rounded-full hover:text-white duration-150 w-9 h-9  flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                    />
                  </svg>
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  href="https://www.linkedin.com/in/jenifar-yasmin-a523962b6/"
                  target="_blank"
                  title="linkedin"
                  className="border border-primary text-primary hover:bg-primary rounded-full hover:text-white duration-150 w-9 h-9  flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="-2 -2 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91c-1.182 0-1.886.796-2.195 1.565c-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126c2.815 0 4.926 1.84 4.926 5.792M2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254z"
                    />
                  </svg>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  href="https://github.com/jenifarjui"
                  target="_blank"
                  title="github"
                  className="border border-primary text-primary hover:bg-primary rounded-full hover:text-white duration-150 w-9 h-9  flex items-center justify-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center max-w-[500px] mx-auto w-full z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Image
              src="/jui.jpg"
              width={400}
              height={300}
              className="w-full object-cover rounded"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
