import React, { useEffect, useState } from 'react';

const AllProduct = () => {
    const [inventories, setInventories] = useState([]);
  
  
    useEffect ( ()=>{
    fetch('/product.json')
    .then(res => res.json())
    .then(data => setInventories(data));
}, [])
    return (
        <div>
            <div>
     <p className='font-bold text-3xl mt-12 text-left mb-16'>Other Products</p>
  
 
   <div class="flex justify-between flex-wrap -m-4 text-center absolute">  

 
   {
  inventories.slice(0,6).map(inventory => 
  
    <>
      

    <div  class="mr-6  ml-4 md:w-72 sm:w-1/2 w-full block overflow-hidden  mb-12">
    
    <div class="border-2  border-gray-200 px-4  min-h-[432px]  max-h-[432px] flex items-stretch   relative rounded-lg ">
      <div className='self-center'>
      <img  src={inventory.img} alt='ima'/>
      </div>
    </div>
  
    <div className='text-left'>
        <div className='flex justify-between mt-4 items-stretch'>
        <h1 className='uppercase font-medium text-lg self-center' >{inventory.product}</h1>
        <h1 className='uppercase font-bold self-center '>${inventory.price}Per Piece</h1>
</div>
<div className='flex justify-between mt-4 items-stretch '>
<h1 className='uppercase self-center'>{inventory.order} </h1>
<label for="my-modal-1"   onClick={() => changeContent(inventory)} class="cursor-pointer self-center uppercase font-medium btn bg-color border-none text-black hover:text-white ">Details</label>
</div>
        </div>
       
        </div> 
     
       
    </>
 
  )
}

 
</div>

   </div>
  </div>

    );
};

export default AllProduct;