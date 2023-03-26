import React, { useEffect, useState } from 'react'
import { Span } from 'slate';

const AnimeSeasons = () => {
  const [seasons, setSeasons] = useState([]);

  const getSeasons = async () => {
    const response = await fetch(`https://api.jikan.moe/v4/seasons`)
      .then(res => res.json())
    console.log(response.data);
    setSeasons(response.data);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getSeasons();
      clearInterval(interval);
    }, 1500)
  }, [])

  return (
    <div className='max-w-[1250px] mx-auto mb-10'>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="c-border-bottom px-4 py-2 text-white opacity-[.6] text-center">Year</th>
            <th className="c-border-bottom px-4 py-2 text-white opacity-[.6] text-center">Season</th>
          </tr>
        </thead>
        <tbody>
          {seasons ? (
            <>
              {seasons.slice(0, 10).map((season, index) => (
                <tr key={index}>
                  <td className="c-border-bottom px-4 py-2 text-white opacity-[.6] text-center">{season.year}</td>
                  <td className="c-border-bottom px-4 py-2 text-white opacity-[.6] text-center">{season.seasons.map((season) => (<span className='mr-2'>{season},</span>))}</td>
                </tr>
              ))}
            </>
          ) : (
            <tr>
              <td colSpan="2" className="border px-4 py-2">
                Loading...
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default AnimeSeasons