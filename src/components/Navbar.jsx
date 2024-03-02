import React, {useState} from 'react';
import ParticlesBg from '../components/ParticlesBg';
import Logo from '../assets/VAlogo.png'
import { Link } from 'react-router-dom';



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleCloseClick = () => {
        setIsOpen(false); // Close the sidebar when the close button is clicked
    };


    return (
        <div className="">
            <ParticlesBg/>
        
        <div className="bg-cyan-300 pb-3 pt-2 flex justify-between items-center " style={{ boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
            <a href="/" className="hover:cursor-pointer">
                <img className="h-12" src={Logo} alt="Logo" />
            </a>
            <div className="md:hidden">
                <button onClick={toggleMenu} className="block text-xl font-semibold focus:outline-none mr-4">
                    ☰ 
                </button>
            </div>
            <div className={`md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-50 ${isOpen ? 'block' : 'hidden'}`} onClick={closeMenu}></div>
            <div className={`md:hidden absolute inset-y-0 left-0 transform transition duration-300 ease-in-out bg-white w-64 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
             <button onClick={handleCloseClick} className="absolute top-0 right-0 m-4 text-2xl focus:outline-none">×</button>
                <ul className="p-4 space-y-2 poppins-font font-medium">
                    <li><Link to="/" className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black' >Home</Link></li>
                    <li><Link to="#about-section" className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>About Me</Link></li>
                    <li><Link to="/experience" className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>Experience</Link></li>
                    <li><Link to="/works" className='py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>My Works</Link></li>
                    <li><Link to="/contact" className='py-1 px-1 mx-1 pt-2 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black'>Contact</Link></li>
                    <a href="https://drive.google.com/file/d/1SXoG2med5vyVV4orem7vDVyDefa5qItY/view?usp=drive_link" target='_blank' className=' py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-md cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-200 hover:text-black poppins-font'>Resume</a>
                </ul>
            </div>
            {/* Desktop Navbar */}
            <div className="hidden md:flex md:items-center md:justify-center md:space-x-4  space-x-2 poppins-font font-medium mr-4 text-lg">
                <div className="">
                    <Link to="/" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"> Home </Link>
                    {/* <Link to="#about-section" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"> About Me </Link> */}
                    <Link to="/experience" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"> Experience </Link>
                    <Link to="/works" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"> My Works </Link>
                    <Link to="/contact" className="py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 flex-wrap hover:bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 hover:rounded-md cursor-pointer hover:text-black"> Contact </Link>
                </div>
                <div className="">
                    <a href="https://drive.google.com/file/d/1SXoG2med5vyVV4orem7vDVyDefa5qItY/view?usp=drive_link" target='_blank' className=' py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 bg-gradient-to-t from-sky-400 via-sky-300 to-sky-200 rounded-md cursor-pointer font-semibold hover:from-pink-500 hover:via-red-500 hover:to-yellow-500'>Resume/CV 📃</a>
                    <a href="https://drive.google.com/drive/folders/1gSkpVjMNAO3Yw4Odht6OZyKvrOAXJPDe?usp=sharing" target='_blank' className=' py-1 px-1 mx-1 md:py-3 md:px-3 md:mx-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-md cursor-pointer font-semibold hover:from-sky-400 hover:to-sky-200'>Certificates 👨🏻‍💻</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar