"use client";
import React from "react";
import { motion } from "framer-motion";
import { ServiceList } from "../_lib/ServiceList";
import Image from "next/image";

export const Service = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: {
            type: "spring", 
            stiffness: 70, 
            damping: 12,    
            duration: 0.8, 
            delay: i * 0.2,
            ease: "easeInOut",
          },
        }),
      };
  return (
    <section className="px-3 lg:px-6 py-24" id="services">
      <div className="container">
        <h2 className="text-center text-[32px] sm:text-[38px] mb-3 text-white font-bold">
          My Quality <span className="text-primary-h">Services</span>
        </h2>
        <p className="text-slate-400 text-center max-w-[550px] mx-auto text-sm sm:text-base font-medium ">
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and you customers.
        </p>
        <div className="grid gap-5 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ServiceList.map((service, index) => (
                 <motion.div
                 key={index}
                 className="bg-[#0f172d] shadow-md p-8 rounded-lg border border-slate-800 group hover:border-primary duration-300"
                 variants={cardVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of the card is visible
                 custom={index} // Pass index to calculate the delay
               >
                 <div className="w-12 mx-auto h-12 rounded-full bg-slate-50 group-hover:bg-primary duration-300 flex justify-center items-center">
                   <Image
                     src={service.icon}
                     width={80}
                     height={80}
                     className="w-[70%]"
                     alt={service.title}
                   />
                 </div>
                 <h3 className="text-white font-semibold text-[19px] mt-4 text-center">
                   {service.title}
                 </h3>
                 <p className="text-slate-400 text-sm mt-3 line-clamp-4 text-center">
                   {service.description}
                 </p>
               </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
