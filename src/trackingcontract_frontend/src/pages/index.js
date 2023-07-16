import Button from "./button";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./button";
import MainNavigation from "./main-navigation";
import Link from "next/link";
import Footer from "./footer";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div className="">
      <MainNavigation/>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="justify-self-center sm:justify-self-end md:justify-self-end lg:col-span-2 lg:justify-self-end drop-shadow-lg">
          <img
            className="w-[22.4rem] h-[16.25rem] rounded-[67px] sm:rounded-none sm:w-[23.4rem] sm:h-[15.25rem] drop-shadow-lg md:w-[30rem] md:h-[20rem] lg:w-[53rem] lg:h-[33rem]"
            alt=""
            src="/replaced2.png"
          />
        </div>

        <div className="grid grid-cols-1 justify-self-center md:content-start lg:mt-12 sm:order-first md:justify-self-start md:ml-10 lg:ml-20 mr-11 ml-11">
          <div className="justify-self-center place-content-center md:place-self-start md:mt-8">
            <p className="[border:none] bg-[transparent] block font-montserrat text-[1.8rem] sm:ml-2 sm:text-[1.3rem] mt-5 lg:mt-0 text-center sm:text-start lg:text-[2.1rem]">
            Empower your healthcare journey with the convenience of rental and buying services.
            </p>
          
          </div>
          <div className="md:mt-2 justify-self-center place-self-center sm:ml-2 sm:place-self-start">
            <Link href="/products" passHref>
              <button className=" px-6 py-3 sm:px-3 sm:py-2 md:px-4 md:py-2 lg:px-8 lg:py-3 bg-black text-white text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.95rem] font-semibold border border-black rounded cursor-pointer hover:bg-white hover:text-black hover:border-black mr-5">
                Buy Now
              </button>
            </Link>
            <Link href="/About" passHref>
              <button className=" px-7 py-3 sm:px-3 sm:py-2 md:px-5 md:py-2 lg:px-9 lg:py-3  bg-darksalmon shadow-[0px_4px_4px_rgba(0,_0,_0,_0.1)] border border-darksalmon  text-white gap-[0.19rem] text-[0.9rem] sm:text-[0.7rem] md:text-[0.8rem] lg:text-[0.95rem] font-semibold md:mt-4 rounded-md cursor-pointer hover:bg-white hover:text-darksalmon ">
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" place-content-center justify-items-center lg:grid-cols-2">
      <div className="mt-8 lg:ml-0.1 lg:mt-10 sm:justify-self-center lg:justify-self-start lg:place-self-center">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000} // Change slide every 3 seconds
          showThumbs={false}
          style={{ width: '100%' }}
        >
          <div>
            <img
              className="w-[28.25rem] h-[17.25rem] justify-self-center sm:w-[26.25rem] sm:h-[20.25rem] md:w-[33.25rem] md:h-[25.25rem] lg:w-[38.25rem] lg:h-[38.25rem]"
              alt=""
              src="/aa23d4bca20b4f568e95eb777e5529ad-1@2x.png"
            />
          </div>
          <div>
            <img
              className="w-[28.25rem] h-[17.25rem] justify-self-center sm:w-[26.25rem] sm:h-[20.25rem] md:w-[33.25rem] md:h-[25.25rem] lg:w-[38.25rem] lg:h-[38.25rem]"
              alt=""
              src="https://img.freepik.com/premium-photo/hospital-room-with-large-operating-room-large-monitor-ceiling_374761-1278.jpg?w=2000"
            />
          </div>
          <div>
            <img
              className="w-[28.25rem] h-[17.25rem] justify-self-center sm:w-[26.25rem] sm:h-[20.25rem] md:w-[33.25rem] md:h-[25.25rem] lg:w-[38.25rem] lg:h-[38.25rem]"
              alt=""
              src="https://media.istockphoto.com/id/501707914/photo/empty-hospital-operating-theatre-with-lighting-over-bed.jpg?s=612x612&w=0&k=20&c=m7wuxOz_aSfSgDDTE7GyC9He0ZgMgPH6Ny9Hf7QXDEs="
            />
          </div>
        </Carousel>
      </div>
    </div>


      <div className="grid grid-cols-1 mt-14 place-items-center sm:grid-cols-1 mb-5">
        <div className="text-[1.7rem] text-center md:text-[3.2rem] justify-self-center font-semibold text-darksalmon inline-block">
          OUR OPERATIONAL MODEL
        </div>
        <div className="grid grid-cols-1 gap-y-7 md:gap-x-10 mt-8 md:grid-cols-1 lg:grid-cols-3">
          <div className="text-center font-bold text-[1.7rem] md:text-[2rem] lg:mr-9">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[20.88rem] h-[28.63rem] md:w-[25.88rem] md:h-[30.9rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[21rem] h-[19.5rem] md:w-[26rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image 1.png"
              />
              <div className="inline-block">
                <p className=" text-[1.8rem] font-medium">
                <Link href="/products" passHref>
                   Quality Products</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-[1.7rem] md:text-[2rem] lg:mr-9">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[20.88rem] h-[28.63rem] md:w-[25.88rem] md:h-[30.9rem]">
              <img
                className="rounded-t-xl rounded-b-none mt-[0.55rem] mb-2 w-[20rem] h-[18.5rem] md:w-[24.55rem] md:h-[23.1rem] drop-shadow-md object-fit"
                alt=""
                src="/image 2 (1).png"
              />
              <div className="inline-block">
                <p className="[margin-block-start:7px] text-[1.8rem] font-medium">
                  Customer Satisfaction
                </p>
              </div>
            </div>
          </div>
          <div className="text-center font-bold text-[1.7rem] md:text-[2rem] mb-3">
            <div className="rounded-xl bg-white shadow-[0px_4px_20px_2px_rgba(0,_0,_0,_0.25)] mt-6 w-[20.88rem] h-[28.63rem] md:w-[25.88rem] md:h-[30.9rem]">
              <img
                className="rounded-t-xl rounded-b-none w-[21rem] h-[19.5rem] md:w-[26rem] md:h-[24.5rem] object-fit"
                alt=""
                src="/image 3.png"
              />
              <div className="inline-block">
                
                <p className="text-[1.8rem] font-medium">
                  Faster Delivery and Secure Transaction
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
