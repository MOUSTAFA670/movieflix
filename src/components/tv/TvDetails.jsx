import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TvDetails() {
let params=useParams();
const[tvdetails,setTvdetails]=useState({})
  async function getDetails({id}){
  let{data}=  await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=6250ccd506d7d19547dda4fd96d5c869&language=en-US`)
  setTvdetails(data)
  console.log(data);
  
  }
  useEffect(()=>{
    
    getDetails(params);
    
  
 
  },[])
  return (
    <div className="container my-5">


      <div className="row">

        <div className="col-md-4">
<div className="item">   <img src={"https://image.tmdb.org/t/p/w500"+tvdetails.poster_path} className='w-100' alt="" />
</div>
     
        </div>
        <div className="col-md-8">

<div className="item">

  <h2 className='text-info'>


    {
tvdetails.name

    }
  </h2>
  <p>{tvdetails.overview}</p>

  <div className="d-flex">

{tvdetails&&tvdetails.genres?tvdetails.genres.map(genere=> <p key={genere.id} className='bg-info mx-1 p-2'>{genere.name}</p>):""}

  </div>
  <p className='ps-2'> vote: {Math.round(tvdetails.vote_average)}</p>
  <p className='ps-2'> vote count: {Math.round(tvdetails.vote_count)}</p>
  <p className='ps-2'> release date : {tvdetails.first_air_date}</p>
  <p className='ps-2'>popularity : {Math.round(tvdetails.popularity)}</p>

</div>



        </div>
      </div>
    </div>
  )
}