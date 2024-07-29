

// import React, { useContext } from 'react';
// import { ShopContext } from '../context/Product1_context';

// const Frames = (props) => {
//   const { id, productname, price, productimage } = props.data;
//   const { addToCart, cartItems } = useContext(ShopContext);

//   const cartitemamount = cartItems[id];

//   return (
//     <div className='bg-white rounded-lg shadow-md transition-transform transform hover:translate-y-1 hover:shadow-lg flex flex-col justify-between items-center mx-2 my-4 overflow-hidden max-w-xs w-full'>
//       <img src={productimage} alt={productname} className='w-full h-auto rounded-t-lg object-cover' />
//       <div className='p-2 text-left text-gray-700 text-sm flex-grow w-full'>
//         <p className='font-bold'>{productname}</p>
//         <p>₹{price}</p>
//       </div>
//       <div className='flex justify-center'>
//         <button className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full m-2 transition-transform transform hover:translate-y-1' onClick={() => addToCart(id)}>
//           Add To Cart{cartitemamount > 0 && <>({cartitemamount})</>}
//         </button>
//         <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 transition-transform transform hover:translate-y-1'>
//           Buy Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Frames;

import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';
import { FiHeart } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";

const Frames = (props) => {
  const { id, productname, price, productimage } = props.data;
  const { addToCart, cartItems, favItems, toggleFavorite } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];
  const isFavorite = favItems.includes(id);

  return (
    <div className='bg-white rounded-lg shadow-md transition-transform transform hover:translate-y-1 hover:shadow-lg flex flex-col justify-between items-center mx-2 my-4 overflow-hidden max-w-xs w-full'>
      <img src={productimage} alt={productname} className='w-full h-auto rounded-t-lg object-cover' />
      <div className='p-2 text-left text-gray-700 text-sm flex-grow w-full'>
        <p className='font-bold'>{productname}</p>
        <p>₹{price}</p>
      </div>
      <div className='flex justify-center'>
        <button className='bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded-full m-2 transition-transform transform hover:translate-y-1' onClick={() => addToCart(id)}>
          Add To Cart{cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full m-2 transition-transform transform hover:translate-y-1'>
          Buy Now
        </button>
        <button onClick={() => toggleFavorite(id)} className={`p-2 m-2 rounded-full transition-transform transform hover:translate-y-1 ${isFavorite ? 'text-red-600' : 'text-gray-600'}`}>
          {isFavorite ? <AiFillHeart className="text-2xl" /> : <FiHeart className="text-2xl" />}
        </button>
      </div>
    </div>
  );
};

export default Frames;


