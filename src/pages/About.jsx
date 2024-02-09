import React from 'react';
import ParticlesBg from '../components/ParticlesBg';
import Me from '../assets/Me.jpg';
import Tools from '../assets/tool2.png';
import X from '../assets/X.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Yt from '../assets/yt.png';


const blueColor = {
  color: '#46CFE5'
  }
const textBG = {
    // border: '1px solid #FFF',
    // borderRadius: '1rem',
    background: 'rgba(48, 48, 48, 0.50)',
};
  const Navcolor ={
    backgroundColor: '#17042799',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}
  
const About = () => {
  return (
    <div id='about-section' className=" bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 bg-cover bg-center" > 
        <ParticlesBg/>

        <div className=" pt-12 pb-12 flex-shrink-0" >
          <p className=' flex justify-center  pt-6 font-semibold poppins-font text-white text-2xl  md:text-4xl '>ABOUT</p>
          <div className=" md:flex justify-center items-center p-3 md:p-16 mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 md:space-x-32 hover:scale-105 hover:border-2 hover:border-cyan-300 " style={textBG}>
            <div className=' space-y-4 md:text-2xl text-white poppins-font'> 
                <p>🚀 A dynamic Frontend Web Developer and an aspiring UI/UX Designer.</p> 
                <p>🚀 I am fervently dedicated to continuous learning and embracing emerging technologies. </p>
                <p>🚀 My passion extends to exploring the intricate world of blockchain technology, further enriching my skill set. </p>
                <p>🚀  Committed to creating seamless, user-centric digital experiences. </p>
                <p>🚀 I leverage my expertise to drive innovation in the ever-evolving landscape of web development and design.</p>
            </div>
            <img className=' h-auto rounded-lg pt-2 md:pt-0 md:h-52' src={Me} alt="Vishal" />
          </div>
        </div>
        <div className=" pt-12 pb-12">  
          <div className=" lg:flex justify-center items-center p-3  mx-3 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 md:space-x-32 hover:scale-105 hover:border-2 hover:border-cyan-300" style={textBG}>
            <img className=' h-auto rounded-lg pt-2 md:pt-0 md:h-96' src={Tools} alt="Tools" />
            <p className=' md:text-2xl text-white poppins-font'> 
            I possess extensive proficiency in utilizing Tailwind CSS, JavaScript, and prominent frameworks such as React.js and Django, alongside application frameworks like React Native. Furthermore, I am adept in programming languages including Python, C, C++, and Java. My comfort extends to leveraging design tools like Figma, Canvas, Miro, and Mural to craft intuitive user interfaces and facilitate seamless ideation processes.           
            </p>
          </div>
        </div>
        <div className=" mr-4 flex-row justify-center mt-32 ">
            <p className=' text-xl flex justify-center poppins-font md:text-3xl text-white font-medium'>Connect with me on:</p>
            <div className=" flex justify-center space-x-6 p-6" >
              <a className=' hover:scale-105 transition-transform' href="https://github.com/vishalmet" target='_blank'><img className=' h-8 md:h-10' src={GitHub}></img></a>
              <a className=' hover:scale-105 transition-transform' href="https://www.linkedin.com/in/vishal-aakash/"  target='_blank'><img className=' h-8 md:h-10'  src={LinkedIn}></img></a>
              <a className=' hover:scale-105 transition-transform' href="https://twitter.com/VishalAakash18" target='_blank'><img className=' h-8 md:h-10' src={X}></img></a>
              <a className=' hover:scale-105 transition-transform' href="https://youtube.com/@vishalaakash1802" target='_blank'><img className=' h-8 md:h-10' src={Yt}></img></a>
            </div>
        </div>

        <div className=" bg-black flex justify-center">
          <p className=' text-white poppins-font p-3'> Designed & Developed by Vishal Aakash</p>
        </div>

    </div>
  )
} 

export default About;