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
    <div className=" bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 bg-cover bg-center" > 
        <ParticlesBg/>
        {/* <div className=" flex justify-center pt-2 ">
                <div className=' flex  items-center flex-shrink-0 poppins-font  text-xl 'style={{blueColor}} >
                    <ul className='hidden text-white md:flex flex-wrap items-center space-x-2  md:space-x-4 font-medium'>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap underline hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="/">Home</a>
                        </li>
                        <li className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap  hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>
                        <a href="/about">About Me</a>
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
        </div> */}


        <div className=" pt-12 pb-12">
          <p className=' flex justify-center  pt-6 font-semibold poppins-font text-white text-2xl  md:text-4xl '>About</p>
          <div className=" md:flex justify-center items-center p-3 md:p-16 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 md:space-x-32 " style={textBG}>
            <p className=' md:text-2xl text-white poppins-font'> As a dynamic Frontend Web Developer and aspiring UI/UX Designer, I am fervently dedicated to continuous learning and embracing emerging technologies.
                My passion extends to exploring the intricate world of blockchain technology, further enriching my skill set.
                Committed to creating seamless, user-centric digital experiences, I leverage my expertise to drive innovation in the ever-evolving landscape of web development and design.
            </p>
            <img className=' h-auto rounded-lg pt-2 md:pt-0 md:h-52' src={Me} alt="Vishal" />
          </div>
        </div>
        <div className=" pt-12 pb-12">  
          <div className=" md:flex justify-center items-center p-3  mx-6 md:mx-20 md:mt-12 rounded-lg flex-shrink-0 md:space-x-32 " style={textBG}>
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