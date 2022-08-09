import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'
export default function Login({check}) {


  const [errors,setErrors]=useState([])
  const [errorsApi,setErrorsApi]=useState("")
  const [data,setData]=useState("")
  const [loading,setLoading]=useState(false)
  let navigate=useNavigate()
  const[user,setUser]=useState({
  
    password:"",
    email:"",
   
  })
  async function sendUser(e){
    e.preventDefault()
   
    if(validate()){
      setLoading(true)
  let {data}= await axios.post(" https://route-egypt-api.herokuapp.com/signin",user);
  if(data.message=="success"){
    setData(data.message)
    // navigate("login")
    setErrorsApi("")
    setLoading(false)
    localStorage.setItem("userTokin",data.token)
    check()
    navigate("/home")
  }
  else{
    setErrorsApi(data.message)
    setErrors([])
    setData("")
    console.log(errorsApi);
    setLoading(false)
  }
  console.log(data);
    }
  
  validate()
  }
  function validate(){
    let userValidation =Joi.object({
     
      password:Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
      email:Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
     
  
    })
    let result=userValidation.validate(user,{abortEarly:false})
    if (result.error){
      console.log(result);
      setErrors(result.error.details)
      console.log(errors);
      return false
  
  
    }
    else{
      return true
    }
  
    
  }
  function addUser(e){

    let myUser={...user};
    myUser[e.target.name] = e.target.value
    setUser(myUser);
    }
  return (
    
    <div  className="container mt-4  ">
      
      
      
    
      
  
      <form onSubmit={(e)=>sendUser(e)} >  

      <div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
      <h2 >Login</h2>
    
      {data.includes("success")? <h3 className='alert alert-info'>{data}</h3>:""}
      
<label htmlFor="">EMAIL</label>
<input onChange={(e)=>addUser(e)} type="text" name='email'  className='form-control my-2 ' /></div>
<div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
  
<label htmlFor="">PASSWORD</label>
<input onChange={(e)=>addUser(e)} type="password" name='password'  className='form-control my-2 ' /> { errorsApi? 
          <p className='alert alert-danger'>{errorsApi}</p>  :""
        
      }{errors.map((err,index)=>{
        if(err.message.includes("password")){
         return( <p  className='alert alert-danger '>incorrect password</p>) 
        }
  
    
      return  (<p key={index} className='alert alert-danger  '>{err.message}</p>)
      
      } )}
      
<button type='submit' className=" mt-4 btn btn-info text-white fw-bold  d-flex ms-auto">
 {loading? <i className='fa fa-spinner'></i>:""}
  
  Login



</button>
   </div>

      </form>
      
      
   
      </div>
  )
}
