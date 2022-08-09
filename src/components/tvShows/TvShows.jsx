import React from 'react'
import { Link } from 'react-router-dom'

import  { useEffect, useState } from 'react'
import axios from 'axios'
export default function TvShows() {
  const [page,setPage]=useState(1)
  let pages= new Array(10).fill(0).map((ele,index)=>index+1)
  const[tv,setTv]=useState([])
  async function getdata(type,setitem,pagenumper){
    setPage(pagenumper)
    let {data}=await axios.get(`https://api.themoviedb.org/3/trending/${type}/day?api_key=6250ccd506d7d19547dda4fd96d5c869&page=${pagenumper}`)
    setitem(data.results);
  
      }
    
      useEffect(()=>{
    
        getdata("tv",setTv,1);
    
      },[])
  return (
    <div className="container my-5">


    <div className="row">
    
    {tv.map((stv)=>(
      
      <div className="col-md-2 "><div className="item position-relative " key={stv.id}>
    <div className="position-absolute top=0 end-0 bg-success p-2">{Math.round(stv.vote_average)}</div>
    
    <Link to={`/tvDetails/`+stv.id} ><img src={"https://image.tmdb.org/t/p/w500"+stv.poster_path} className='w-100' alt="" /></Link>
    
    <h5>{stv.name? stv.name:"Loading"}</h5>
    </div>
    
    
    
    </div>
      
     ) )}
    
    
    </div>
    <nav aria-label="Page navigation">
      <ul className="pagination d-flex justify-content-center ">
       {pages.map((ele)=><li key={ele}  className="  px-2 page-item active"><a className={page===ele?" bg-danger page-link":"bg-info page-link"} onClick={()=>getdata("tv",setTv,ele)}>{ele}</a></li>)}
        
    
       
      </ul>
    </nav>
        </div>

  )
}
