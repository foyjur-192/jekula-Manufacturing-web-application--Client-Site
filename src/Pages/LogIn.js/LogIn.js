import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import {useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

import Loading from '../Share/Loading';
import auth from '../../firebase.init';
import useToken from '../../Hook/useToken';

const LogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
      ] = useSignInWithEmailAndPassword (auth);

      const { register, formState: { errors }, handleSubmit } = useForm();
      const navigate = useNavigate();

      const [token] = useToken (user || eUser)

      let signInError;
      const location = useLocation();
      let from = location.state?.from?.pathname || "/";
      
      if(loading || eLoading){
        <Loading></Loading>
      }
  
      useEffect(() => {
          if (token) {
              navigate(from, {replace: true});
      
          }
      }, [token, from, navigate ])    
  
      if(error || eError){
          signInError = <p className='text-red-500'>{error?.message || eError?.message}</p>
      }
  
     
  
  
      //form 
  
      // const { register, handleSubmit } = useForm();
  
      const onSubmit = data => {
          console.log(data);
          signInWithEmailAndPassword(data.email, data.password)
         
      }
 
      

      
    return (
        <div>
        <section className="text-gray-600 body-font relative  py-12">
            <div className="container px-5 mx-auto text-white">
                <div className="lg:w-2/5 md:w-2/3  mx-auto bg-gray-900 shadow-lg p-8 ">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Log in</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-wrap -m-2 ">
                            <div className="p-2 w-full text-left">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-White text-left">Email</label>
                                    <input
                                        {...register("email", {

                                           required: {
                                             value: true,
                                             message: 'Email is required'

                                           },

                                            pattern: {
                                              value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                              message: 'provide a valid Email' 
                                            }
                                          })}
                                        type="email" id="email" name="email" className="w-full secondary-color  rounded border border-black text-black   focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                         
                                         <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                         {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                         {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                         </label>
                                </div>
                            </div>
                            <div className="p-2 w-full text-left">
                                <div className="relative">
                                    <label for="password" className="leading-7 text-sm text-white text-left">Password</label>
                                    <input
                                         {...register("password", {

                                            required: {
                                              value: true,
                                              message: 'password is required'

                                            },
                                            
                                                minLength: {
                                                  value: 6,
                                                  message: 'Must be 6 character Password' 
                                                }
                                              
                                             
                                           })}
                                        type="text" id="password" name="password" className="w-full secondary-color  rounded border border-black text-black   focus:ring-2 focus:ring-indigo-200 text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-outt" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                         {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                                         {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 '>{errors.password.message}</span>}
                                         </label>
                                </div>
                            </div>
                            <div className="p-2 w-full ">
                                {signInError}
                                <button className='btn bg-color text-black hover:text-white lg:w-full md:w-full sm:w-full mt-4'>Log in</button>
                            </div>
                            {/* </form> */}
                        </div>
                    </form>
                    <div className=''>
                        <p className='pt-5 mb-3 text-white'>Create an Account?? <span className=' logo text-color  font-medium cursor-pointer' onClick={() => navigate('/signup')}>Sign up</span></p>
                        <button
                            onClick={() => signInWithGoogle() } 
                            className=' hover:text-white btn bg-white text-black lg:w-full md:w-full sm:w-full mt-6'> <img src='https://i.ibb.co/HCd5Pxc/google-logo-google-search-google-account-png-favpng-mmf8xek-Yw-FXSgw-Wu9-E96run-PA-removebg-preview.png' alt="" />   Sign in with Google</button>
                    </div>
                </div>
            </div>
        </section>

    </div>
    );
};

export default LogIn;