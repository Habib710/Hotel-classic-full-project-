import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const Registation = () =>{
    const naviget=useNavigate();
    
    const [email,setemail]=useState('');

    const [password,setpassword]=useState('');

    const [conpassword,setconpassword]=useState('');
    const [error ,seterror]=useState('');

    const [
        createUserWithEmailAndPassword,
        user,
        
      ] = useCreateUserWithEmailAndPassword(auth);


    
       
        
    const hendlname=event=>{
        const username=event.target.value;
        console.log(username);
        
    }

        const hendlemail=event=>{
            const useremail=event.target.value;
        setemail(useremail);
        }
        const hendlpassword=event=>{
            const userpassword=event.target.value;
          setpassword(userpassword);
        }
        const hendlconpassword=event=>{
            
            const userconpassword=event.target.value;
           

            setconpassword(userconpassword);
        }
        if(user){
            naviget('/')
        }

            const hendlesummit=event=>{
                event.preventDefault();
                if(password !== conpassword){
                    seterror("Your two password didn't match !!")
                    return

                }
                if(password.length <5){
                    seterror("Your password less then 5 letter !!")
                    return

                }
                createUserWithEmailAndPassword(email , password)
                .then(res=>{
                    const user=res.user;
                    console.log(user);
                })
         

            }
           
        


    return (
        <div className='par'>
            
            
            <div className=' login-from '>
                <h1 className='text-center'>Registation</h1>
                <form onSubmit={hendlesummit} className='form my-1'>
                    <label htmlFor="name">Name</label>
                    <input onBlur={hendlname} type="text"  placeholder='Your name' required/>
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input onBlur={hendlemail} type="email"  placeholder='Your Email'required/>
                    <br />
                    <label htmlFor="Password" >Password</label>
                    <br />
                    <input onBlur={hendlpassword} type="Password" placeholder=' Password' required/>
                    <br />
                    <label htmlFor="Password" >Conform Password</label>
                    <br />
                    <input onBlur={hendlconpassword} type="Password" placeholder='Conform Password' required/>
                    <br />

                    <h6 className='mt-3'>Have an account Hotel Classic ? <Link to="/login">Login Now </Link></h6>
                    
                   <br />
                   {
                       error?<span className='colors'>{error}</span>:''
                   }
                    
                    <input className='button' type="submit" value='Register' />

                    <br />
                    <br />
                    <p className='text-center'>Or</p>
                   
                    <button  className='buttonss'>Sing up With Google</button>


                </form>

            </div>
        </div>
    );
};

export default Registation;