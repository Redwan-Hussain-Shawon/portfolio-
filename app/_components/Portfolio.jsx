'use client'
import Image from 'next/image';
import React, { useRef } from 'react';

const Portfolio = () => {
  const data = [
    {
      image: 'https://www.innovativeitsoft.com/public/image/ivis_portfolio1.png'
    },
    {
      image: 'https://img.alicdn.com/imgextra/i3/2211395202227/O1CN01gRrb9s1SK0mXwREV9_!!2211395202227.jpg_560x560Q70.jpg_.webp'
    },
    {
      image: 'https://www.innovativeitsoft.com/public/image/ivis_portfolio3.png'
    },
    {
      image: 'https://img.alicdn.com/imgextra/i1/2212685481076/O1CN01wc7rZD1Jor7Qolh8v_!!2212685481076.jpg_560x560Q70.jpg_.webpg'
    },
    {
      image: 'https://img.alicdn.com/imgextra/i2/2277557168/O1CN01JUVu8Q22ozkeiCDFm_!!2277557168.jpg_560x560Q70.jpg_.webp'
    },
    {
      image: 'https://gw.alicdn.com/imgextra/TB2IKsRXVXXXXcXXXXXXXXXXXXX_!!560072102.jpg_560x560Q70.jpg_.webp'
    },
    {
      image: 'https://img.alicdn.com/imgextra/i3/735255839/O1CN01UppNpW1t0JZFGBfyK_!!735255839.jpg_560x560Q70.jpg_.webp'
    },
    {
      image: 'https://img.alicdn.com/bao/uploaded/i3/2208761783941/O1CN01wRtyLz1ez1t3hbNV6_!!0-item_pic.jpg_560x560Q70.jpg_.webp'
    },
    {
      image: 'https://s3.ali2bd.net/files/2023/11/26/1d6fd250-8d66-4532-ba2a-5d4875e4a197.jpeg'
    },
  ];

  const imgRef = useRef([]); // Array to hold references to div elements
  
  // Function to add 'opacity-100' class once the image has fully loaded
  const thumbLoaded = (index) => {
    if (imgRef.current[index]) {
      imgRef.current[index].classList.add('opacity-100');
      console.log(`Image ${index} loaded`);
    }
  };

  return (
    <div className='px-3 lg:px-6 py-24'>
      <div className="container">
        <h2 className='text-[32px] text-white sm:text-[36px] text-center font-bold'>My Latest Project</h2>
        <p className='text-slate-400 text-center max-w-[600px] mt-2 mx-auto text-sm sm:text-base font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugit commodi provident incidunt placeat
        </p>
        
        <div className='grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {data.map((item, index) => (
            <div key={index}>
              {/* Wrapping div with opacity-0 initially */}
              <div
         
                className={`bg-slate-200 h-[400px] rounded shadow-lg bg-no-repeat bg-center bg-cover`} // Transition for smooth opacity change
                style={{ backgroundImage: `url('preloader-bg.png')` }} // Optional: Placeholder background
              >
                <Image
                       ref={(el) => (imgRef.current[index] = el)} 
                  src={item.image}
                  className="object-cover h-full w-full rounded block opacity-0 "
                  width={400}
                  height={500}
                  onLoadingComplete={() => thumbLoaded(index)} 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
