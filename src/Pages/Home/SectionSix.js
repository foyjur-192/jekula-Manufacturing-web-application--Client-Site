import React from 'react';

const SectionSix = () => {
    return (
        <div className='container mx-auto'>
           <div className='flex justify-between bg-color px-5 text-black py-12'>
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
<button  className='btn mt-3 bg-gray-900 text-white '>Send</button>
   </div>
   </div>
        </div>
    );
};

export default SectionSix;