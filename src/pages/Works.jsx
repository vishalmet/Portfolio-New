import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ParticlesBg from "../components/ParticlesBg";
import Ticket3 from "../assets/ticket3.jpeg";
import DeCric from "../assets/DeCric.jpeg";
import Grfolio from "../assets/grfolio.jpeg";
import FundRaiz from "../assets/FundRaiz.jpeg";
import Tesla from "../assets/tesla.png";
import IG from "../assets/IG.png";
import OneSign from "../assets/onesign.png";
import  CryptCofee from '../assets/cryptcoffee.png';
import Navbar from "../components/Navbar";

const textBG = {
  // border: '1px solid #FFF',
  // borderRadius: '1rem',
  background: "rgba(48, 48, 48, 0.50)",
};

const Works = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="  bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 bg-cover bg-center">
      <ParticlesBg />
      <div className=" text-white">
        <Navbar />
      </div>
      <p className=" flex justify-center text-2xl md:text-4xl font-semibold text-white text-with-glow pt-24 md:pt-24 poppins-font">
        My Works
      </p>
      {/* OneSign */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-right"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={OneSign}
            alt="OneSign"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              OneSign: The Next Gen Effortless ZK Onboarding!
            </p>
            <p className=" pb-2">
              Next Gen Effortless ZK Onboarding provides seamless decentralized
              access, enabling users to effortlessly log in using only their
              user ID, removing the necessity for repetitive wallet connections
              or traditional login methods.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://devfolio.co/projects/onesign-fa91"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Ticket3 */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-right"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={Ticket3}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              Ticket3: Crypto tickets, your way!
            </p>
            <p className=" pb-2">
              Our goal in developing this product is to address the challenges
              posed by the black market and ticket scalping, ensuring that venue
              capacities are respected to prevent overcrowding and potential
              disturbances.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://devfolio.co/projects/ticket-v-d478"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Decric */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-left"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={DeCric}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              DeCric: A Decentralized fantasy cricket!
            </p>
            <p className=" pb-2">
              We developed a decentralized sports prediction app for transparent
              contest participation and clear winner announcements, overcoming
              the opacity of centralized platforms.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://devfolio.co/projects/decricv-94e7"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Grfolio */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-right"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={Grfolio}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              Grfolio: It is Devfolio, but Decentralized!
            </p>
            <p className=" pb-2">
              Our decentralized product, akin to Devfolio, offers proof of work
              to hackers. Overcoming the challenge of showing proof of work, our
              solution empowers users effectively.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://devfolio.co/projects/grfolio-6779"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* FundRaiz */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-left"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={FundRaiz}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              FundRaiz: Empower the Crowd, Fund the Future!
            </p>
            <p className=" pb-2">
              Empowerment through Decentralized Crowdfunding. Our platform
              enables users to create or contribute to campaigns, ensuring
              transparency and maximizing donations for administrators.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://devfolio.co/projects/fundraiz-7b6e"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Cryptcoffee */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-left"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={CryptCofee}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              Cryptcoffee!
            </p>
            <p className=" pb-2">
              Our website offers users the opportunity to donate funds for a virtual 'coffee' to fuel ongoing blockchain projects. Join us in fostering innovation and fueling the future of decentralized technology, one cup at a time.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://coffeecornerspk.vercel.app/"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* tesla */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-right"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={Tesla}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              Tesla UI: A smooth and seemless UI!
            </p>
            <p className=" pb-2">
              Created purely out of interest, this Tesla-inspired UI showcases
              my dedication to learning and building with Tailwind CSS. The
              seamless design and innovative technology of Tesla continue to
              inspire us.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://github.com/vishalmet/Tesla-UI"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Instagram */}
      <div className=" pt-12 pb-12 flex-shrink-0">
        <div
          className=" lg:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 lg:space-x-32 border-glow "
          data-aos="flip-left"
          style={textBG}
        >
          <img
            className=" h-auto rounded-lg pt-2 md:pt-0 lg:h-52"
            data-aos="fade-up"
            src={IG}
            alt="Vishal"
          />
          <div
            className=" pt-3 lg:pt-0 space-y-4 md:text-2xl text-white poppins-font"
            data-aos="fade-up"
          >
            <p className=" flex justify-center font-semibold">
              Instagram UI: A smooth and seemless UI!
            </p>
            <p className=" pb-2">
              Created for learning and inspired by Instagram's seamless UI and
              innovative tech, this project showcases my interest in Tailwind
              CSS.
            </p>
            <div className=" flex justify-center">
              <a
                href="https://github.com/vishalmet/Instagram-UI"
                target="_blank"
                className="py-2 px-2 text-base md:text-xl bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black"
              >
                Click here
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-black flex justify-center">
        <p className=" text-white poppins-font p-3">
          Designed & Developed by Vishal Aakash
        </p>
      </div>
    </div>
  );
};

export default Works;
