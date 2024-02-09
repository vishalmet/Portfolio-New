import React from 'react';
import ParticlesBg from '../components/ParticlesBg';

const textBG = {
    // border: '1px solid #FFF',
    // borderRadius: '1rem',
    background: 'rgba(48, 48, 48, 0.50)',
  };

const blueColor = {
    color: '#46CFE5'
}


const YugaasTech = () => {
  return (
    <div className="bg-gradient-to-b from-cyan-300 via-slate-500 to-cyan-300 bg-cover bg-center pb-10" >
        <ParticlesBg/>
        <p className=' p-3'><a href='/experience' className=' poppins-font p-3 text-2xl text-black'> &lt; Back</a></p>
        <div className="mx-3 ">
            <div className=" p-10 rounded-3xl md:m-10"style={textBG}>
                    <div className=" pl-1 space-y-1 md:pl-6 lg:pl-10" >
                        <p className='  text-xl pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor} >Intern at Yugaastech</p>
                        <p className=' text-base  poppins-font md:text-2xl text-white'>Frontend Developer & UI/UX Designer </p>
                        <p className=' text-base  poppins-font md:text-2xl text-white '><span className=' font-semibold' style={blueColor}>Duration:</span> July 17, 2023 - October 18, 2023</p>
                    </div>
                    <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                        <p className='text-xl underline pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor}>Overview</p>
                        <p className=' text-xl poppins-font tracking-wide text-white md:text-2xl'>
                            During my internship at Yugaastech, I functioned as a Frontend Developer and UI/UX Designer, contributing to various projects and enhancing user experiences through innovative design solutions.              
                        </p>
                    </div>
                    <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                        <p className='text-xl underline pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor}>Key Achievements and Responsibilities</p>
                        <p className=' text-xl poppins-font tracking-wide text-white md:text-2xl'>
                            <h1><span className='text-red-400'>-</span> Collaborated with the development team to create responsive and user-friendly web applications.</h1>
                            <h1><span className='text-red-400'>-</span>Participated in brainstorming sessions with the development team and to devise growth hacking strategies for user acquisition and retention.</h1>
                            <h1><span className='text-red-400'>-</span>Contributed to content marketing efforts, including blog posts in various social media like Discord, Twitter to increase brand awareness.</h1>
                        </p>
                    </div>
                    <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                        <p className='text-xl underline pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor}>Technologies and Tools Used</p>
                        <p className=' text-xl poppins-font tracking-wide text-white md:text-2xl'>
                            <h1><span className='text-red-400'>-</span>HTML, CSS, JavaScript</h1>
                            <h1><span className='text-red-400'>-</span>ReactJs & TailwindCSS</h1>
                            <h1><span className='text-red-400'>-</span>UI/UX Design</h1>
                            <h1><span className='text-red-400'>-</span>Discord & Telegram</h1>
                        </p>
                    </div>
                    <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                        <p className='text-xl underline pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor}>Lessons Learned</p>
                        <p className=' text-xl text-white poppins-font tracking-wide md:text-2xl'>My internship at SecureDApp allowed me to develop both technical and soft skills. I enhanced my proficiency in frontend development, gained experience in growth hacking, and improved my ability to collaborate in a dynamic team environment. I also learned the importance of data-driven decision-making and the value of user-centric design.</p>
                    </div>
            </div>
        </div>  
    </div>
        
)
}

export default YugaasTech;