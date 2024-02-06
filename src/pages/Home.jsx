import React from 'react';
import ParticlesBg from '../components/ParticlesBg';
// import Bg from '../assets/bg.png';
import discovery from '../assets/Discovery.png';
import TypeWriting from '../components/TypeWriting';


const blueColor = {
color: '#46CFE5'
}

// const textShadowStyle = {
//   textShadow: '3px 4px 4px rgba(255, 255, 255, 0.25)',
// };

const Home = () => {
  return (
    
    <div className=" h-screen bg-gradient-to-b from-cyan-400 via-slate-500 to-cyan-400 bg-cover bg-center" >
        <ParticlesBg/>
        {/* Navbar */}
        <div className=" flex justify-center pt-2 ">
                <div className=' flex  items-center flex-shrink-0 poppins-font  text-xl 'style={{blueColor}} >
                    <ul className='hidden md:flex flex-wrap items-center space-x-2  md:space-x-4 text-shadow-xs font-medium text-black'>
                        <li className='py-1 px-3 underline hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-3  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="/about">About Me</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                            <a href="/experience">Experience</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                            <a href="/works">My Works</a>
                        </li>
                        <li className='py-1 px-3 hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1SXoG2med5vyVV4orem7vDVyDefa5qItY/view?usp=drive_link" target='_blank' className='py-3 px-3 mx-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-md cursor-pointer font-semibold text-black hover:from-sky-400 hover:to-sky-200 hover:text-black poppins-font'>Resume</a>

                </div>
          </div>


          <div className=" items-center md:flex md:mt-32 md:space-x-10   ">
              <img className=' flex justify-center mx-2 md:mx-32 h-auto' src={discovery} alt="" />
            <div className=" flex flex-col poppins-font text-3xl font-semibold">
              <p >Hey Folks🚀</p>
              <p>I am <span style={blueColor}>Vishal Aakash</span></p>
              <TypeWriting/>
            </div>
          </div>

          <div className="">
            <p className='flex justify-center poppins-font text-3xl font-medium'>Connect with me on:</p>
            
          </div>
    </div>
  )
}

export default Home;