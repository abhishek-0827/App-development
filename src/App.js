
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

function App() {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home/>}/>
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/fav' element={<Fav/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
