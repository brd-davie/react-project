import React, { useEffect, useState } from 'react'

const AnimeReviews = ({id}) => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async (id) => {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/reviews`)
      .then(res => res.json())
    console.log(response.data);
    setReviews(response.data);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getReviews(id);
      clearInterval(interval);
    }, 1500)
  }, [])

  return (
    <div className="anime-review-con">
      {reviews.map((review, index) => (
      <div key={index}>
        <img src={review.user.images.jpg.image_url} alt="" />
        <div>{review.user.username}</div>
        <p>{review.review}</p>
      </div>
      ))}
    </div>
  )
}

export default AnimeReviews