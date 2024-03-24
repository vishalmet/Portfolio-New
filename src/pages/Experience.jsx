import React, {useEffect} from 'react';
import ParticlesBg from '../components/ParticlesBg';
import X from '../assets/X.png';
import gry from '../assets/gryffindors.jpeg';
import linkedin from '../assets/linkedin.png';

import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../components/Navbar';



const textBG = {
  // border: '1px solid #FFF',
  // borderRadius: '1rem',
  background: 'rgba(48, 48, 48, 0.50)',
};


const Experience = () => {

  useEffect(() => {
    Aos.init();
  }, [])


  return (
  <div className="  bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 bg-cover bg-center" > 
    <ParticlesBg/>
    <div className=" text-white">
      <Navbar/>
    </div>
    <p className=' flex justify-center text-2xl md:text-4xl font-semibold text-with-glow text-white pt-24 md:pt-24 poppins-font'>My Experience</p>
        {/* 1 */} 
        <div className=" pt-10 pb-10 mx-3 md:mx-10 lg:mx-[22%] flex-shrink-0">
          <div className=" space-y-6 rounded-lg p-10 poppins-font border-glow" data-aos = "flip-left" style={textBG}>
            <p className=' text-xl underline font-semibold bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent md:text-3xl'>10th July 2023 - 24 september 2023</p>                  
            <p className=' text-base text-white pb-5 md:text-2xl' >I had the opportunity to intern at <span className=' font-semibold bg-gradient-to-b from-green-900 via-green-300 to-green-500 bg-clip-text text-transparent'>SecureDApp</span>, where I worked as a Frontend Developer while exploring and implementing various growth hacking strategies. During my internship, I gained valuable experience in web development, user interface design, and marketing techniques.</p>
            <div className=" space-x-6 flex justify-center ">
              <a href="/securedapp" className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More</a>
              <a href="https://drive.google.com/file/d/1gJQhd80DoOOWno4PyjFHc4JUlv7zY7ES/view?usp=drive_link" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Certificate</a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" pt-10 pb-10 mx-3 md:mx-10 lg:mx-[22%] flex-shrink-0">
          <div className=" space-y-6 rounded-lg p-10 poppins-font border-glow" data-aos = "flip-right" style={textBG}>
            <p className=' text-xl underline font-semibold bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent md:text-3xl'>17th July 2023 - 18th October 2023</p>                  
            <p className=' text-base text-white pb-5 md:text-2xl' >
              During my internship at <span className=' font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent'>Yugaastech</span>, I functioned as a Frontend Developer and UI/UX Designer, contributing to various projects and enhancing user experiences through innovative design solutions.              
            </p>
            <div className=" space-x-6 flex justify-center ">
              <a href="/yugaastech" className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More</a>
              <a href="https://drive.google.com/file/d/1MdftnczigVPvQRl6mQaeGSvTP-Qf-wI5/view?usp=drive_link" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Certificate</a>
            </div>          
          </div>
        </div>
        {/* 3 */}
        <div className=" pt-10 pb-10 mx-3 md:mx-10 lg:mx-[22%] flex-shrink-0">
          <div className=" space-y-6 rounded-lg p-10 poppins-font border-glow" data-aos = "flip-left" style={textBG}>
            <p className=' text-xl underline font-semibold bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent md:text-3xl'>24th May 2023 - Present</p>                  
            <p className=' text-base text-white pb-5 md:text-2xl' >
              As a dedicated Social Media Manager at <span className=' font-semibold bg-gradient-to-r from-orange-700 via-orange-300 to-orange-400 bg-clip-text text-transparent'>Gryffindors</span>, I am entrusted with the responsibility of overseeing the organization's online presence and effectively engaging with our audience across various social media platforms.           
            </p>
            <div className=" flex justify-center space-x-6">
              <div className=' flex items-center py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>
                <a className=' hover:scale-105 transition-transform pr-2' href=" https://twitter.com/Gryffindor_W3"><img className=' h-4 md:h-6' src={X}></img></a>
                <a href=" https://twitter.com/Gryffindor_W3"  target='_blank'> handle</a>
              </div>
              <div className="hidden md:inline">
                <div className='  flex items-center py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>
                  <a className=' hover:scale-105 transition-transform pr-2'><img className=' h-4 md:h-6 rounded-full' src={gry}></img></a>
                  <a href=" https://gryffindors.vercel.app/"  target='_blank'> Website</a>
                </div>
              </div>
              <div className=' flex items-center py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>
                <a className=' hover:scale-105 transition-transform pr-2'><img className=' h-4 md:h-6' src={linkedin}></img></a>
                <a href=" https://www.linkedin.com/company/89937658/admin/feed/posts/"  target='_blank'> handle</a>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-black flex justify-center">
          <p className=' text-white poppins-font p-3'> Designed & Developed by Vishal Aakash</p>
        </div>
  </div>
  )
}

export default Experience;