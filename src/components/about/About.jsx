import React from 'react'

import  { useEffect, useState } from 'react'


import Joi from 'joi'
export default function About() {

  

    const [errors,setErrors]=useState([])
  
    const[user,setUser]=useState({
      first_name:"",
     
      
      email:"",
      opinion:"",
    })
    function validate(){
      let userValidation =Joi.object({
        first_name:Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
       
        email:Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        opinion:Joi.string()
        .alphanum()
        .min(3)
        .max(100)
        .required(),
    
      })
      let result=userValidation.validate(user,{abortEarly:false})
      if (result.error){
    
        setErrors(result.error.details)
        console.log(errors);
        return false
    
    
      }
      else{
        return true
      }
    
      
    }
     function sendUser(e){
      e.preventDefault()
      validate()
      if(validate()){
     console.log(user);
   
        localStorage.setItem("userOpinion",JSON.stringify(user))

        
    
      
    }
    else{
      
      
     
    }
  
      }
    
     
  
  
      
    function addUser(e){
  
      let myUser={...user};
      myUser[e.target.name] = e.target.value
      setUser(myUser);
      
      // if(validate){
      //   e.target.value=""
      // }
      }
      // useEffect(()=>{
      //   localStorage.setItem("userOpinion",JSON.stringify(user))
      // },[user])
    
  return (
 
    
     
        <div  className="container mt-4  ">
          
          
          
        
          
      
        <form  onSubmit={(e)=>sendUser(e)} >  
    
        <div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
        <h2 >contact us </h2>
    { errors.map((err,index)=>{
      
     
      
    return  (<p key={index} className='alert alert-danger  '>{err.message}</p>)
    
    } )} 
        <label htmlFor="">Name</label>
    <input onChange={(e)=>addUser(e)} type="text" name='first_name'  className='form-control my-2 ' /></div>
    <div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
        
    <label htmlFor="">EMAIL</label>
    <input onChange={(e)=>addUser(e)} type="text" name='email'  className='form-control my-2 ' /></div>
    <div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
    
    <label htmlFor="">opinion</label>
    <textarea onChange={(e)=>addUser(e)} type="text" name='opinion'  className='form-control my-2 ' /></div>
    <div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
    
    <button type='submit' className=" mt-4 btn btn-info text-white fw-bold  d-flex ms-auto">
    
    Send
    
    
     </button>
      </div>
    
        </form>
        
        
        </div>
    
    
    
  )
}
