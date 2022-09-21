import React, { useEffect, useState, Component } from 'react'
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import auth from '../../firebase.init';





const SectionThree = () => {



  // const { id } =  useParams();
  // const [inventories] = useDetails(id);
  const [user, loading, error] = useAuthState(auth);
  const [inventories, setInventories] = useState([]);
  const [count, setCount] = useState();
  const [total, setTotal] = useState([]);
  const [amount, setAmount] = useState([]);



  useEffect(() => {
    fetch('/product.json')
      .then(res => res.json())
      .then(data => setInventories(data));
  }, [])
  //Report PopUp
  const [popUpContents, setPopUpContent] = useState([]);
  const changeContent = (inventories) => {
    setPopUpContent([inventories])
  };


  //Event Handler

  const handleClick = event => {
    event.preventDefault();
    const stock = parseInt(event.target.stock.value);
    const newAmount = [...amount, stock]
    setAmount(newAmount);

    if (stock < 5) {
      toast('Minimum Order 5 piece');
      return;
    } else if (stock > 100) {
      toast('Maximum Order 100 piece');
      return;
    }
    const previousValue = parseInt(count.price);
    console.log('previous', previousValue);
    const totalQuantity = stock * previousValue;
    // console.log(totalQuantity, stock);

    const newCart = [...total, totalQuantity]
    setTotal(newCart);


  }

  // Handle Order

  const handleOrder = event => {
    event.preventDefault();
    const name = (event.target.name.value);
    const total = parseInt(event.target.total.value);
    const model = (event.target.model.value);
    const quantity = parseInt(event.target.quantity.value);
    const user = (event.target.email.value);
    const order = {
      name,
      total,
      quantity,
      model,
      user
    }


    fetch('http://localhost:5000/order', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(order)

    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Order Completed Successfully`)
        }
      })

  }


  // Saved order

  const handleSavedOrder = event => {
    event.preventDefault();
    const name = (event.target.name.value);
    const total = parseInt(event.target.total.value);
    const model = (event.target.model.value);
    const quantity = parseInt(event.target.quantity.value);
    const user = (event.target.email.value);

    const saved = {
      name,
      total,
      quantity,
      model,
      user
    }
    console.log(saved)

    fetch('http://localhost:5000/saved', {

      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(saved)

    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Successfully Added to Cart`)
        }
      })

  }



  // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  //   initialSlide: 0,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 280,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //         initialSlide: 2
  //       }
  //     },
  //   ]
  // };
  return (
    <div>
      <section class="text-gray-600 body-font mb-12">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-gray-900 text-5xl title-font font-medium uppercase mb-4">Our Product</h1>

          </div>
          <div class="flex flex-wrap -m-4 text-center">
            {/* product One */}


            {
              inventories.map(inventory =>
                <>

                  <div class="p-4 md:w-1/4 sm:w-1/2 w-full block overflow-hidden  mb-12">
                    <div class="border-2  border-gray-200 px-4  min-h-[432px]  max-h-[432px] flex items-stretch   relative rounded-lg ">
                      <div className='self-center'>
                        <img src={inventory.img} alt='ima' />
                      </div>

                    </div>

                    <div className='text-left'>
                      <div className='flex justify-between mt-4 items-stretch'>
                        <h1 className='uppercase font-medium text-lg self-center' >{inventory.product}</h1>
                        <h1 className='uppercase font-bold self-center '>${inventory.price}Per Piece</h1>
                      </div>
                      <div className='flex justify-between mt-4 items-stretch '>
                        <h1 className='uppercase self-center'>{inventory.order} </h1>
                        <label for="my-modal-1" onClick={() => changeContent(inventory)} class="cursor-pointer self-center uppercase font-medium btn bg-color border-none text-black hover:text-white ">Details</label>
                      </div>
                    </div>

                  </div>

                </>


              )
            }





            {/* <ReactImageMagnify {...{
 
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: 'https://i.ibb.co/1R5S3Y0/engine-oil-pump-cover-500x500.jpg'
    },
    
    largeImage: {
        src:  'https://i.ibb.co/1R5S3Y0/engine-oil-pump-cover-500x500.jpg',
        width: 500,
        height: 375,
        
        
    }
}} /> */}
            {/* Popup */}





            <input type="checkbox" id="my-modal-1" class="modal-toggle" />
            <div class="modal">
              <div class="modal-box w-11/12 max-w-5xl">
                <label for="my-modal-1" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                {
                  popUpContents.map(inventory =>
                    <>
                      <div className='flex justify-between'>
                        <div className='w-2/5  mr-5'>
                          <img src={inventory.img} alt='ima' />
                        </div>
                        <div className='w-3/5 h-16 text-left pl-4'>
                          <h1 className='text-2xl '><span className='font-medium'>Product Name:</span> {inventory.product}</h1>
                          <p className='text-xl mt-2'><span className='font-bold text-lg mr-3'> Price:</span>${inventory.price} Per Piece</p>
                          <p className='text-lg font-bold mt-5 mr-3'>Product Details</p>
                          <p><span className='font-medium mr-3'>Minimum Order Quantity:</span> {inventory.minimum}</p>
                          <p><span className='font-medium mr-3'>Brand:</span>{inventory.brand} </p>
                          <p><span className='font-medium mr-3'>Model:</span> {inventory.model}</p>
                          <p><span className='font-medium mr-3'>Material:</span> {inventory.material}</p>
                          <form className='mt-5' onSubmit={handleClick}>
                            <div className='flex mb-8'>

                              <input type="number" name='stock' placeholder="Order Quantity" class="input input-bordered input-primary w-full max-w-xs" /><br />
                              <button className='btn bg-color px-8 ml-2 border-none text-black hover:text-white' onClick={() => setCount(inventory)}>Get Total</button>
                            </div>
                          </form>



                          <>
                            <p className='font-medium text-xl mb-5'>Total Price: ${total}</p>
                            <div className='flex items-center' >
                              <div>
                                <label for="my-modal-10" class="btn mr-2 bg-color border-none text-black">Continue Order</label>
                              </div>

                              <div className='-mt-24'>

                                <form className='' onSubmit={handleSavedOrder}>

                                  <input type="hidden" name='name' value={inventory.product} placeholder="Order Quantity" class="input  input-gray-300 w-full max-w-xs" /><br />
                                  <input type="hidden" name='model' value={inventory.model} placeholder="Order Quantity" class="input   input-bordered input-gray-300 w-full max-w-xs" /><br />
                                  <input type="hidden" name='quantity' value={amount} placeholder="Order Quantity" class="input  input-bordered input-gray-300 w-full max-w-xs" /><br />
                                  <input type="hidden" name='total' value={total} placeholder="Order Quantity" class=" input input-bordered input-gray-300 w-full max-w-xs" /><br />
                                  <input type="hidden" name='email' value={user?.email} placeholder="Order Quantity" class=" input input-bordered input-gray-300 w-full max-w-xs" /><br />
                                  <button class="btn value ">Saved to Cart</button>

                                </form>
                              </div>






                            </div>

                            {/* modal */}
                            <input type="checkbox" id="my-modal-10" class="modal-toggle" />
                            <div class="modal modal-bottom sm:modal-middle">
                              <div class="modal-box">
                                <label for="my-modal-10" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h1 className='font-medium text-2xl'>Order </h1>
                                <form className='mt-5' onSubmit={handleOrder}>
                                  <div className=''>
                                    <div class="form-control w-full text-black">
                                      <label class="label">
                                        <span class="label-text text-gray-600">Product Name</span>
                                      </label>
                                      <input type="text" name='name' value={inventory.product}   class="input secondary-color border-gray-400 input-bordered w-full " />
                                    </div>
                                    <div class="form-control w-full  text-black">
                                      <label class="label">
                                        <span class="label-text text-gray-600">Product Quantity(Piece)</span>
                                      </label>
                                      <input type="text" name='quantity' value={amount}  class="input text-gray-600 secondary-color border-gray-400 input-bordered w-full " />
                                    </div>
                                    <div class="form-control w-full text-black">
                                      <label class="label">
                                        <span class="label-text text-gray-600">Total Bill($)</span>
                                      </label>
                                      <input type="text" name='total' value={total}   class="input secondary-color border-gray-400 input-bordered w-full " />
                                    </div>
                                    <div class="form-control w-full text-black">
                                      <label class="label">
                                        <span class="label-text text-gray-600">Card Number</span>
                                      </label>
                                      <input type="text" name='card' placeholder='2021 2543 2547 2134'  class="input secondary-color border-gray-400 input-bordered w-full " />
                                    </div>
                                    <div class="form-control w-full  text-black">
                                      <label class="label">
                                        <span class="label-text text-gray-600">Card Pin</span>
                                      </label>
                                      <input type="text" name='pin' placeholder='Pin'   class="input secondary-color border-gray-400 input-bordered w-full " />
                                    </div>
                                    <div class="form-control w-full  text-black">
                                      <label class="label">
                                        <span class="label-text text-gray-600">Expire Date</span>
                                      </label>
                                      <input type="text" name='password' placeholder='12/22'  class="input secondary-color border-gray-400 input-bordered w-full " />
                                    </div>
                                    <div class="form-control w-full  text-black">
                                      <input type="hidden" name='email' value={user?.email} placeholder='Card Password'  class="input secondary-color border-gray-400 input-bordered w-full " />
                                    </div>

                                    <button className='btn bg-color px-8 mt-6  border-none text-black hover:text-white'>Completed Order</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </>


                          <div>
                          </div>





                        </div>



                      </div>



                      <div className='text-left  sm-64'> <p className='font-medium text-lg'>Description</p>
                        <p>{inventory.description}</p>
                        <p className='font-medium text-lg mt-2'>Features</p>
                        <p>
                          <div class="badge badge-xs mr-3 bg-color"></div>High efficiency<br />
                          <div class="badge badge-xs mr-3 bg-color"></div>Optimum functionality<br />
                          <div class="badge badge-xs mr-3 bg-color"></div>Easy maintenance<br />
                          <div class="badge badge-xs mr-3 bg-color"></div>Rigid construction<br />
                          <div class="badge badge-xs mr-3 bg-color"></div>High pumping efficiency</p>
                      </div>

                    </>
                  )}


                {/* Third Section */}


                <div>
                  <p className='font-bold text-3xl mt-12 text-left mb-16'>Other Products</p>


                  <div class="flex justify-between flex-wrap -m-4 text-center absolute">


                    {
                      inventories.slice(0, 6).map(inventory =>

                        <>


                          <div class="mr-6  ml-4 md:w-72 sm:w-1/2 w-full block overflow-hidden  mb-12">

                            <div class="border-2  border-gray-200 px-4  min-h-[432px]  max-h-[432px] flex items-stretch   relative rounded-lg ">
                              <div className='self-center'>
                                <img src={inventory.img} alt='ima' />
                              </div>
                            </div>

                            <div className='text-left'>
                              <div className='flex justify-between mt-4 items-stretch'>
                                <h1 className='uppercase font-medium text-lg self-center' >{inventory.product}</h1>
                                <h1 className='uppercase font-bold self-center '>${inventory.price}Per Piece</h1>
                              </div>
                              <div className='flex justify-between mt-4 items-stretch '>
                                <h1 className='uppercase self-center'>{inventory.order} </h1>
                                <label for="my-modal-1" onClick={() => changeContent(inventory)} class="cursor-pointer self-center uppercase font-medium btn bg-color border-none text-black hover:text-white ">Details</label>
                              </div>
                            </div>

                          </div>


                        </>

                      )
                    }


                  </div>

                </div>
              </div>
            </div>

            {/* product Two */}

          </div>
        </div>
      </section>





      <ToastContainer />
    </div>
  );
};

export default SectionThree;

