import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


const Offer = () => {
  const [inventories, setInventories] = useState([]);


  useEffect( ()=>{
    fetch('/product.json')
    .then(res => res.json())
    .then(data => setInventories(data));
}, [])

const [count, setCount] = useState()
const [total, setTotal] = useState([])

const handleClick = event => {
  event.preventDefault();
  const stock = parseInt(event.target.stock.value);
  if (stock < 5) {
    toast('Minimum Order 5 piece');
      return;
  }else if (stock > 100 ) {
    toast('Maximum Order 100 piece');
      return;
  }
  const previousValue = parseInt(count.price);
  console.log('previous', previousValue);
  const totalQuantity = stock * previousValue;
  console.log(totalQuantity);
 const newCart = [...total, totalQuantity]
 setTotal(newCart);
  

}
const [popUpContents, setPopUpContent] = useState([]);
const changeContent = (inventories) => {
    setPopUpContent([inventories])
};
    return (
        <div>
            <section class=" body-font">
  <div class="container px-5 py-6 mx-auto light-color">
    <div class="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
      <h1 class="flex-grow sm:pr-16 text-4xl font-light title-font text-white uppercase">500 unit order  <span  className='font-bold'>10% OFF</span> </h1>
      <label for="my-modal-2" class="flex-shrink-0 text-black font-medium bg-color border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 hover:text-black rounded text-lg mt-10 sm:mt-0">ORDER NOW</label>
    </div>
  </div>




<input type="checkbox" id="my-modal-2" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-2" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  <h1 className='font-normal uppercase text-3xl  bg-color text-black p-5'>10% Off Last Chance</h1> 
  <section class="text-gray-600 body-font mb-24">
  <div class=" px-5 py-16 mx-auto">
    <div class="flex flex-col text-center w-full mb-8">
    <h1 class="text-gray-900 text-4xl title-font font-bold uppercase mb-8">Offer Products</h1>

    </div>
    <div class="flex flex-wrap -m-4 text-center">
      {/* product One */}
    

{
  inventories.slice(0, 3).map(inventory => 
    <>
      <div class=" mr-7  md:w-72 sm:w-1/2 w-full block overflow-hidden ">
    <div class="border-2  border-gray-200 sm:mb-5 px-4  min-h-[432px]  max-h-[432px] flex items-stretch   relative rounded-lg ">
     <p className='text-4xl font-light absolute mt-5'> <span className='text-4xl font-bold  '>10%</span> OFF</p>
      <div className='self-center'>
      <img  src={inventory.img} alt='ima'/>
      </div>
  
    </div>
  
    <div className='text-left'>
        <div className='flex justify-between mt-4 '>
        <h1 className='uppercase font-medium text-lg' >{inventory.product}</h1>
        <h1 className='uppercase font-bold text-right '>${inventory.price}Per Piece</h1>
</div>
<div className='flex justify-between mt-4  '>
<h1 className='uppercase font-normal  '>{inventory.order} </h1>
<label for="my-modal-3" onClick={() => changeContent(inventory)}   class="cursor-pointer px-3 py-1 uppercase font-medium btn bg-color border-none text-black hover:text-white ">Details</label>
</div>
        </div>

        </div>
    </>
  
  
  )
}
       
     
       



<input type="checkbox" id="my-modal-3" class="modal-toggle" />
<div class="modal">
  <div class="modal-box w-11/12 max-w-5xl">
  <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

  {
popUpContents.map(inventory =>
  <>
   <div className='flex justify-between'>
   <div className='w-2/5  mr-5'>
       <img src={inventory.img} alt='ima'/>
   </div>
   <div className='w-3/5 h-16 text-left pl-4'>
   <h1 className='text-2xl '><span className='font-medium'>Product Name:</span> {inventory.product}</h1>
   <p className='text-xl mt-2'><span className='font-bold text-lg mr-3'> Price:</span>{inventory.price} Per Piece</p>
   <p className='text-lg font-bold mt-5 mr-3'>Product Details</p>
   <p><span className='font-medium mr-3'>Minimum Order Quantity:</span> {inventory.minimum}</p>
   <p><span className='font-medium mr-3'>Brand:</span>{inventory.brand} </p>
   <p><span className='font-medium mr-3'>Model:</span> {inventory.model}</p>
   <p><span className='font-medium mr-3'>Material:</span> {inventory.material}</p>
   <form className='mt-5' onSubmit={handleClick}>
    <div className='flex mb-8'>
  
                    <input type="number" name='stock' placeholder="Order Quantity" class="input input-bordered input-primary w-full max-w-xs" /><br />
                    <button className='btn bg-color px-8 ml-2 border-none text-black hover:text-white'  onClick={() => setCount(inventory)}>Get Total</button>
                    </div>   
                </form>
               

 
  
      
        <p className='font-medium text-xl'>Total Price: {total}</p>
   
        
     
              
   <div>
   </div>





   </div>

   

    </div>



    <div className='text-left mt-32'> <p className='font-medium text-lg'>Description</p>
   <p>{inventory.description}</p>
   <p className='font-medium text-lg mt-2'>Features</p>
   <p>
   <div class="badge badge-xs mr-3 bg-color"></div>High efficiency<br/>
   <div class="badge badge-xs mr-3 bg-color"></div>Optimum functionality<br/>
   <div class="badge badge-xs mr-3 bg-color"></div>Easy maintenance<br/>
   <div class="badge badge-xs mr-3 bg-color"></div>Rigid construction<br/>
   <div class="badge badge-xs mr-3 bg-color"></div>High pumping efficiency</p>
   </div>

   </>
  )}

    



   <div>
   <p className='font-bold text-3xl mt-12 text-left mb-8'>Other Products</p>
  




   </div>
  


  </div>
  
</div>

 {/* product Two */}

    </div>
  </div>
</section>
  </div>
</div>
</section>
<ToastContainer />
        </div>
    );
};

export default Offer;