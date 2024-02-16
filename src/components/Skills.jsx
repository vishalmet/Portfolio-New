import React from "react";
// import Logo from "./Logo";
import Html from '../assets/logo/html.png';
import Css from '../assets/logo/css.png';
import Js from '../assets/logo/js.png';
import Tailwind from '../assets/logo/tailwind.png';
import Reactjs from '../assets/logo/react.png';
import Nodejs from '../assets/logo/node.png';
import Py from '../assets/logo/py.png';
import C from '../assets/logo/c.png';
import Cpluss from '../assets/logo/cpp.png';
import Java from '../assets/logo/java.png';
import Figma from '../assets/logo/figma.png';
import Canva from '../assets/logo/canva.png';
import Xd from '../assets/logo/xd.png';
import Github from '../assets/github.png';
import Sol from '../assets/logo/sol.png';


const Skills = () => {
  return (
         <div className="h-full bg-slate-700 pb-3 flex justify-center pt-2">
            <div className="flex m-6 rounded-sm">
                <div className="scroll-container  overflow-x-auto">
                    <div className="scroll-content "style={{ maxWidth: "100vw" }}>
                    <img src={Html} alt="people1" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Css} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Js} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Tailwind} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Reactjs} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Nodejs} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Py} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={C} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Cpluss} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Java} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Figma} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Canva} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Xd} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Github} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    <img src={Sol} alt="people2" className=" h-16 md:h-24 w-16 md:w-24 flex-shrink-0 mr-10 md:mr-20 " />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Skills;