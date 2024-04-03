import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import requests from '../api/request';
import './Banner.css';

const Banner = () => {

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    fetchData();

  }, []) 

  const fetchData = async () => {
    // 현재 상영중인 영화 정보를 가져오기 (다수)
    const response = await axios.get(requests.fetchNowPlaying);
    console.log(response);

    // 여러 영화 중 하나의 영화 ID 가져오기
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id

    // 특정 영화의 더 상세한 정보 가져오기 (비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
      params: { append_to_response: 'videos' }
    })
    setMovie(movieDetail);
  }

  const truncate = (str, num) => {
    return str?.length > num ? str.substring(0, num) + '...' : str;
  }

  return (
    <header 
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: 'top center',
        backgroundSize: 'cover'
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie.title || movie.name || movie.original_name}
        </h1>
        
        <div className='banner__buttons'>
          {movie?.videos?.results[0]?.key &&
            <button className='banner__button play'>Play</button>
          }
        </div>
        <p className='bammer__description'>
          {truncate(movie.overview, 10)}
        </p>
      </div>

      <div className='banner--fadeBottom'></div>
      
    </header>
  )
}

export default Banner
