<<<<<<< HEAD


// import React, { useState } from 'react';
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
// import { FiHeart } from "react-icons/fi";
// import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
// import { IoReorderThreeOutline } from "react-icons/io5";
// import { IoSearchSharp } from "react-icons/io5";
// import { IoIosHome } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
// import Lottie from 'lottie-react';
// import loadingAnimation from '../animations/animation.json'; 
// import cartLoading from "../animations/cart.json";

// const Navbar = () => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [isCartLoading, setCartLoading] = useState(false);
//   const [isDropdownVisible, setIsDropdownVisible] = useState(false);
//   const [query, setQuery] = useState(''); 

//   const navigate = useNavigate();

//   const handleNavigation = (e, path) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       navigate(path);
//     }, 1000); 
//   };

//   const handleCartNavi = (e, path) => {
//     e.preventDefault();
//     setCartLoading(true);
//     setTimeout(() => {
//       setCartLoading(false);
//       navigate(path);
//     }, 1000);
//   };

//   const handleHome = (e) => handleNavigation(e, "/home");
//   const handleCart = (e) => handleCartNavi(e, "/cart");

//   const handleLoginClick = (e) => {
//     e.preventDefault();
//     setIsDropdownVisible(!isDropdownVisible);
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate("/login");
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     navigate("/register");
//   };

//   const handleAdminLogin = (e) => {
//     e.preventDefault();
//     navigate("/admin-login");
//   };

//   const handleFav = (e) => {
//     e.preventDefault();
//     navigate("/fav");
//   };

//   const handleSellerLogin = (e) => {
//     e.preventDefault();
//     navigate("/seller");
//   };

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter' && query.trim() !== '') {
//       e.preventDefault();
//       navigate('/frames');
//     }
//   };

//   return (
//     <nav className="bg-slate-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
=======

// const Navbar = ({ handleInputChange, query }) => {

//   const navigate=useNavigate();

//   const handleHome=(event)=>
//     {
//       event.preventDefault();
//       navigate("/home");
//     }

//     const handleLogin=(e)=>{
//       e.preventDefault();
//       navigate("/login")
//     }

//     const handleFav=(e)=>{
//       e.preventDefault();
//       navigate("/fav")
//     }

//     const handleCart=(e)=>{
//       e.preventDefault();
//       navigate("/cart")
//     }

//   return (
//     <nav className="bg-slate-900 text-white p-4">
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="text-3xl">
//           <IoReorderThreeOutline />
//         </div>
//         <div className="relative flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg">
//           <input
//             className="search-input pl-10 pr-4 py-2 rounded-md border-none focus:outline-none bg-gray-100 text-slate-900 placeholder-gray-400 w-full"
//             type="text"
//             onChange={handleInputChange}
<<<<<<< HEAD
//             onKeyDown={handleKeyDown}
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
//             value={query}
//             placeholder="Surprise Your loved ones."
//           />
//           <IoSearchSharp className="absolute left-3 text-gray-400 text-xl" />
//         </div>
<<<<<<< HEAD
//         <div className="profile-container flex space-x-4 relative">
//           <button className="home" onClick={handleHome}>
//             <a href="#" className="text-white hover:text-gray-400">
//               <IoIosHome className="text-2xl" />
//             </a>
//           </button>
//           <button className="fav" onClick={handleFav}>
//             <a href="#" className="text-white hover:text-gray-400">
//               <FiHeart className="text-2xl" />
//             </a>
//           </button>
//           <button className="cart" onClick={handleCart}>
//             <a href="#" className="text-white hover:text-gray-400">
//               <AiOutlineShoppingCart className="text-2xl" />
//             </a>
//           </button>
//           <button className="login" onClick={handleLoginClick}>
//             <a href="#" className="text-white hover:text-gray-400">
//               <AiOutlineUserAdd className="text-2xl" />
//             </a>
//           </button>
//           {isDropdownVisible && (
//             <div className="dropdown-menu absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
//               <a
//                 href="#"
//                 onClick={handleLogin}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//               >
//                 Login
//               </a>
//               <a
//                 href="#"
//                 onClick={handleRegister}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//               >
//                 Register
//               </a>
//               <a
//                 href="#"
//                 onClick={handleAdminLogin}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//               >
//                 Admin
//               </a>
//               <a
//                 href="#"
//                 onClick={handleSellerLogin}
//                 className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//               >
//                 Seller
//               </a>
//             </div>
//           )}
//         </div>
//       </div>
//       {isLoading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
//           <div className="w-40 h-40">
//             <Lottie animationData={loadingAnimation} loop={true} />
//           </div>
//         </div>
//       )}
//       {isCartLoading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
//           <div className="w-60 h-60">
//             <Lottie animationData={cartLoading} loop={true} />
//           </div>
//         </div>
//       )}
=======
//         <div className="profile-container flex space-x-4">
//           <button className="home" onClick={handleHome}>
//             <a href="#" className="  text-white hover:text-gray-400">
//             <IoIosHome className="text-2xl" />
//             </a>
//           </button>
//           <button className="fav " onClick={handleFav}>
//             <a href="#" className=" text-white hover:text-gray-400">
//               <FiHeart className="text-2xl" />
//             </a>
//           </button >
//           <button className="cart" onClick={handleCart}>
//             <a href="#" className=" text-white hover:text-gray-400">
//               <AiOutlineShoppingCart className="text-2xl" />
//             </a>
//           </button>
//           <button className="login" onClick={handleLogin}>
//             <a href="#" className="  text-white hover:text-gray-400">
//               <AiOutlineUserAdd className="text-2xl" />
//             </a>
//           </button>
//         </div>
//       </div>
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
//     </nav>
//   );
// };

