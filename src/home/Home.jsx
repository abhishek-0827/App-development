
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import AOS from "aos";
import { useEffect } from 'react';
import "aos/dist/aos.css";
import Products from '../components/Products';
import Testimonals from '../components/Testimonals';
import AppStore from '../components/AppStore';
import Footer from '../components/Footer';


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';


const Home=()=> {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);



  return (
<<<<<<< HEAD
    <div style={{ backgroundColor:"white" }} className="App bg-white bg-amber-50 dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">

=======
    <div className="App bg-white bg-amber-50 dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
    <Navbar/>
    <Banner/>
    <Intro />
    <Products/>
    <AppStore/>
    <Testimonals/>
    <Footer/> 
    </div>
  );
}

export default Home;
