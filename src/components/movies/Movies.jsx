
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Movies() {

const [page,setPage]=useState(1)
  const[movies,setMovies]=useState([])
  let pages= new Array(10).fill(0).map((ele,index)=>index+1)
  console.log(pages);
  async function getdata(type,setitem,pagenumper){
    setPage(pagenumper)
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=6250ccd506d7d19547dda4fd96d5c869&page=${pagenumper}`)
    setitem(data.results);
  
      }
    
      useEffect(()=>{
    
        getdata("movie",setMovies,1);
    
      },[])
  return (
    <div className="container my-5">


<div className="row">

{movies.map((movie)=>(
  
  <div className="col-md-2 "><div className="item position-relative " key={movie.id}>
<div className="position-absolute top=0 end-0 bg-success p-2">{Math.round(movie.vote_average)}</div>

<Link to={`/movieDetails/`+movie.id} ><img src={"https://image.tmdb.org/t/p/w500"+movie.poster_path} className='w-100' alt="" /></Link>

<h5>{movie.title? movie.title:"Loading"}</h5>
</div>



</div>
  
 ) )}


</div>
<nav aria-label="Page navigation">
  <ul className="pagination d-flex justify-content-center ">
   {pages.map((ele)=><li key={ele}  className="  px-2 page-item active"><a className={page===ele?" bg-danger page-link":"bg-info page-link"} onClick={()=>getdata("movie",setMovies,ele)}>{ele}</a></li>)}
    

   
  </ul>
</nav>
    </div>
  )
}
