import React, { useEffect, useState } from 'react'
import styls from '../register/Register.module.css'
import axios from 'axios'
import Joi from 'joi'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const [errors,setErrors]=useState([])
  const [errorsApi,setErrorsApi]=useState("")
  const [data,setData]=useState("")
  const [loading,setLoading]=useState(false)
  let navigate=useNavigate()
function validate(){
  let userValidation =Joi.object({
    first_name:Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    last_name:Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    password:Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    email:Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    age:Joi.number().min(16).max(90).required(),

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

const[user,setUser]=useState({
  first_name:"",
  last_name:"",
  password:"",
  email:"",
  age:"",
})
async function sendUser(e){
  e.preventDefault()
 
  if(validate()){
    setLoading(true)
let {data}= await axios.post(" https://route-egypt-api.herokuapp.com/signup",user);
if(data.message=="success"){
  setData(data.message)
  // navigate("login")
  setErrorsApi("")
  setLoading(false)
  navigate("/login")
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

function addUser(e){

let myUser={...user};
myUser[e.target.name] = e.target.value
setUser(myUser);
}
useEffect(()=>{
console.log(user);
},[user])
  return (
    <div  className="container mt-4  ">
      
      
      
      <h2 >Register</h2>
      { errorsApi? 
          <h3 className='alert alert-danger'>{errorsApi}</h3>  :""
        
      }
      
   {data.includes("success")? <h3 className='alert alert-info'>{data}</h3>:""}
      {errors.map((err,index)=>{
      if(err.message.includes("password")){
       return( <p  className='alert alert-danger '>incorrect password</p>) 
      }

      
    return  (<p key={index} className='alert alert-danger  '>{err.message}</p>)
    
    } )}
      <form onSubmit={(e)=>sendUser(e)} >  
<div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>  <label htmlFor="">FIRST NAME</label>
<input  type="text" name='first_name' 
 className='form-control my-2 '  onChange={(e)=>addUser(e)}/></div>
<div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
<label htmlFor="">LAST NAME</label>
<input onChange={(e)=>addUser(e)} type="text" name='last_name'  className='form-control my-2 ' /></div>
<div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
<label htmlFor="">PASSWORD</label>
<input onChange={(e)=>addUser(e)} type="password" name='password'  className='form-control my-2 ' /></div>
<div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
<label htmlFor="">EMAIL</label>
<input onChange={(e)=>addUser(e)} type="text" name='email'  className='form-control my-2 ' /></div>
<div className='d-flex flex-column  w-75 justify-content-center mx-auto  align-item-center'>
<label htmlFor="">AGE</label>
<input onChange={(e)=>addUser(e)} type="text" name='age'  className='form-control my-2 ' /></div>
<button type='submit' className={`${styls.buttton} mt-4 btn btn-info text-white fw-bold  d-flex ms-auto`}>
 {loading? <i className='fa fa-spinner'></i>:""}
  
  Register



</button>
      </form>
      
      
   
      </div>
  )
}
