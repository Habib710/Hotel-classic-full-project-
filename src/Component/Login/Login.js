import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
   
    const naviget=useNavigate();
   
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    



    const hendlemail=event=>{
        const useremail=event.target.value;
    setemail(useremail);
    }
    const hendlpassword=event=>{
        const userpassword=event.target.value;
      setpassword(userpassword);
    }


    const handelesubmit= event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
    }
    if(user){
        naviget('/')
    }
    
    return (
        <div className='par'>
            
            <div className=' login-from '>
                <h1 className='text-center'>Login</h1>
                <form onSubmit={handelesubmit} className='form my-3'>
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input onBlur={hendlemail} type="email"  placeholder='Your Email'/>
                    <br />
                    <label htmlFor="Password" >Password</label>
                    <br />
                    <input onBlur={hendlpassword} type="Password" placeholder='Your Password' />
                    <br />
                    {
                        loading? <p>loading............</p>:''
                    }
                    {
                       error? <p>Error: {error.message}</p> :''
                    }
                    
                   
                    
                    <h6 className='mt-3'>New to Hotel Classic ? <Link to="/register">Register Now </Link></h6>
                   
                   <br />
                    
                    
                    <input className='button' type="submit" value='Login'  />

                    <br />
                    <br />
                    <p className='text-center'>Or</p>
                   
                    <button className='buttonss'>Sing in With Google</button>


                </form>

            </div>
        </div>
    );
};

export default Login;