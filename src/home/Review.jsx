<<<<<<< HEAD



import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Product1_context';
import { FaStar } from 'react-icons/fa'; // Import FontAwesome star icons
=======
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/Product1_context';
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d

const Review = () => {
  const { id } = useParams();
  const { reviews, addReview, FRAME } = useContext(ShopContext);
  const [newReview, setNewReview] = useState('');
<<<<<<< HEAD
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d

  const product = FRAME.find((product) => product.id === parseInt(id));
  const productReviews = reviews[id] || [];

  const handleReviewSubmit = () => {
<<<<<<< HEAD
    if (newReview.trim() && rating) {
      addReview(id, { text: newReview, rating });
      setNewReview('');
      setRating(0);
=======
    if (newReview.trim()) {
      addReview(id, newReview);
      setNewReview('');
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
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
<<<<<<< HEAD
            <li key={index} className="mb-1">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {Array.from({ length: 5 }, (_, starIndex) => (
                    <FaStar
                      key={starIndex}
                      className={`${
                        starIndex < review.rating ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span>{review.text}</span>
              </div>
            </li>
=======
            <li key={index} className="mb-1">{review}</li>
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
          ))
        ) : (
          <li className="text-gray-500">No reviews yet.</li>
        )}
      </ul>
      <div>
        <h2 className="text-lg font-semibold mb-2">Write a Review:</h2>
<<<<<<< HEAD
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }, (_, starIndex) => (
            <FaStar
              key={starIndex}
              className={`cursor-pointer ${
                starIndex < (hover || rating) ? 'text-yellow-500' : 'text-gray-300'
              }`}
              onClick={() => setRating(starIndex + 1)}
              onMouseEnter={() => setHover(starIndex + 1)}
              onMouseLeave={() => setHover(null)}
            />
          ))}
        </div>
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Write your review here..."
          className="w-full h-24 p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out"
        />
        <button
          onClick={handleReviewSubmit}
          className="mt-3 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
<<<<<<< HEAD
          disabled={!newReview.trim() || !rating} // Disable button if no review or rating
=======
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Review;
=======
export default Review;
>>>>>>> 5ba61d672ea2bb62ce5ea334b93e86faf0fbcc2d