// export default Navbar;


<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
// // import React, { useState } from 'react'
// // import {Link} from 'react-scroll'
// // import {FaTimes} from 'react-icons/fa'
// // import {CiMenuFries} from 'react-icons/ci'

// // export default function Nav() {

// //     const [click,setClick] = useState(false);

// //     const handleClick=()=>{
// //         setClick(!click);
// //     }

// //     const content= <>
// //     <div className='bg-black lg:hidden block absolute top-16 w-full left-0 right-0  transition'>
// //         <ul className='text-center text-xl p-20'>
// //             <Link spy={true} smooth={true} to='Home'>
// //                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='About'>
// //                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='Skills'>
// //                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Skills</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='Project'>
// //                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Project</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='Contact'>
// //                 <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
// //             </Link>
// //         </ul>
// //     </div>
// //     </>;
// //   return (
// //     <nav>
// //         <div className='bg-black h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800'>
// //             <div className='flex items-center flex-1'>
// //                 <span className='text-3xl font-bold '>Amirtha Varshini</span>
// //             </div>
// //             <div className='lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden'>
// //                 <div className='flex-10'>
// //                 <ul className='flex gap-8 mr-16 text-[18px]'>
// //             <Link spy={true} smooth={true} to='Home'>
// //                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Home</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='About'>
// //                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>About</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='Skills'>
// //                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Skills</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='Project'>
// //                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Project</li>
// //             </Link>
// //             <Link spy={true} smooth={true} to='Contact'>
// //                 <li className='hover:text-fuchsia-500 transition border-b-2 border-slate-900 hover:border-fuchsia-500 cursor-pointer'>Contact</li>
// //             </Link>
// //         </ul>
// //                 </div>
// //             </div>

// //             <div>
// //                 {click && content}
// //             </div>

// //             <button className='block sm:hidden transition' onClick={handleClick}>
// //                 {click ? <FaTimes/> : <CiMenuFries/>}
// //             </button>
// //         </div>
// //     </nav>
// //   )
// // }


import React, { useState } from 'react';
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosHome } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
<<<<<<< HEAD
import loadingAnimation from '../animations/animation.json'; 
import cartLoading from "../animations/cart.json";

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCartLoading, setCartLoading] = useState(false);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [query, setQuery] = useState(''); 

  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

=======
import loadingAnimation from '../animations/animation.json';  // Ensure you have a loading animation JSON file
import cartLoading from "../animations/cart.json";

