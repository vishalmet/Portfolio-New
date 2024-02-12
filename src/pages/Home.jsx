import React from 'react';
import ParticlesBg from '../components/ParticlesBg';
import TypeWriting from '../components/TypeWriting';
import HomePic from '../assets/home.png'
import About from './About';




const blueColor = {
color: '#46CFE5'
}


const Home = () => {


  return (
    
    <div className=" h-screen bg-gradient-to-b from-cyan-300 via-slate-500 to-cyan-300 bg-cover bg-center" >
        <ParticlesBg/>
        {/* Navbar */}
        <div className=" bg-cyan-300 pb-3 flex justify-center pt-2 " >
                <div className=' flex  items-center flex-shrink-0 poppins-font  text-xl 'style={{blueColor}} >
                    <ul className='hidden text-black md:flex flex-wrap items-center space-x-2  md:space-x-4 font-medium'>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap underline hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="#about-section">About Me</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                            <a href="/experience">Experience</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                            <a href="/works">My Works</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>Contact</li>
                    </ul>
                    <a href="https://drive.google.com/file/d/1SXoG2med5vyVV4orem7vDVyDefa5qItY/view?usp=drive_link" target='_blank' className=' py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-md cursor-pointer font-semibold text-black hover:from-sky-400 hover:to-sky-200 hover:text-black poppins-font'>Resume</a>

                </div>
        </div>


          <div className=" items-center m-2 mt-32 mb-40 flex-shrink-0 md:ml-48 md:flex md:mx-32 md:mt-44 md:mb-52 md:space-x-6">
              <img className=' ml-12 md:ml-40 flex justify-center h-44  md:h-64' src={HomePic} alt="" />
            <div className=" mx-6 flex justify-center flex-col pt-6 md:pt-0 md:mx-0 poppins-font text-3xl md:text-4xl font-semibold">
              <p >Hey Folks🚀</p>
              <p className=' pb-4 '>I am <span style={blueColor}>Vishal Aakash</span></p>
              <TypeWriting/>
            </div>
          </div>
      <About />
    </div>
  );
};

export default Home;