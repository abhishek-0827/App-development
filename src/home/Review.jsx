import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Product1_context';

const Review = () => {
  const { id } = useParams();
  const { reviews, addReview, FRAME } = useContext(ShopContext);
  const [newReview, setNewReview] = useState('');

  const product = FRAME.find((product) => product.id === parseInt(id));
  const productReviews = reviews[id] || [];

  const handleReviewSubmit = () => {
    if (newReview.trim()) {
      addReview(id, newReview);
      setNewReview('');
    }
  };

  if (!product) return <div className="text-center text-lg font-semibold">Product not found</div>;

  return (
    <div className="max-w-md mx-auto mt-5 p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-xl font-bold mb-3">Reviews for {product.productname}</h1>
      <div className="mb-4 flex justify-center">
        <img
          src={product.productimage}
          alt={product.productname}
          className="w-3/4 h-auto rounded-lg object-cover"
        />
      </div>
      <h2 className="text-lg font-semibold mb-2">Existing Reviews:</h2>
      <ul className="list-disc pl-4 mb-4 text-sm">
        {productReviews.length > 0 ? (
          productReviews.map((review, index) => (
            <li key={index} className="mb-1">{review}</li>
          ))
        ) : (
          <li className="text-gray-500">No reviews yet.</li>
        )}
      </ul>
      <div>
        <h2 className="text-lg font-semibold mb-2">Write a Review:</h2>
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full h-24 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out"
        />
        <button
          onClick={handleReviewSubmit}
          className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default Review;
