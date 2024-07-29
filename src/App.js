
import './App.css';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home/Home';
import Navbar from './home/Navbar';
import Fav from './home/Fav';
import { Product1Context } from './context/Product1_context';
import Product1 from './home/Product1';
import Cart from './home/Cart';

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

// import './App.css';
// import { useEffect, useState } from 'react';
// import "aos/dist/aos.css";
// import Login from './Authentication/Login';
// import Register from './Authentication/Register';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './home/Home';
// import Navbar from './home/Navbar';
// import Fav from './home/Fav';
// import Cart from './home/Cart';
// import { Product1Context } from './context/Product1_context';
// import Product1 from './home/Product1';
// import { initGoogleAuth, auth2 } from './Authentication/GoogleAuth'; // Import Google Auth functions

// function App() {
//   const [query, setQuery] = useState("");
//   const [isAuthInitialized, setIsAuthInitialized] = useState(false);

//   const handleInputChange = (e) => {
//     setQuery(e.target.value);
//   };

//   useEffect(() => {
//     initGoogleAuth()
//       .then(() => {
//         setIsAuthInitialized(true);
//         console.log('Google Auth initialized successfully.');
//       })
//       .catch((error) => {
//         console.error('Error initializing Google Auth:', error);
//       });
//   }, []);

//   const checkAuth = () => {
//     if (auth2 && auth2.isSignedIn.get()) {
//       const profile = auth2.currentUser.get().getBasicProfile();
//       console.log('ID: ' + profile.getId());
//       console.log('Full Name: ' + profile.getName());
//       console.log('Given Name: ' + profile.getGivenName());
//       console.log('Family Name: ' + profile.getFamilyName());
//       console.log('Image URL: ' + profile.getImageUrl());
//       console.log('Email: ' + profile.getEmail());
//     } else {
//       console.log('User is not signed in.');
//     }
//   };

//   return (
//     <div className="App">
//       <Product1Context>
//         <Router>
//           {/* Add Navbar here if needed */}
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path='/home' element={<Home />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path='/cart' element={<Cart />} />
//             <Route path='/fav' element={<Fav />} />
//             <Route path='/frames' element={<Product1 />} />
//           </Routes>
//         </Router>
//       </Product1Context>
//     </div>
//   );
// }

// export default App;


