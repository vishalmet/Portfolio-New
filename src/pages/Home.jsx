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
    
    <div className=" h-screen bg-gradient-to-b from-cyan-300 via-slate-500 to-cyan-300 bg-cover bg-center" >
        <ParticlesBg/>
        <Navbar/>

          <div className=" items-center m-2 mt-32 mb-40 flex-shrink-0 md:ml-48 md:flex md:mx-32 md:mt-44 md:mb-52 md:space-x-16">
              <img className=' mx-[25%] md:mx-0 md:ml-40 flex justify-center h-44  md:h-80' src={HomePic} alt="" />
            <div className=" mx-[15%] flex justify-center flex-col pt-6 md:pt-0 md:mx-0 poppins-font text-2xl md:text-4xl font-semibold">
              <p className=' '>Hey Folks🚀</p>
              <p className=' pb-4 '>I am <span style={blueColor}>Vishal Aakash</span></p>
              <TypeWriting/>
            </div>
          </div>
      <About />
    </div>
  );
};

export default Home;