import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from "react-hook-form";



const AddProduct = () => {



    const { register, formState: { errors }, handleSubmit, reset } = useForm ();
    //imgbb key
    const imageStorageKey = 'e8abbeb0da370fb637d95074a5902b9d';


    const onSubmit = async data => {
        const image = data.image[0]
   
        const formData = new FormData();
        formData.append('image', image);
       const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
    
    fetch(url, {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then (result => {
        if(result.success){
                   const img = result.data.url;
                   const part = {
                    product: data.name,
                    price: data.price,
                    order: data.order,
                    minimum: data.minimum,
                    delivery: data.delivery,
                    brand: data.brand,
                    model: data.model,
                    material: data.material,
                    description: data.description,
                    feature: data.feature,
                    user : data.email,
                    img: img
                   }
                   //Send to your Database
                   fetch('http://localhost:5000/partAdded', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },

                   body: JSON.stringify(part)
                   })
                   .then(res => res.json())
                   .then(inserted => {
                    if(inserted.success){
                        toast('Product Successfully Added')
                        reset();
                    }
                    else{
                        toast.error('You already have Added same Product')
                    }
                   })
               

                }


    })
    }


      
    return (
        <div className='mt-16 mb-16'>
         
           <form onSubmit={handleSubmit(onSubmit)}>
                        <div class=" bg-state-200   px-12">
                        
                            <div class="flex shadow flex-wrap px-6 py-6 -m-2 ">
                            <h1 className='text-2xl font-medium mt-5 mb-7 ml-3'>Add New Product</h1>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        
                                        <input 
                                         {...register("product", {

                                            required: {
                                                value: true,
                                                message: 'Name is required'

                                            }

                                        })}
                                        type="text"  name="product" placeholder='Product Name' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                     <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.fullName?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.fullName.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                       
                                        <input
                                            {...register("price", {

                                                required: {
                                                    value: true,
                                                    message: 'Price is required'

                                                },

                                                // pattern: {
                                                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                //     message: 'provide a valid Email'
                                                // }
                                            })}
                                            type="text"  name="price" placeholder='Price of the Product' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                     
                                        <input
                                            {...register("order", {

                                                required: {
                                                    value: true,
                                                    message: 'Order fixed is required'

                                                },

                                                // pattern: {
                                                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                //     message: 'provide a valid Email'
                                                // }
                                            })}
                                            type="text"  name="order" placeholder='Min-Max Order' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                     
                                        <input
                                            {...register("minimum", {

                                                required: {
                                                    value: true,
                                                    message: 'Minimum Order is required'

                                                },

                                                // pattern: {
                                                //     value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                //     message: 'provide a valid Email'
                                                // }
                                            })}
                                            type="text"  name="minimum" placeholder='Minimum Order' class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        <label for="email" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                            {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 '>{errors.email.message}</span>}
                                        </label>
                                    </div>
                                </div>

                              
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("delivery", {

                                            required: {
                                                value: true,
                                                message: 'Delivery Time is Required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Delivery Time' name="delivery" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("brand", {

                                            required: {
                                                value: true,
                                                message: 'brand is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Brand Name' name="brand" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>



                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("model", {

                                            required: {
                                                value: true,
                                                message: 'Model is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Model' name="model" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>



                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("material", {

                                            required: {
                                                value: true,
                                                message: 'Material type is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Material type' name="material" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>

                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("description", {

                                            required: {
                                                value: true,
                                                message: 'description is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Description' name="description" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>


                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                        <input 
                                         {...register("feature", {

                                            required: {
                                                value: true,
                                                message: 'feature is required'

                                            }

                                        })}
                                        
                                        
                                        type="text" placeholder='Feature' name="feature" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <label for="report" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.report?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.report.message}</span>}
                                           
                                        </label>
                                    </div>
                                </div>


                                <div class=" w-full text-left">
                                    <div class="relative">
                                      
                                        <input 
                                         {...register("email", {

                                            required: {
                                                value: true,
                                                message: 'image is required'

                                            }

                                        })}
                                        
                                        
                                        type="hidden" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                         <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.image?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.image.message}</span>}
                                           
                                        </label>
                                    
                                    </div>
                                </div>
                                <div class="p-2 w-full text-left">
                                    <div class="relative">
                                      
                                        <input 
                                         {...register("image", {

                                            required: {
                                                value: true,
                                                message: 'image is required'

                                            }

                                        })}
                                        
                                        
                                        type="file" name="image" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                         <label for="age" className="leading-7 text-sm text-gray-600 text-left">
                                            {errors.image?.type === 'required' && <span className='label-text-alt text-red-500 '>{errors.image.message}</span>}
                                           
                                        </label>
                                    
                                    </div>
                                </div>
                                <div class="p-2  ">
                                    <button className='btn bg-color text-black border-none hover:text-white  lg:w-full md:w-full sm:w-full mt-4'>Added Now</button>
                                </div>
                                {/* </form> */}
                            </div>
                        
                        </div>
                    </form>
       <ToastContainer />
        </div>
    );
};

export default AddProduct;