const Navbar = ({ handleInputChange, query }) => {
  const [isLoading, setIsLoading] = useState(false);
  const[isCartLoading, setCartLoading]=useState(false);

  const navigate = useNavigate();

>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
  const handleNavigation = (e, path) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
<<<<<<< HEAD
    }, 1000); 
  };

  const handleCartNavi = (e, path) => {
=======
    }, 1000);  // Adjust the delay as needed
  };

  const handleCartNavi = (e,path)=>{
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
    e.preventDefault();
    setCartLoading(true);
    setTimeout(() => {
      setCartLoading(false);
      navigate(path);
    }, 1000);
<<<<<<< HEAD
  };

  const handleHome = (e) => handleNavigation(e, "/home");
  const handleCart = (e) => handleCartNavi(e, "/cart");

  const handleLoginClick = (e) => {
    e.preventDefault();
    setIsDropdownVisible(!isDropdownVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleAdminLogin = (e) => {
    e.preventDefault();
    navigate("/admin-login");
  };

  const handleFav = (e) => {
    e.preventDefault();
    navigate("/fav");
  };

  const handleSellerLogin = (e) => {
    e.preventDefault();
    navigate("/seller");
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.trim() !== '') {
      e.preventDefault();
      navigate('/frames');
    }
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setIsLoggedIn(false);
    navigate('/home');
  };

  return (
    <nav className="bg-slate-900 text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
=======
  }

  const handleHome = (e) => handleNavigation(e, "/home");
  const handleCart = (e) => handleCartNavi(e, "/cart");
  

        const handleLogin=(e)=>{
          e.preventDefault();
          navigate("/login")
        }
    
        const handleFav=(e)=>{
          e.preventDefault();
          navigate("/fav")
        }
  

  return (
    <nav className="bg-slate-900 text-white p-4">
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl">
          <IoReorderThreeOutline />
        </div>
        <div className="relative flex items-center w-full max-w-sm md:max-w-md lg:max-w-lg">
          <input
            className="search-input pl-10 pr-4 py-2 rounded-md border-none focus:outline-none bg-gray-100 text-slate-900 placeholder-gray-400 w-full"
            type="text"
            onChange={handleInputChange}
<<<<<<< HEAD
            onKeyDown={handleKeyDown}
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
            value={query}
            placeholder="Surprise Your loved ones."
          />
          <IoSearchSharp className="absolute left-3 text-gray-400 text-xl" />
        </div>
<<<<<<< HEAD
        <div className="profile-container flex space-x-4 relative">
=======
        <div className="profile-container flex space-x-4">
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
          <button className="home" onClick={handleHome}>
            <a href="#" className="text-white hover:text-gray-400">
              <IoIosHome className="text-2xl" />
            </a>
          </button>
          <button className="fav" onClick={handleFav}>
            <a href="#" className="text-white hover:text-gray-400">
              <FiHeart className="text-2xl" />
            </a>
          </button>
          <button className="cart" onClick={handleCart}>
            <a href="#" className="text-white hover:text-gray-400">
              <AiOutlineShoppingCart className="text-2xl" />
            </a>
          </button>
<<<<<<< HEAD
          <button className="login" onClick={handleLoginClick}>
=======
          <button className="login" onClick={handleLogin}>
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
            <a href="#" className="text-white hover:text-gray-400">
              <AiOutlineUserAdd className="text-2xl" />
            </a>
          </button>
<<<<<<< HEAD
          {isDropdownVisible && (
            <div className="dropdown-menu absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
              {isLoggedIn ? (
                <>
                  <a
                    href="#"
                    onClick={handleProfile}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </>
              ) : (
                <>
                  <a
                    href="#"
                    onClick={handleLogin}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    onClick={handleRegister}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Register
                  </a>
                  <a
                    href="#"
                    onClick={handleAdminLogin}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Admin
                  </a>
                  <a
                    href="#"
                    onClick={handleSellerLogin}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Seller
                  </a>
                </>
              )}
            </div>
          )}
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
        </div>
      </div>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="w-40 h-40">
            <Lottie animationData={loadingAnimation} loop={true} />
          </div>
        </div>
      )}
<<<<<<< HEAD
      {isCartLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
=======

     {isCartLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50 ">
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
          <div className="w-60 h-60">
            <Lottie animationData={cartLoading} loop={true} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
<<<<<<< HEAD

=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
