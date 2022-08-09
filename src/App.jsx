import React, {  useEffect, useState } from 'react'

import './App.css';
import Nav from './components/nav/Nav';
import Login from './components/login/Login'
import { Routes, Route } from 'react-router-dom';
import Register from './components/register/Register'
import Home from './components/home/Home'
import Movies from './components/movies/Movies'
import MovieDetails from './components/movieDetails/MovieDetails'
import Network from './components/network/Network'

import Notfound from './components/notfound/Notfound'
import TvShows from './components/tvShows/TvShows'
import About from './components/about/About'

import ProtectedRoute ,{NonProtectedRoute} from './components/protectedRoute/ProtectedRoute';
import TvDetails from './components/tv/TvDetails';

export default function App() {

const [islogin,setIsLogin]=useState(false)

function checkislogin(){


let token=localStorage.getItem("userTokin")
console.log("ujhgh");
if(token){
  setIsLogin(true)

}
else{
  setIsLogin(false)
  

}

}
useEffect(()=>{

  checkislogin()

},[])
  return (
    <>
    <Nav isloggin={islogin} checkislogin={checkislogin}/>
    <Routes>
<Route path="/" element={ <NonProtectedRoute><Login/></NonProtectedRoute>}/>
<Route path="login" element={ <NonProtectedRoute><Login check={checkislogin}  /></NonProtectedRoute>}/>
<Route path="register" element={ <NonProtectedRoute><Register/></NonProtectedRoute>}/>
<Route path="home" element={ <ProtectedRoute><Home/></ProtectedRoute> }/>
<Route path="movies" element={<ProtectedRoute><Movies/></ProtectedRoute>}/>
<Route path="movieDetails/:id" element={<ProtectedRoute><MovieDetails/></ProtectedRoute>}/>
<Route path="tvDetails/:id" element={<ProtectedRoute><TvDetails/></ProtectedRoute>}/>
<Route path="network" element={<ProtectedRoute><Network/></ProtectedRoute>}/>
<Route path="about" element={<ProtectedRoute><About/></ProtectedRoute>}/>

<Route path="tvShows" element={<ProtectedRoute><TvShows/></ProtectedRoute>}/>
<Route path="*" element={<Notfound/>}/>









    </Routes>
    
    </>
  )
}
