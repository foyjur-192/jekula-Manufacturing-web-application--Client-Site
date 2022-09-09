import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hook/useAdmin';

const NavBar = () => {
  const [user] = useAuthState (auth );
  const [admin] = useAdmin(user); 

  const [saves , setSaved] = useState([]);
  const [orders , setOrder] = useState([]);


// get saved data
useEffect( ()=>{
  fetch('http://localhost:5000/order')
  .then(res => res.json())
  .then(data => setOrder(data));
}, [])

// get order data
useEffect( ()=>{
  fetch('http://localhost:5000/saved')
  .then(res => res.json())
  .then(data => setSaved(data));
}, [])




 
  const Logout = () => {
    signOut (auth);
   localStorage.removeItem('accessToken');
  };

    return (
        <div className=''>
            <div className=' lg:visible  sm:invisible   bg-slate-900'>
           
  <div class="container mx-auto  flex flex-wrap p-4 text-white flex-col md:flex-row items-center ">
     <label for="my-modal-5" class=" mr-12 cursor-pointer">About</label>
     <label for="my-modal-6" class=" mr-12 cursor-pointer">Contact</label>
 
 
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <img src='https://i.ibb.co/dKqX5M7/Facebook.png' alt='ima'/>
     <img src='https://i.ibb.co/xHYLM9W/Pinterest.png' alt='ima'/>
     <img src='https://i.ibb.co/Rg6mhQw/Instagram.png' alt='ima'/>
     <Link to='/'>{}</Link>
     <Link to='/'>{}</Link>
    </nav>
  </div>

            </div>
   {/* Middle Navbar */}
{/* 
   <header class="text-gray-600 body-font py-5">
  <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

      <span class=" text-xl">  <a class="btn btn-ghost normal-case text-3xl">JEKULA<span className='text-xl font-normal'>Industries</span></a></span>
    </a>
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <img className='mr-6' src='https://i.ibb.co/jr4dsHm/User.png' alt='ima'/>
  <img className='mr-6' src='https://i.ibb.co/C2KMKzD/Heart-Upside-Down.png' alt='ima'/>
  <img src='https://i.ibb.co/jDZrz7y/Shopping-Bag.png' alt='ima'/>
    </nav>
    <Link to='/login'>Log in</Link>
  </div>
</header> */}
<div class="navbar bg-base-100 py-8 container mx-auto">
  <div class="flex-1">
  <span class=" text-xl ">  <Link className=' normal-case text-3xl font-bold cursor-pointer' to='/home'>JEKULA </Link></span>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://placeimg.com/80/80/people" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
     
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        {
          user && <li><label for="my-modal-9" class="">Orders</label> </li>
        }
        {
          user && <li><label for="my-modal-7" class="">Saved Orders</label> </li>
        }
      
        {
         admin && <li><Link to='/dashboard'>Dashboard</Link> </li>
        }

        <li><a>Settings</a></li>
        <li> { user ? <button class="btn btn-ghost font-normal text-xl text-left " onClick={Logout}>
        Log Out</button> : <Link to="/login">Log in</Link>}</li>
       
      </ul>
     
    </div>

  </div>
</div>

{/* popup */}
<input type="checkbox" id="my-modal-7" class="modal-toggle" />
{/* <div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-7" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className='flex justify-between mt-5 px-8 py-5 bg-color mb-12'>
    <div>  <h1 className='font-bold text-2xl'>Saved Orders</h1></div>
    <div><p className='font-medium text-lg'>Total Save Items: {saves.length}</p></div>
  </div>
  {
  saves.map(save =>
  <>
  <section class="text-gray-600 body-font overflow-hidden">
  
  <div class="container px-5 py-12 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex items-stretch flex-wrap md:flex-nowrap text-left bg-white shadow px-4">
        <div class="md:flex-grow">
          <h2 class="text-lg font-medium text-gray-900 title-font">Product Name: <span className='font-normal text-normal ml-2'>{save.name}</span></h2>
          <p class="font-medium text-lg">Order Quantity:<span className='font-normal text-normal ml-2'>{save.quantity}</span>Piece</p>
          <p class="font-medium text-lg">Total Amount: <span className='font-normal text-normal ml-2'>${save.total}</span></p>
          <p class="font-medium text-lg">Product Model: <span className='font-normal text-normal ml-2'>{save.model}</span></p>
        </div>
        <button className='btn self-center bg-color border-none text-black hover: text-white'> Complete Order </button>
      </div>
    </div>
  </div>
</section>
  </>
  
  )}



  </div>
</div> */}


{/* Orders */}

<input type="checkbox" id="my-modal-9" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-9" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className='flex justify-between mt-5 px-8 py-5 bg-color mb-12'>
    <div>  <h1 className='font-bold text-2xl'>Order Completed</h1></div>
    <div><p className='font-medium text-lg'>Total Complete Order: {orders.length}</p></div>
  </div>
  {/* {
  orders.map(save=>
  <>
  <section class="text-gray-600 body-font overflow-hidden">
  
  <div class="container px-5 py-12 mx-auto">
    <div class="-my-8 divide-y-2 divide-gray-100">
      <div class="py-8 flex items-stretch flex-wrap md:flex-nowrap text-left bg-white shadow px-4">
        <div class="md:flex-grow">
          <h2 class="text-lg font-medium text-gray-900 title-font">Product Name: <span className='font-normal text-normal ml-2'>{save.name}</span></h2>
          <p class="font-medium text-lg">Order Quantity:<span className='font-normal text-normal ml-2'>{save.quantity}</span>Piece</p>
          <p class="font-medium text-lg">Total Amount: <span className='font-normal text-normal ml-2'>${save.total}</span></p>
          <p class="font-medium text-lg">Product Model: <span className='font-normal text-normal ml-2'>{save.model}</span></p>
        </div>
        <button className='btn self-center bg-color border-none text-black hover: text-white'> Completed </button>
      </div>
    </div>
  </div>
</section>
  </>
  
  )} */}



  </div>
</div>



{/* Body */}
<input type="checkbox" id="my-modal-5" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-5" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h1  className='font-medium text-3xl text-left mb-12'>About Our Company</h1>
  <h1  className='font-medium text-2xl text-left bg-color p-3'>Profile</h1>
  <p className='text-left  mt-5'>Established in 2009, we, Garuda Impex are a leading manufacturer, importer, and exporter, involved in offering a large assortment of Cylinder Liner, Piston Ring, Gudgeon Ring, Con Rod Bearing, Bush Bearing, Thrust Washer, etc. Our reliable product and durability make us the foremost choice for our customers. The whole assortments of our products are manufactured underneath our premises by utilizing excellent quality components and contemporary technology.<br/><br/> These products are widely utilized in many industrial applications. We confirm to deliver high-quality products to the patrons all across the nation. Besides, we deliver our products to various places by dissimilar mode of transportation.
We have a team of experts who work hard to accommodate the numerous necessities of our patrons.<br/> <br/> Also, our professionals use most contemporary technology while manufacturing our product. The excellent finishing and sturdiness of our products are growing their demands in the market. We also customized our products in bulk according to the stated specifications of the customers. Additionally, we maintained a successful relationship with our valued customers.
Mr. Rakesh Gori (Proprietor) is the mentor of our company. He has complete knowledge of the marketplace and has years of acquaintance in working in this specific field.</p>
     <div className='text-left mt-12'>
     <h2 className='font-medium text-2xl text-left mt-5 p-2 bg-color'>Company Factsheet</h2>
     <p className='font-medium text-xl text-left mt-3'>Basic Information</p>
     <div className='flex'>
      <div className='font-normal'>
      <p>Nature of Business: </p>
     <p>Additional Business:  </p>
     <p>Company CEO: </p>
     <p>Registered Address:</p>
     <p>Total Number of Employees : </p>
     <p>Year of Establishment: </p>
     <p>Legal Status of Firm: </p>
     <p>Annual Turnover </p>
     <p>Top Export Countries :
   </p>
      </div>
      <div className='ml-16'>
    <p>Exporter and Manufacturer</p>
     <p>  Exporter & Importer</p>
     <p> Foyjur Rahman</p>
     <p>Los Angeles, CA 90021</p>
     <p> Upto 10 People</p>
     <p> 2000</p>
     <p> Individual - Proprietor</p>
     <p> $20 Million</p>
     <p>
   Canada, Australia, UK , Europe</p>
      </div>
     </div>

     {/* Second Part */}
     <div className='flex'>
      <div className='font-normal'>
      <p className='font-base-xs text-xl text-left mt-3'>Trade & Market</p>
      <p>Export Percentage:  </p>
      <p className='font-base-xs text-xl text-left mt-3'>Company USP</p>
      <p>Quality Measures /<br/> Testing Facilities :</p>
      <p className='font-base-xs text-xl text-left mt-3'>Statutory Profile</p>
      <p>Import Export Code</p>
      <p className='font-base-xs text-xl text-left mt-3'>Packaging/Payment<br/> and Shipment Details</p>
      <p>Payment Mode:</p>
      <p>Shipment Mode:</p>
   
      </div>
      <div className='ml-20'>
        <br/>
        <br/>
    <p> 100% </p>
    <br/>
    <br/>
     <p>  Yes</p>
     <br/>
     <br/>
     <p>  (IEC) ADRPM*****</p>
     <br/>
     <br/>
     <br/>
     <p> Cash,  Cheque,  DD ,Bank Transfer</p>
     <p>By Road, By Cargo ,By Sea</p>
      </div>
     </div>

   
     </div>
{/* Why us */}
     <div className='text-left mt-12'>
     <h2 className='font-medium text-2xl text-left mt-5 p-2 bg-color mb-8' >Why Us?</h2>
     <p>We, JEKULA are a highly prominent company and captivated in offering an extensive range of Cylinder Liner, Piston Ring, Gudgeon Ring and Conrod Bearing to the clients. Our exceptional quality products, large distribution network, and on-time delivery have been extensively esteemed by our patrons. Being backed by a talented team, we are able to manufacture product according to the newest market trends. Following are some of the features that set us apart from our participants and make us the desired choice for our patrons:</p>
     <div class="badge badge-xs mr-3 bg-color mt-5"></div> Quality products<br/>
     <div class="badge badge-xs mr-3 bg-color"></div>High-grade packaging<br/>
     <div class="badge badge-xs mr-3 bg-color"></div>   Competitive pricing<br/>
     <div class="badge badge-xs mr-3 bg-color"></div> Competitive pricing<br/>
     <div class="badge badge-xs mr-3 bg-color"></div> Stringent quality testing methods<br/>
     </div>

     {/* Our Infrastructure */}
     <div className='text-left mt-12'>
     <h2 className='font-medium text-2xl text-left mt-5 p-2 bg-color mb-8' >Our Infrastructure</h2>
     <p>We are aided by a sophisticated and fully-integrated infrastructure facility. This enables us to manufacture high-quality products in bulk quantity. Moreover, this also facilitates quality testing units of manufactured shower trays and bathtub, to make sure that these meet the industry quality standards. To ensure that all the processes run fluently and smoothly, we have divided our spacious infrastructure into departments such as manufacturing, logistics, quality control and R & D.</p>
   
     </div>

     {/* Major Market */}
     <div className='text-left mt-12'>
     <h2 className='font-medium text-2xl text-left mt-5 p-2 bg-color mb-8' >Major Market</h2>
     <p className='font-medium'>Exporting Countries:</p>
     <div class="badge badge-xs mr-3 bg-color mt-5"></div> Europe Country<br/>
     <div class="badge badge-xs mr-3 bg-color"></div>Canada<br/>
     <div class="badge badge-xs mr-3 bg-color"></div>    Australia<br/>
     <div class="badge badge-xs mr-3 bg-color"></div> UK<br/>
     </div>

     {/* Our Team */}
     <div className='text-left mt-12'>
     <h2 className='font-medium text-2xl text-left mt-5 p-2 bg-color mb-8' >Our Team</h2>
     <p>Our diligent workforce comprises a distinct group of outlooks, qualifications and expertise. We owe the speedy pace in our brand image to the inspiring thinkers and performers in our team. We have most qualified and highly stimulating manufacturing experts, engineers, technicians, associates and managers on boards. Further, to sustain a powerful sense of competency, we organize comprehensive training programs.</p>
     </div>


      {/* Review and Rating */}

      <section class="text-gray-600 body-font">
    
  <div class="container px-5 py-16 mx-auto">
  <h2 className='font-medium text-3xl text-Center mt-5 p-2  mb-12' >Review & Rating</h2>
    <div class="flex flex-wrap -m-4">
      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75  px-3 pt-5 pb-16 rounded-lg overflow-hidden text-left relative">
        <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
</div>
          <h1 class="title-font sm:text-2xl text-lg font-medium text-gray-900 ">Hunter x</h1>
          <p class="leading-relaxed mb-3">California,USA</p>
        
         {/* feedback */}

          <div className='flex gap-5'>
            <p className='inline'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>responsive
</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>Quality
</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>Delivery
</p>
         
          </div>

  <p className='mt-5'>It was a great experience with JEKULA, They are Delivery speed was committed</p>





          <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <p>4.5./5</p> 
             <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />

  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
</div>
           
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              95% Satisfied Client
            </span>
          </div>
        </div>
      </div>

{/* Review Two */}


      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-3 pt-5 pb-24 rounded-lg overflow-hidden text-left relative">
        <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
</div>
          <h1 class="title-font sm:text-2xl text-lg font-medium text-gray-900 ">Hunter x</h1>
          <p class="leading-relaxed mb-3">California,USA</p>
        
         {/* feedback */}

          <div className='flex gap-5'>
            <p className='inline'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>responsive
</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>Quality
</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>Delivery
</p>
         
          </div>

  <p className='mt-5'>It was a great experience with JEKULA, They are Delivery speed was committed</p>


                  <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span class="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <p>4.5./5</p> 
             <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />

  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
</div>
           
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              95% Satisfied Client
            </span>
          </div>
        </div>
      </div>


 {/* Review 3 */}

      <div class="p-4 lg:w-1/3">
        <div class="h-full bg-gray-100 bg-opacity-75 px-3 pt-5 pb-24 rounded-lg overflow-hidden text-left relative">
        <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
</div>
          <h1 class="title-font sm:text-2xl text-lg font-medium text-gray-900 ">Hunter x</h1>
          <p class="leading-relaxed mb-3">California,USA</p>
        
         {/* feedback */}

          <div className='flex gap-5'>
            <p className='inline'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>responsive
</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>Quality
</p>
            <p><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
</svg>Delivery
</p>
         
          </div>

  <p className='mt-5'>It was a great experience with JEKULA, They are Delivery speed was committed</p>


  <div class="text-left mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 ">
            <span class="text-gray-400 mr-3 inline-flex items-left leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <p>4.5./5</p> 
             <div class="rating rating-sm">
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" checked />

  <input type="radio" name="rating-6" class="mask mask-star-2 bg-orange-400" />
</div>
           
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              95% Satisfied Client
            </span>
          </div>










        </div>
      </div>
    </div>
  </div>
</section>

{/* Contact us */}
<div className='flex justify-between bg-gray-900 px-5 text-white py-5'>
   <div className='w-2/5 text-left '>
   <h1 className='font-medium text-xl mb-3'>Contact Details</h1>
   <p className='font-normal text-lg'>Contact Person:</p>
   <p>Rakesh Gori (Marketing Manager)</p>
   <p className='font-normal text-lg mt-5'>Address:</p>
   <p>1615 e 15th st
Los Angeles, CA 90021</p>
   <p className='font-normal text-lg mt-5'>Call us:</p>
   <p>+12066561175</p>
   <p className='font-normal text-lg mt-5'>Get Direction</p>
   </div>
   <div className='w-3/5 text-left'>
   <p className='font-medium text-xl'>Contact Us</p>

   <div class="form-control w-full mt-5 mb-3">

  <input type="text" placeholder="Name" class="text-black input  border-white bg-none w-full " />
 
</div>
   <div class="form-control w-full mb-3 ">
 
  <input type="text" placeholder="Email" class="input input-bordered text-black w-full " />

</div>
<textarea class="textarea input-bordered w-full text-black" placeholder="Message"></textarea>
<button  className='btn mt-3 bg-color text-black hover:text-white'>Send</button>
   </div>
   </div>

   <div>
   <p className='font-bold text-3xl mt-12 text-left mb-8'>Explore Our Products</p>
  
   <div className='flex justify-between'>

  <div className='lg:w-72 sm:w-1/2 w-full  h-full overflow-hidden'> 
 
        <div class="border-2  border-gray-200 px-4 py-24 rounded-lg  relative">
        <img src='https://i.ibb.co/DWd3pdW/vehicle-motor-crankshaft-500x500.jpg' alt='ima'/>
        
        
  
        </div>
        <div className='text-left mt-8'>
        <div className='flex justify-between mt-4 '>
        <h1 className='uppercase font-medium text-lg' >Vehicle Motor Crankshaft</h1>
        <h1 className='uppercase font-bold text-right '>$7 per Piece</h1>

</div>
<div className='flex justify-between mt-4 '>
<h1 className='uppercase'>Min. & Max. Order <br/> 5-100 Piece  </h1>
<p  className='uppercase cursor-pointer font-bold '>Details</p>
</div>
        </div>
   
      </div>

  
  <div className='lg:w-72  sm:w-1/2 w-full mr-3 h-full overflow-hidden'> 
 
        <div class="border-2  border-gray-200 px-4 py-24 rounded-lg  relative">
        <img src='https://i.ibb.co/DWd3pdW/vehicle-motor-crankshaft-500x500.jpg' alt='ima'/>
        
        
  
        </div>
        <div className='text-left mt-8'>
        <div className='flex justify-between mt-4 '>
        <h1 className='uppercase font-medium text-lg' >Vehicle Motor Crankshaft</h1>
        <h1 className='uppercase font-bold text-right '>$7 per Piece</h1>

</div>
<div className='flex justify-between mt-4 '>
<h1 className='uppercase'>Min. & Max. Order <br/> 5-100 Piece  </h1>
<p  className='uppercase cursor-pointer font-bold '>Details</p>
</div>
        </div>
   
      </div>
  <div className='lg:w-72 sm:w-1/2 w-full mr-3 h-full overflow-hidden'> 
 
        <div class="border-2  border-gray-200 px-4 py-24 rounded-lg  relative">
        <img src='https://i.ibb.co/DWd3pdW/vehicle-motor-crankshaft-500x500.jpg' alt='ima'/>
        
        
  
        </div>
        <div className='text-left mt-8'>
        <div className='flex justify-between mt-4 '>
        <h1 className='uppercase font-medium text-lg' >Vehicle Motor Crankshaft</h1>
        <h1 className='uppercase font-bold text-right '>$7 per Piece</h1>

</div>
<div className='flex justify-between mt-4 '>
<h1 className='uppercase'>Min. & Max. Order <br/> 5-100 Piece  </h1>
<p  className='uppercase cursor-pointer font-bold '>Details</p>
</div>
        </div>
   
      </div>
  
     
     
  </div>



   </div>









  </div>

 

</div>
{/* Contact */}




{/* Contact */}

<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <div className='flex justify-between bg-color px-5 text-gray-800 py-5'>
   <div className='w-2/5 text-left '>
   <h1 className='font-medium text-xl mb-3'>Contact Details</h1>
   <p className='font-normal text-lg'>Contact Person:</p>
   <p>Rakesh Gori (Marketing Manager)</p>
   <p className='font-normal text-lg mt-5'>Address:</p>
   <p>1615 e 15th st
Los Angeles, CA 90021</p>
   <p className='font-normal text-lg mt-5'>Call us:</p>
   <p>+12066561175</p>
   <p className='font-normal text-lg mt-5'>Get Direction</p>
   </div>
   <div className='w-3/5 text-left'>
   <p className='font-medium text-xl'>Contact Us</p>

   <div class="form-control w-full mt-5 mb-3">

  <input type="text" placeholder="Name" class="text-black input  border-white bg-none w-full " />
 
</div>
   <div class="form-control w-full mb-3 ">
 
  <input type="text" placeholder="Email" class="input input-bordered text-black w-full " />

</div>
<textarea class="textarea input-bordered w-full text-black" placeholder="Message"></textarea>
<button  className='btn mt-3 bg-gray-900 text-white'>Send</button>
   </div>
   </div>
  </div>
</div>




            </div>
    );
};

export default NavBar;