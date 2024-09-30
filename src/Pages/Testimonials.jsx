import React from "react";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Garv sahu",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Abhijeet kumar",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Vivek Jadhav",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Anant dubey",
    title: "Berozgaar @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <>
    <section className='py-20  bg-[#EBEBEB] '>
      <div className='container'>
        <h2 className='text-5xl md:text-6xl text-center tracking-tighter font-medium'>
          Testimonials
        </h2>
        
        <div className='flex overflow-hidden mt-10'>
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className='flex gap-5 p-5 flex-none'>
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className='border bg-white border-white/15 p-6 md:p-10 rounded-xl max-w-xs md:max-w-md flex-none'>
                <div className='text-lg md:text-2xl tracking-tighter'>
                  {testimonial.text}
                </div>
                <div className='flex items-center gap-3 mt-5'>
                  <div className=" bg-white ">
                    <img
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className='h-11 w-11 rounded-lg'
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className='text-white/50 text-sm'>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>

              
            ))}
          </motion.div>
        </div>

        <div className='flex overflow-hidden mt-5'>
          <motion.div
            initial={{
              translateX: "-50%",
            }}
            animate={{
              translateX: "0",
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className='flex gap-5 p-5 flex-none'>
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div
                key={testimonial.name}
                className='border bg-white border-white/15 p-6 md:p-10 rounded-xl max-w-xs md:max-w-md flex-none'>
                <div className='text-lg md:text-2xl tracking-tighter'>
                  {testimonial.text}
                </div>
                <div className='flex items-center gap-3 mt-5'>
                  <div className=" bg-white ">
                    <img
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className='h-11 w-11 rounded-lg'
                    />
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div className='text-white/50 text-sm'>
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>

              
            ))}
          </motion.div>
        </div>
        

        
      </div>
    </section>

    <div className="bg-[#0067FF]  rounded-2xl my-3 m-4 flex items-center justify-center gap-14 p-3">
    <p className='text-5xl text-white'>Join Revolution</p>
    <p className='text-5xl'>+</p>
    <p className='text-5xl text-white'>Join Revolution</p>
    <p className='text-5xl'>+</p>
    <p className='text-5xl text-white'>Join Revolution</p>
  </div>
  </>
  );
};


export default Testimonials;