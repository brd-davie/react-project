import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import confusing from '../components/svg/Confusing.svg'

const AnimeReviews = ({id}) => {
  const [reviews, setReviews] = useState([]);
  const [showFullReview, setShowFullReview] = useState(false);

  const getReviews = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`)
      .then(res => res.json())
    console.log(response.data);
    setReviews(response.data);
  }

  const showMoreShowLess = () => {
    setShowFullReview(!showFullReview);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getReviews(id);
      clearInterval(interval);
    }, 1500)
  }, [id])

  return (
    <div className="anime-review-con pt-10">
      {reviews.map((review, index) => (
      <div key={index} className='reviews-con flex-col mb-5 p-2 rounded-lg shadow-2xl bg-neutral'>
        <div className='flex items-center mb-5'>
          <img className='w-20 h-20 rounded-full object-cover' src={review.user.images.jpg.image_url} alt="Avatar" />
          <Link to={review.user.url} target='_blank' className='text-lg text-white pl-5 hover:underline'>{review.user.username}</Link>
        </div>
        <p className='text-white'>
          {showFullReview ? review.review : `${review.review.slice(0, 200)}...`}
          <button className='text-blue-500 shadow-none hover:underline pl-2' onClick={showMoreShowLess}>
            {showFullReview ? 'Read Less' : 'Read More'}
          </button>
        </p>
        <ul className='mt-5 flex gap-3 justify-end'>
          <li className='flex text-white'><img src={confusing} className='w-5 h-5 mr-1' alt="" />{review.reactions.confusing}</li>
        </ul>
      </div>
      ))}
    </div>
  )
}


export default AnimeReviews