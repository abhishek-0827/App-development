
// import './App.css';
// import { useEffect } from 'react';
// import "aos/dist/aos.css";
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './home/Home';
// import Navbar from './home/Navbar';


// function App() {

//   return (
//     <div className="App ">
//       <Router>
//       <Routes>
//         <Route path='/' element={<Home/>} />
//         <Route path='/' />
//       </Routes>
//     </Router>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './home/Navbar';
import Fav from './home/Fav';
import Cart from './home/Cart';
import { Product1Context } from './context/Product1_context';
import Product1 from './home/Product1';

function App() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
       <Product1Context>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/fav' element={<Fav/>}/>
          <Route path='/frames' element={<Product1/>}/>
          
        </Routes>
      </Router>
      </Product1Context>
    </div>
  );
}

export default App;
