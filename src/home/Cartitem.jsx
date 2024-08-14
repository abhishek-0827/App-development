<<<<<<< HEAD
=======


>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
import React, { useContext } from 'react';
import { ShopContext } from '../context/Product1_context';

const CartItem = (props) => {
  const { id, productname, price, productimage } = props.data;
<<<<<<< HEAD
  const { cartItems, addToCart, removeFromCart, updateCartItem } = useContext(ShopContext);
=======
  const { cartItems, addToCart, removeFromCart, updatecartitem } = useContext(ShopContext);
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d

  const handleInputChange = (e) => {
    const newAmount = Number(e.target.value);
    if (newAmount >= 0) {
<<<<<<< HEAD
      updateCartItem(newAmount, id);
=======
      updatecartitem(newAmount, id);
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
    }
  };

  return (
    <div className="w-4/5 flex justify-between items-center bg-white shadow-lg rounded-2xl my-5 p-5 transition-transform transform hover:scale-105">
      <img className="w-36 h-auto rounded-lg mr-5" src={productimage} alt={productname} />
      <div className="flex-grow text-lg text-gray-800">
        <p className="my-1"><b>{productname}</b></p>
        <p>Price: ₹{price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-transform transform hover:scale-105"
          onClick={() => removeFromCart(id)}
        >
          -
        </button>
        <input
          className="w-12 text-center font-bold border border-gray-300 rounded-md p-1 mx-2"
          type="number"
<<<<<<< HEAD
          value={cartItems[id] || 0}
=======
          value={cartItems[id]}
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
          onChange={handleInputChange}
          min="0"
        />
        <button
          className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold transition-transform transform hover:scale-105"
          onClick={() => addToCart(id)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
<<<<<<< HEAD
=======

>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
