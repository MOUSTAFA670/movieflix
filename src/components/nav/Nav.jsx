import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Nav({isloggin,checkislogin}) {
  let navigation=useNavigate()
function logout(){

  localStorage.removeItem("userTokin")
  checkislogin()
navigation("/login")

}


  return (



    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link className="navbar-brand fw-bold fs-3 text-info " to="home">Mouflex</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {isloggin?
          
        <>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="movies">Movies</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="tvShows">Tv-show</Link>
          </li>
        
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="about">Contact us</Link>
          </li>
        
          
          
          </>:''}
        </ul>
   
       <div className='d-flex align-items-center'> <input className="form-control me-2 w-75" type="search" placeholder="Search" aria-label="Search"/>
       
       <ul className='list-unstyled d-flex  mb-0'><li className='mx-2'>
         <i className='fa-brands fa-facebook'></i>
         
         </li>
         <li className='mx-2'>
         <i className='fa-brands fa-twitter'></i>
         
         </li>
         <li className='mx-2'>
         <i className='fa-brands fa-instagram'></i>
         
         </li>
         
         
         </ul>
       
       <ul className='list-unstyled d-flex mb-0'>{!isloggin?<><li className='mx-2'><Link className='text-white text-decoration-none' to="login"> Login</Link></li>
       <li className='mx-2'><Link className='text-white text-decoration-none' to="register"> Register</Link></li></>:""}
      {isloggin?<> <li className='mx-2'><span className='text-white text-decoration-none'onClick={()=>{
        logout()
      }}> Logout</span></li></>:""}
       </ul>
       
       </div>
         
          
      
      </div>
    </div>
  </nav>
  )
}
