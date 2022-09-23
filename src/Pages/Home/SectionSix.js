import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const SectionSix = () => {

   const [user] = useAuthState(auth);



   const handleEmail = (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const email = event.target.email.value;
      const message = event.target.message.value;

      const contact = {
         name,
         email,
         message

      }

      fetch('https://jekula-manufacturing-server-production.up.railway.app/contact', {

         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(contact)

      })
         .then(res => res.json())
         .then(data => {
            if (data.success) {
               toast(`Message Successfully Send`)
            }
         })



   }




   return (
      <div className='container mx-auto'>
         <div className='flex justify-between bg-color shadow px-5 text-black py-12'>
            <div className='w-2/5 text-left '>
               <h1 className='font-medium text-2xl mb-3 text-gray-900'>Contact Details</h1>
               <div className='flex  items-stretch'>
                  <img src='https://i.ibb.co/jVj9Xyr/customer-service-2.png' className='w-8 h-8  mb-2 self-center ' />
                  <div className='ml-2'>
                     <p className='font-medium text-lg text-gray-700'>Contact Person:</p>
                     <p className='font-normal text-normal'>Agkar Sakarna (Marketing Manager)</p>
                  </div>
               </div>
               <div className='flex  items-stretch'>
                  <img src='https://i.ibb.co/8BNqkc0/pin-1.png' className='w-8 h-8   self-center ' />
                  <div className='ml-2'>
                     <p className='font-medium text-lg text-gray-700 mt-5'>Address:</p>
                     <p className='font-normal text-normal'>1615 e 15th st
                        Los Angeles, CA 90021</p>
                  </div>
               </div>

               <div className='flex  items-stretch'>
                  <img src='https://i.ibb.co/jfsrCdg/smartphone-1-1.png' className='w-8 h-8  self-center ' />
                  <div className='ml-2'>
                     <p className='font-medium text-lg mt-5 text-gray-700'>Call us:</p>
                     <p className='font-normal text-normal'>+12066561175</p>
                  </div>
               </div>
            </div>


            <div className='w-3/5 text-left'>
               <p className='font-medium text-2xl text-gray-900'>Contact Us</p>
               <form onSubmit={handleEmail}>
                  <div class="form-control w-full mt-5 mb-3">

                     <input type="text" name='name' value={user?.displayName} placeholder="Name" class="text-black input  border-white bg-none w-full " />

                  </div>
                  <div class="form-control w-full mb-3 ">

                     <input type="text" name='email' value={user?.email} placeholder="Email" class="input input-bordered text-black w-full " />

                  </div>
                  <textarea name='message' class="textarea input-bordered w-full text-black" placeholder="Message"></textarea>
                  <button className='btn mt-3 bg-gray-900 text-white '>Send</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default SectionSix;