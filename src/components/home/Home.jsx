import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {
const[movies,setMovies]=useState([])
const[person,setPerson]=useState([])
const[tv,setTv]=useState([])

  async function getdata(type,setitem){

let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=6250ccd506d7d19547dda4fd96d5c869`)
setitem(data.results);
  }

  useEffect(()=>{

    getdata("movie",setMovies);
    getdata("tv",setTv);
    getdata("person",setPerson);

  },[])
  return (

<div className="container my-5">

<div className="row">
<div className="  col-md-4 d-flex flex-column justify-content-center align-item-center ">
  
<h2 className='text-info'>Trending <br/>movies <br/>  to watch now</h2>
<p > most watched by day</p>

</div>
{movies.slice(0,10).map((movie)=>(
  
  <div className="col-md-2 "><div className="item position-relative " key={movie.id}>
<div className="position-absolute top=0 end-0 bg-success p-2">{Math.round(movie.vote_average)}</div>
<img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className='w-100' alt="" />
<h5>{movie.title? movie.title:"Loading"}</h5>
</div>



</div>
  
 ) )}


</div>

<div className="row my-5">
<div className="  col-md-4 d-flex flex-column justify-content-center align-item-center ">
<h2 className='text-info'>Trending <br/>TV <br/>  to watch now</h2>
<p > most watched by day</p>

</div>
{tv.slice(0,10).map((stv)=>(
  
  <div className="col-md-2 "><div className="item position-relative " key={stv.id}>
<div className="position-absolute top=0 end-0 bg-success p-2">{Math.round(stv.vote_average)}</div>
<img src={"https://image.tmdb.org/t/p/w500"+stv.poster_path} className='w-100' alt="" />
<h5>{stv.name? stv.name:"Loading"}</h5>
</div>



</div>
  
 ) )}


</div>

<div className="row">
<div className="  col-md-4 d-flex flex-column justify-content-center align-item-center ">
<h2 className='text-info'>Trending <br/>people <br/>  to watch now</h2>
<p > most watched by day</p>

</div>
{person.slice(0,10).map((sperson)=>(
  
  <div className="col-md-2 position-relative  "><div className="item  " key={sperson.id}>

 {sperson.profile_path?<img  src={"https://image.tmdb.org/t/p/w500"+sperson.profile_path} className='w-100' alt="" />:  ""}   
<h5 className='  '>{sperson.name? sperson.name:""}</h5>
</div>



</div>
  
 ) )}


</div>
</div>


    
  )
}
