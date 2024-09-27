'use client'
   import React from 'react';
   import { motion } from 'framer-motion';
   import { Experience, Education } from '../_lib/ExperienceEducationList';
   
   function ExperienceEducation() {
     const cardVariants = {
       hidden: { opacity: 0, y: 50 },
       visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
     };
   
     return (
       <div className='bg-[#0b1120] px-3 lg:px-6 py-24'>
         <div className="container">
           <div className='grid sm:grid-cols-2 gap-8'>
             {/* Experience Section */}
             <div>
               <h2 className='text-primary-h text-4xl font-bold mb-7'>My Experience</h2>
               <div className='flex flex-col gap-4'>
                 {Experience.map((item, index) => (
                   <motion.div
                     key={index}
                     variants={cardVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.5}}
                     className='px-9 rounded-xl py-[30px] border border-slate-800 bg-[#0d1425] hover:bg-primary group duration-200'
                   >
                     <h4 className='text-[20px] mb-1 text-primary duration-200 group-hover:text-white font-semibold'>
                       {item.year}
                     </h4>
                     <h3 className='text-white text-[25px] font-bold mb-1'>{item.title}</h3>
                     <span className='text-gray-300 text-[16px]'>{item.location}</span>
                   </motion.div>
                 ))}
               </div>
             </div>
   
             {/* Education Section */}
             <div>
               <h2 className='text-primary-h text-4xl font-bold mb-7'>My Education</h2>
               <div className='flex flex-col gap-4'>
                 {Education.map((item, index) => (
                   <motion.div
                     key={index}
                     variants={cardVariants}
                     initial="hidden"
                     whileInView="visible"
                     viewport={{ once: true, amount: 0.3 }}
                     className='px-9 rounded-xl py-[30px] border border-slate-800 bg-[#0d1425] hover:bg-primary group duration-200'
                   >
                     <h4 className='text-[20px] mb-1 text-primary duration-200 group-hover:text-white font-semibold'>
                       {item.year}
                     </h4>
                     <h3 className='text-white text-[25px] font-bold mb-1'>{item.title}</h3>
                     <span className='text-gray-300 text-[16px]'>{item.location}</span>
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </div>
     );
   }
   
   export default ExperienceEducation;
   