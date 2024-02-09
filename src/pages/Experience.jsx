import React from 'react';
import ParticlesBg from '../components/ParticlesBg';

const textBG = {
  // border: '1px solid #FFF',
  // borderRadius: '1rem',
  background: 'rgba(48, 48, 48, 0.50)',
};


const Experience = () => {
  return (
  <div id='about-section' className="  bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 bg-cover bg-center" > 
    <ParticlesBg/>
    <div className=" flex justify-center pt-2 ">
                <div className=' flex  items-center flex-shrink-0 poppins-font  text-xl ' >
                    <ul className='hidden text-white md:flex flex-wrap items-center space-x-2  md:space-x-4 font-medium'>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black' >
                        <a href="#about-section">About Me</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 underline flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                            <a href="/experience">Experience</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                            <a href="/works">My Works</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1SXoG2med5vyVV4orem7vDVyDefa5qItY/view?usp=drive_link" target='_blank' className=' py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-md cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black poppins-font'>Resume</a>
                </div>
        </div>
        {/* 1 */}
        <div className=" pt-10 pb-10 mx-3 md:mx-[22%] flex-shrink-0">
          <div className=" space-y-6 rounded-lg p-10 poppins-font" style={textBG}>
            <p className=' text-xl underline font-semibold bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent md:text-3xl'>10th July 2023 - 24 september 2023</p>                  
            <p className=' text-base text-white pb-5 md:text-2xl' >I had the opportunity to intern at <span className=' font-semibold bg-gradient-to-b from-green-900 via-green-300 to-green-500 bg-clip-text text-transparent'>SecureDApp</span>, where I worked as a Frontend Developer while exploring and implementing various growth hacking strategies. During my internship, I gained valuable experience in web development, user interface design, and marketing techniques.</p>
            <div className=" space-x-6 flex justify-center ">
              <a href="/securedapp" className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More!</a>
              <a href="https://drive.google.com/file/d/1gJQhd80DoOOWno4PyjFHc4JUlv7zY7ES/view?usp=drive_link" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Certificate</a>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" pt-10 pb-10 mx-3 md:mx-[22%] flex-shrink-0">
          <div className=" space-y-6 rounded-lg p-10 poppins-font" style={textBG}>
            <p className=' text-xl underline font-semibold bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent md:text-3xl'>17th July 2023 - 18th October 2023</p>                  
            <p className=' text-base text-white pb-5 md:text-2xl' >
              During my internship at <span className=' font-semibold bg-gradient-to-r from-blue-400 via-blue-300 to-orange-400 bg-clip-text text-transparent'>Yugaastech</span>, I functioned as a Frontend Developer and UI/UX Designer, contributing to various projects and enhancing user experiences through innovative design solutions.              
            </p>
            <div className=" space-x-6 flex justify-center ">
              <a href="/yugaastech" className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More!</a>
              <a href="https://drive.google.com/file/d/1MdftnczigVPvQRl6mQaeGSvTP-Qf-wI5/view?usp=drive_link" target='_blank' className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Certificate</a>
            </div>          
          </div>
        </div>
        {/* 3 */}
        <div className=" pt-10 pb-10 mx-3 md:mx-[22%] flex-shrink-0">
          <div className=" space-y-6 rounded-lg p-10 poppins-font" style={textBG}>
            <p className=' text-xl underline font-semibold bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-clip-text text-transparent md:text-3xl'>24th May 2023 - Present</p>                  
            <p className=' text-base text-white pb-5 md:text-2xl' >
              As a dedicated Social Media Manager at <span className=' font-semibold bg-gradient-to-r from-orange-700 via-orange-300 to-orange-400 bg-clip-text text-transparent'>Gryffindors</span>, I am entrusted with the responsibility of overseeing the organization's online presence and effectively engaging with our audience across various social media platforms. In this role, I leverage my expertise in digital marketing and content strategy to drive brand awareness, enhance user engagement, and foster meaningful connections with our community.            
            </p>
            <a href="/securedapp" className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black'>Learn More!</a>
          </div>
        </div>
  </div>
  )
}

export default Experience;