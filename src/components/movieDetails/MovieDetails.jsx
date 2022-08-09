import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
let params=useParams();
const[moviedetails,setMoviedetails]=useState({})
  async function getDetails({id}){
  let{data}=  await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=6250ccd506d7d19547dda4fd96d5c869&language=en-US`)
  setMoviedetails(data)
  
  }
  useEffect(()=>{
    
    getDetails(params);
    
  
 
  },[])
  return (
    <div className="container my-5">


      <div className="row">

        <div className="col-md-4">
<div className="item">   <img src={"https://image.tmdb.org/t/p/w500"+moviedetails.poster_path} className='w-100' alt="" />
</div>
     
        </div>
        <div className="col-md-8">

<div className="item">

  <h2 className='text-info'>


    {
moviedetails.original_title

    }
  </h2>
  <p>{moviedetails.overview}</p>

  <div className="d-flex">

{moviedetails&&moviedetails.genres?moviedetails.genres.map(genere=> <p key={genere.id} className='bg-info mx-1 p-2'>{genere.name}</p>):""}

  </div>
  <p className='ps-2'> vote: {Math.round(moviedetails.vote_average)}</p>
  <p className='ps-2'> vote count: {Math.round(moviedetails.vote_count)}</p>
  <p className='ps-2'> release date : {moviedetails.release_date}</p>
  <p className='ps-2'>popularity : {Math.round(moviedetails.popularity)}</p>

</div>



        </div>
      </div>
    </div>
  )
}
