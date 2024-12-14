import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTypewriter,Cursor } from 'react-simple-typewriter'

const Banner = () => {

  const [type] = useTypewriter({
    words:["Donation","Business","Tecnology","Startup"],
    loop:{Infinity},
    typeSpeed:120,
    delaySpeed:300,
    deleteSpeed:80
  })
 
  return (
    <div className="py-4">
      <div className="carousel w-full">
        <div
          style={{
            backgroundImage:
              "url('https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="slide1"
          className="carousel-item relative w-full"
        >
          <motion.div 
           
           initial={{
            x:100,
            opacity:0
          }}
         
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            delay:0.2,
            x:{type:"spring",satisfies:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1
          }}
          
          className="py-36 bg-black/70 w-full text-white flex justify-center items-center flex-col gap-y-4">
            <h2 className=" text-2xl sm:text-4xl font-bold text-center">
            Our Plotform <span>{type}</span>
            </h2>
           
            
            <Link
              to="/allcampaing"
              className="px-6 py-2 bg-[#1DACCB] text-white font-bold rounded-md"
            >
              Donation
            </Link>
          </motion.div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle ">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url('http://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slid3.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="slide2"
          className="carousel-item relative w-full"
        >
          <motion.div 
            initial={{
              x:100,
              opacity:0
            }}
           
            whileInView={{
              x:0,
              opacity:1
            }}
            transition={{
              delay:0.2,
              x:{type:"spring",satisfies:60},
              opacity:{duration:1},
              ease:"easeIn",
              duration:1
            }}
          className="py-36 bg-black/70 w-full text-white flex justify-center items-center flex-col gap-y-4">
            <h2 className="text-2xl sm:text-4xl text-center font-bold">
            FireWork <br/>Fire takes everything with its destruction
            </h2>
            <Link
              to="/allcampaing"
              className="px-6 py-2 bg-[#1DACCB] text-white font-bold rounded-md"
            >
              Donation
            </Link>
          </motion.div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              "url('https://kodeforest.net/wp-demo/disaster-help/wp-content/uploads/2017/04/slide2.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          id="slide3"
          className="carousel-item relative w-full"
        >
          <motion.div
            initial={{
            x:100,
            opacity:0
          }}
         
          whileInView={{
            x:0,
            opacity:1
          }}
          transition={{
            delay:0.2,
            x:{type:"spring",satisfies:60},
            opacity:{duration:1},
            ease:"easeIn",
            duration:1
          }}
          className="py-36 bg-black/70 w-full text-white flex justify-center items-center flex-col gap-y-4">
            <h2 className="text-2xl sm:text-4xl text-center font-bold">
            WindStrom <br/>Heavy Windstrom destroys all the homes 
            </h2>
            <Link
              to="/allcampaing"
              className="px-6 py-2 bg-[#1DACCB] text-white font-bold rounded-md"
            >
              Donation
            </Link>
          </motion.div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
