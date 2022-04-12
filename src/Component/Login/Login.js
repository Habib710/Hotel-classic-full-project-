import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='par'>
            
            <div className=' login-from '>
                <h1 className='text-center'>Login</h1>
                <form  className='form my-3'>
                    <label htmlFor="Email">Email</label>
                    <br />
                    <input type="email"  placeholder='Your Email'/>
                    <br />
                    <label htmlFor="Password" >Password</label>
                    <br />
                    <input type="Password" placeholder='Your Password' />
                    <br />
                    <h6 className='mt-3'>New to Hotel Classic ? <a href="#w">Register Now </a></h6>
                    
                   <br />
                    
                    <input className='button' type="submit"  />

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