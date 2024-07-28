import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Navbar = ({ handleInputChange, query }) => {

  const navigate=useNavigate();

  const handleHome=(event)=>
    {
      event.preventDefault();
      navigate("/home");
    }

    const handleLogin=(e)=>{
      e.preventDefault();
      navigate("/login")
    }

    const handleFav=(e)=>{
      e.preventDefault();
      navigate("/fav")
    }

    const handleCart=(e)=>{
      e.preventDefault();
      navigate("/cart")
    }

  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl">
          <IoReorderThreeOutline />
        </div>
        <div className="relative flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg">
          <input
            className="search-input pl-10 pr-4 py-2 rounded-md border-none focus:outline-none bg-gray-100 text-slate-900 placeholder-gray-400 w-full"
            type="text"
            onChange={handleInputChange}
            value={query}
            placeholder="Surprise Your loved ones."
          />
          <IoSearchSharp className="absolute left-3 text-gray-400 text-xl" />
        </div>
        <div className="profile-container flex space-x-4">
          <button className="home" onClick={handleHome}>
            <a href="#" className="  text-white hover:text-gray-400">
            <IoIosHome className="text-2xl" />
            </a>
          </button>
          <button className="fav " onClick={handleFav}>
            <a href="#" className=" text-white hover:text-gray-400">
              <FiHeart className="text-2xl" />
            </a>
          </button >
          <button className="cart" onClick={handleCart}>
            <a href="#" className=" text-white hover:text-gray-400">
              <AiOutlineShoppingCart className="text-2xl" />
            </a>
          </button>
          <button className="login" onClick={handleLogin}>
            <a href="#" className="  text-white hover:text-gray-400">
              <AiOutlineUserAdd className="text-2xl" />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


// import React, { useState } from 'react'
// import {Link} from 'react-scroll'
// import {FaTimes} from 'react-icons/fa'
// import {CiMenuFries} from 'react-icons/ci'

// export default function Nav() {

//     const [click,setClick] = useState(false);

//     const handleClick=()=>{
//         setClick(!click);
//     }

//     const content= <>
//     <div className='bg-black lg:hidden block absolute top-16 w-full left-0 right-0  transition'>
//         <ul className='text-center text-xl p-20'>
//             <Link spy={true} smooth={true} to='Home'>
//                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
//             </Link>
//             <Link spy={true} smooth={true} to='About'>
//                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
//             </Link>
//             <Link spy={true} smooth={true} to='Skills'>
//                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Skills</li>
//             </Link>
//             <Link spy={true} smooth={true} to='Project'>
//                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Project</li>
//             </Link>
//             <Link spy={true} smooth={true} to='Contact'>
//                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
//             </Link>
//         </ul>
//     </div>
//     </>;
//   return (
//     <nav>
//         <div className='bg-black h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800'>
//             <div className='flex items-center flex-1'>
//                 <span className='text-3xl font-bold '>Amirtha Varshini</span>
//             </div>
//             <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
//                 <div className='flex-10'>
//                 <ul className='flex gap-8 mr-16 text-[18px]'>
//             <Link spy={true} smooth={true} to='Home'>
//                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Home</li>
//             </Link>
//             <Link spy={true} smooth={true} to='About'>
//                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>About</li>
//             </Link>
//             <Link spy={true} smooth={true} to='Skills'>
//                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Skills</li>
//             </Link>
//             <Link spy={true} smooth={true} to='Project'>
//                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Project</li>
//             </Link>
//             <Link spy={true} smooth={true} to='Contact'>
//                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Contact</li>
//             </Link>
//         </ul>
//                 </div>
//             </div>

//             <div>
//                 {click && content}
//             </div>

//             <button className='block sm:hidden transition' onClick={handleClick}>
//                 {click ? <FaTimes/> : <CiMenuFries/>}
//             </button>
//         </div>
//     </nav>
//   )
// }
