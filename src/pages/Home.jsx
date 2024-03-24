import React, {useState} from 'react';
import ParticlesBg from '../components/ParticlesBg';
import TypeWriting from '../components/TypeWriting';
import HomePic from '../assets/home.png'
import About from './About';
import Logo from '../assets/VAlogo.png'
import Navbar from '../components/Navbar';




const blueColor = {
color: '#46CFE5'
}




const Home = () => {


  return (
    
    <div className=" h-full bg-gradient-to-b from-cyan-300 via-slate-500 to-cyan-300 bg-cover bg-center" >
        <ParticlesBg/>
        <Navbar/>

          <div className=" items-center p-2 pt-32 mb-40 flex-shrink-0 lg:ml-48 lg:flex lg:mx-32 md:pt-44 md:mb-52 lg:space-x-16 ">
              <div className=" flex justify-center">
                <img className=' md:mx-0 lg:ml-40  h-44  md:h-80' src={HomePic} alt="" />
              </div>
            <div className="   flex-col pt-6 lg:pt-0 md:mx-0 poppins-font text-2xl md:text-4xl font-semibold">
              <p className=' flex justify-center lg:flex-col '>Hey Folks🚀</p>
              <div className=" flex justify-center lg:flex-col">
                <p className=' pb-4 '>I am <span className='  text-white text-with-glow ' >Vishal Aakash</span></p>
              </div>
              <div className="flex justify-center lg:flex-col text-with-glow">
                <TypeWriting/>
              </div>
            </div>
          </div>
      <About />
    </div>
  );
};

export default Home;