'use client'
import React, { useState } from "react";

const Contact = () => {
  const [authState,setAuthState] = useState({
    name:'',
    email:'',
    number:'',
    service:'',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    number: '',
    service: '',
  });
  const handaleFrom = (e)=>{
    e.preventDefault();
    const {name,email,number,service} = authState;


    // name validate
    if(name === ''){
      setErrors((pre)=>({...pre,name:'name is empty'}))
    }else if(name.trim().length<3){
      setErrors((pre)=>({...pre,name:'name minmum 4 chracter'}))
    }else{
      setErrors((pre)=>({...pre,name:''}))
    }

    if(email===''){
     setErrors((pre)=>({...pre,email:'email is empty'}))
    }else if(!email.includes('@') || !email.includes('.com')){
      setErrors((pre)=>({...pre,email:'email is not valid'}))
    } else{
      setErrors((pre)=>({...pre,email:''}))
    }

    if(number === ''){
      setErrors((pre)=>({...pre,number:'name is empty'}))
    }else if(!/^[0-9]+$/.test(number)) {
      setErrors((pre)=>({...pre,number:'number is not valid'}))
    }else{
      setErrors((pre)=>({...pre,number:''}))
    }
    if(service === ''){
      setErrors((pre)=>({...pre,service:'service is not valid'}))
    }else{
      setErrors((pre)=>({...pre,service:''}))
    }

    console.log(errors)
  }
  return (
    <section className="px-3 lg:px-6 py-24 bg-[#0b1120]" id="contact">
      <div className="container">
        <h2 className="text-[32px] text-white sm:text-[36px]  text-center font-bold"><span className="text-primary-h">Contact</span> With Us</h2>
        <div className="grid grid-cols-7 mt-6  gap-8">
          <form action="" method="post" className="col-span-7 lg:col-span-4 flex flex-col gap-5 bg-[#0f172a] px-8 py-10 rounded shadow-xl" onSubmit={handaleFrom} >
            <div className="flex flex-col gap-2 w-full ">
              <label htmlFor="name" className="text-gray-200 text-base " >Enter Your Full Name</label>
              <input type="text" placeholder="enter full name" className={`w-full placeholder:text-gray-300 outline-none text-gray-300 bg-[#1e293b] px-4 rounded outline-nonetext-sm py-3 border border-transparent focus:border-primary ${errors.name!==''?'border-red-500':''}`}  onChange={(e)=>setAuthState({...authState,name:e.target.value})}/>
              {errors.name!==''?(
                <span className="text-red-500 text-sm ">{errors.name}</span>
              ):''}
              {}
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label htmlFor="name" className="text-gray-200 text-base">Enter Your Email</label>
              <input type="text" placeholder="enter full email" className={`w-full placeholder:text-gray-300 outline-none text-gray-300 bg-[#1e293b] px-4 rounded outline-nonetext-sm py-3 border border-transparent focus:border-primary ${errors.email!==''?'border-red-500':''}`} onChange={(e)=>setAuthState({...authState,email:e.target.value})} />
              {errors.email!==''?(
                <span className="text-red-500 text-sm ">{errors.email}</span>
              ):''}
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label htmlFor="name" className="text-gray-200 text-base  ">Enter Your Phone Number</label>
              <input type="text" placeholder="enter full your phone number" className={`w-full placeholder:text-gray-300 outline-none text-gray-300 bg-[#1e293b] px-4 rounded outline-nonetext-sm py-3 border border-transparent focus:border-primary ${errors.number!==''?'border-red-500':''}`} onChange={(e)=>setAuthState({...authState,number:e.target.value})}/>
              {errors.number!==''?(
                <span className="text-red-500 text-sm ">{errors.number}</span>
              ):''}
            </div>
            <div className="flex flex-col gap-2 w-full ">
              <label htmlFor="name" className="text-gray-200 text-base " >Select Your Service</label>
              <select name="" id="" className={`w-full placeholder:text-gray-300 outline-none text-gray-300 bg-[#1e293b] px-4 rounded outline-nonetext-sm py-3 border border-transparent focus:border-primary ${errors.service!==''?'border-red-500':''}`} onChange={(e)=>setAuthState({...authState,service:e.target.value})}>
                <option name="" id="">Select a Service</option>
                <option value="web-design">Web Design</option>
                <option value="web-development">Web Development</option>
              </select>
              {errors.service!==''?(
                <span className="text-red-500 text-sm ">{errors.number}</span>
              ):''}
            </div>
            <button type="submit" className="bg-primary px-6 rounded-sm inline-block text-white w-fit py-2">Submit</button>
          </form>
          <div className="col-span-7 lg:col-span-3 lg:mt-14  ">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.718 3.092c1.226-1.291 3.254-1.05 4.268.384l1.26 1.784c.811 1.147.743 2.74-.225 3.76l-.245.257l-.002.006c-.013.036-.045.152-.013.372c.067.455.418 1.381 1.846 2.884c1.432 1.508 2.3 1.863 2.703 1.929a.6.6 0 0 0 .294-.007l.408-.43c.874-.92 2.236-1.101 3.335-.469l1.91 1.1c1.633.94 2.013 3.239.708 4.613l-1.42 1.495c-.443.467-1.048.866-1.795.94c-1.824.18-6.049-.055-10.478-4.719c-4.134-4.351-4.919-8.136-5.018-9.985l.666-.036l-.666.036c-.049-.914.358-1.697.894-2.262zm3.043 1.25c-.512-.724-1.433-.768-1.956-.217l-1.57 1.652c-.33.35-.505.75-.483 1.149c.08 1.51.731 4.952 4.607 9.032c4.064 4.28 7.809 4.4 9.244 4.259c.283-.028.575-.186.854-.48l1.42-1.495c.614-.646.453-1.808-.368-2.28l-1.91-1.1c-.513-.295-1.114-.204-1.499.202l-.456.48l-.527-.501c.527.5.527.501.526.502l-.001.001l-.003.004l-.007.006l-.014.014a1 1 0 0 1-.136.112c-.08.056-.186.119-.321.172c-.276.109-.64.167-1.091.094c-.878-.142-2.028-.773-3.55-2.376c-1.528-1.608-2.113-2.807-2.243-3.7c-.067-.454-.014-.817.084-1.092a1.6 1.6 0 0 1 .23-.427l.03-.037l.014-.015l.006-.007l.003-.003l.002-.001s0-.002.533.503l-.532-.505l.287-.302c.445-.469.51-1.263.088-1.86z" clip-rule="evenodd"/><path fill="currentColor" d="M13.26 1.88a.75.75 0 0 1 .861-.62c.025.005.107.02.15.03q.129.027.352.09c.297.087.712.23 1.21.458c.996.457 2.321 1.256 3.697 2.631c1.376 1.376 2.175 2.702 2.632 3.698c.228.498.37.912.457 1.21a6 6 0 0 1 .113.454l.005.031a.765.765 0 0 1-.617.878a.75.75 0 0 1-.86-.617a3 3 0 0 0-.081-.327a7.4 7.4 0 0 0-.38-1.004c-.39-.85-1.092-2.024-2.33-3.262s-2.411-1.939-3.262-2.329a7.4 7.4 0 0 0-1.003-.38a6 6 0 0 0-.318-.08a.76.76 0 0 1-.626-.861"/><path fill="currentColor" fill-rule="evenodd" d="M13.486 5.33a.75.75 0 0 1 .927-.516l-.206.721l.207-.72h.002l.004.001l.007.002l.02.007q.023.006.057.019q.067.023.177.07c.145.062.344.158.589.303c.49.29 1.157.77 1.942 1.556c.785.785 1.267 1.453 1.556 1.942c.145.245.241.444.304.59a3 3 0 0 1 .089.233l.006.02l.002.008l.001.003v.002l-.72.207l.721-.206a.75.75 0 0 1-1.44.422l-.003-.01l-.035-.088a4 4 0 0 0-.216-.417c-.223-.376-.625-.946-1.325-1.646s-1.27-1.102-1.646-1.325a4 4 0 0 0-.504-.25l-.01-.004a.75.75 0 0 1-.506-.925" clip-rule="evenodd"/></svg>
                </div>
                <div >
                  <span className="text-slate-300 text-sm">Phone</span>
                 <a href="#"> <h3 className="text-slate-100 hover:text-primary-h cursor-pointer duration-300 font-medium text-lg ">+01 123 654 8096</h3>
                 </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                </div>
                <div >
                  <span className="text-slate-300 text-sm">Gmail</span>
                 <a href="#"> <h3 className="text-slate-100 hover:text-primary-h cursor-pointer duration-300 font-medium text-lg ">gerolddesign@mail.com</h3>
                 </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary w-12 h-12 flex justify-center items-center rounded-full text-white ">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7L4 8v10h16V8zm0-2l8-5H4zM4 8V6v12z"/></svg>
                </div>
                <div >
                  <span className="text-slate-300 text-sm">Address</span>
                 <a href="#"> <h3 className="text-slate-100 hover:text-primary-h cursor-pointer duration-300 font-medium text-lg ">Warne Park Street Pine,<br />
                 FL 33157, New York</h3>
                 </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
