

// import React from 'react';
// import { FRAME } from "../components/Frame";
// import Frame2 from "./Frames";
// import Navbar from './Navbar';

// const Product1 = () => {
//   return (
//     <div className='shop'>
//         <Navbar/>
//       <div className='shop-title'>
//         <h1 className=' text-3xl font-bold text-gray-900 uppercase tracking-wide my-8 text-center'>Frames</h1>
//       </div>
//       <div className='product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6  mx-auto'>
//         {FRAME.map((product) => (
//           <Frame2 key={product.id} data={product} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product1;
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FRAME } from "../components/Frame";
import Frame2 from "./Frames";
import Navbar from './Navbar';

const Product1 = () => {
  const productRefs = useRef([]);
  const location = useLocation();

  const scrollToProduct = (id) => {
    const index = FRAME.findIndex(product => product.id === id);
    if (index !== -1 && productRefs.current[index]) {
      productRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const scrollToId = parseInt(query.get('scrollTo'), 10);
    if (scrollToId) {
      scrollToProduct(scrollToId);
    }
  }, [location.search]);

  return (
    <div className='shop'>
      <Navbar />
     {/* <div className='shop-title'>
        <h1 className='text-3xl font-bold text-gray-900 uppercase tracking-wide my-8 text-center'>Frames</h1>
      </div>*/}
      <div className='product-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-6 mx-auto'>
        {FRAME.map((product, index) => (
          <div ref={el => productRefs.current[index] = el} key={product.id}>
            <Frame2 data={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product1;
