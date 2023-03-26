import React, { useEffect, useState } from 'react'

const AnimeReviews = () => {
  const [review, setReview] = useState([]);

  const getReviews = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/top/reviews`)
      .then(res => res.json())
    console.log(response.data);
    setReview(response.data);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getReviews();
      clearInterval(interval);
    }, 1500)
  }, [])

  return (
    <div>

    </div>
  )
}

export default AnimeReviews