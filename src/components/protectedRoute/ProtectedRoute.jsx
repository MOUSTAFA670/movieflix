import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children}) {





if(localStorage.getItem("userTokin")){
    return children
}
else{
 return <Navigate to="/login"></Navigate>

}


    }

    export function NonProtectedRoute({children}) {



        if(localStorage.getItem("userTokin")){
             return <Navigate to="/home"></Navigate>
        }
        else{
         
            return  children
        }
        
        
            }
        
