import { useState } from "react";
import ParticlesBg from '../components/ParticlesBg';
import Navbar from '../components/Navbar';
import X from '../assets/X.png';
import GitHub from '../assets/github.png';
import LinkedIn from '../assets/linkedin.png';
import Yt from '../assets/yt.png';

export default function Fetch() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function submit(e) {
    // This will prevent page refresh
    e.preventDefault();

    // Validation
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    if (!message.trim()) {
      setError("Please enter your message.");
      return;
    }

    // replace this with your own unique endpoint URL
    fetch("https://formcarry.com/s/XXXXXXX", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({ name: name, email: email, message: message })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error));
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (submitted) {
    return <p>We've received your message, thank you for contacting us!</p>;
  }

  return (
    <div className=" h-screen  bg-gradient-to-b from-gray-800 via-slate-500 to-gray-800 bg-cover bg-center" >
      <ParticlesBg/>  
      <Navbar/>
      <p className=' flex justify-center text-2xl md:text-4xl font-semibold text-white mt-4 md:mt-10 poppins-font'>CONTACT ME</p>

      <div className=" flex justify-center items-center poppins-font mt-10">
        
        <form onSubmit={submit}>
          <div className=" md:flex gap-10 ">
            <div className=" flex-col justify-center items-center">
              <label className=" text-lg md:text-2xl " htmlFor="name">Name</label>
              <div className="">
                <input className=" border-2 border-cyan-300 rounded-md text-white bg-black"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className=" flex-col justify-center items-center">
              <label className=" text-lg md:text-2xl " htmlFor="email">Email</label>
              <div className="">
                <input className=" border-2 border-cyan-300 rounded-md text-white bg-black"
                  id="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          <div className=" flex-col justify-center items-center mt-6">
            <label className=" text-lg md:text-2xl " htmlFor="message">Message</label>
            <div className="  items-center flex justify-center">
              <textarea className=" border-2 w-full h-32 border-cyan-300 p-2 rounded-md text-white bg-black"
                id="message"
                placeholder="Enter message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
          </div>

        <div className=" mt-2 flex justify-end">
          <button className='py-3 px-3 bg-gradient-to-t from-pink-500 via-red-500 to-yellow-500 rounded-lg cursor-pointer font-semibold text-white hover:from-sky-400 hover:to-sky-200 hover:text-black' type="submit">Send</button>
        </div>
        </form>
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
      <div className=" absolute bottom-0 w-full bg-black mt-6 flex justify-center">
          <p className=' text-white poppins-font p-3'> Designed & Developed by Vishal Aakash</p>
      </div>
    </div>
  );
}