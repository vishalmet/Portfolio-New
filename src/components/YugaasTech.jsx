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
                            <h1><span className='text-red-400'>-</span>Collaborated closely with the development team to conceptualize and implement responsive and intuitive web applications.</h1>
                            <h1><span className='text-red-400'>-</span>Played a key role in brainstorming sessions to ideate and execute UI/UX designs aligned with project requirements and user preferences.</h1>
                            <h1><span className='text-red-400'>-</span>Contributed to content creation efforts, including designing engaging visuals and graphics for social media platforms to bolster brand visibility and engagement.</h1>
                        </p>
                    </div>
                    <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                        <p className='text-xl underline pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor}>Technologies and Tools Used</p>
                        <p className=' text-xl poppins-font tracking-wide text-white md:text-2xl'>
                            <h1><span className='text-red-400'>-</span>HTML, CSS, JavaScript</h1>
                            <h1><span className='text-red-400'>-</span>Django & TailwindCSS</h1>
                            <h1><span className='text-red-400'>-</span>Figma</h1>
                            <h1><span className='text-red-400'>-</span>Other relevant design and prototyping tools</h1>
                        </p>
                    </div>
                    <div className="pl-1 pt-10 space-y-1 md:pl-6 lg:pl-10">
                        <p className='text-xl underline pr-3 pb-3 poppins-font font-bold tracking-wide md:text-3xl' style={blueColor}>Lessons Learned</p>
                        <p className=' text-xl text-white poppins-font tracking-wide md:text-2xl'>
                            My tenure at Yugaastech was a valuable learning experience that allowed me to refine my technical skills in frontend development and deepen my understanding of UI/UX design principles. I gained insights into the collaborative nature of project development and honed my ability to translate client requirements into visually stunning and user-centric design solutions. Additionally, I developed a keen appreciation for the iterative nature of design and the importance of continuous improvement in delivering exceptional user experiences.                        
                        </p>
                    </div>
            </div>
        </div>  
    </div>
        
)
}

export default YugaasTech;