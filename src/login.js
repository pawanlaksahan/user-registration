import axios from "axios";
import React from "react";
import { useState,useEffect } from "react";

const Login = ()=>{

    const[Email,setEmail]=useState('');
    const[Password,setPassword]=useState('');

    async function submit(e){
        e.preventderfault();

        try{
            await axios.post("http://localhost:8000/",{
                Email,Password
            })
        }catch(e){
            console.log(e);
        }

    }

    






    return(
        <div>

                 
        <form method="post">
               <input type="email" placeholder="e-mail" onChange={(e)=>{setEmail(e.target.value)}} >Enter E-Mail</input>
                <input type="password" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}>Enter Password</input>
               <input type="submit" placeholder="Login" onClick={submit}>Login</input>         
     </form>

        </div>
    )
}
export default Login;