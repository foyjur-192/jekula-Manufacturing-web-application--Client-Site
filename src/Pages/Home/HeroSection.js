import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <section class=" body-font">
  <div class="container px-5 py-16 mx-auto flex flex-wrap bg-color">
    <div class="flex flex-wrap -mx-4 mt-auto ml-3 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
      <div class="w-full sm:p-4 px-4 mb-6 flex-start ">
        <h1 class="title-font font-bold text-5xl mb-2 text-left uppercase leading-[4rem] text-gray-900">Truck Spare Parts Manufacturer
</h1>
<p className='text-left mt-2 font-normal text-xl'>We ensure 100% Quality Product that make your <br/>journey easy and Sustainable</p>
<div class="flex md:mt-4 mt-16">
        <button class="inline-flex text-white  bg-slate-900 border-0 py-3 px-8 focus:outline-none hover:bg-slate-500 font-medium uppercase rounded">See Our Pars</button>
        
      </div>
      </div>
    </div>
    <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
      <img class="object-cover object-center w-full h-full" src="https://i.ibb.co/FBWQgLz/toppng-com-logistics-truck-png-636x408.png" alt="stats"/>
    </div>
  </div>
</section>
        </div>
    );
};

export default HeroSection;