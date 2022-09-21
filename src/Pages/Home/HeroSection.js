import React from 'react';
import { useNavigate } from 'react-router-dom';
import hero from '../../assets/bg.png'

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container  mx-auto flex flex-wrap bg-color shadow  ">
          <div class="flex flex-wrap -mx-4 mt-auto ml-3 mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6 flex-start ">
              <h1 class="title-font font-bold text-5xl mb-2 text-left uppercase leading-[4rem] text-gray-900">Truck Spare Parts Manufacturer
              </h1>
              <p className='text-left mt-2 font-normal text-xl'>We ensure 100% Quality Product that make your <br />journey easy and Sustainable</p>
              <div class="flex md:mt-4 mt-16">
                <button onClick={() => navigate('/home')} class="inline-flex text-white  bg-slate-900 border-0 py-3 px-8 focus:outline-none hover:bg-slate-500 font-medium uppercase rounded">See Our Pars</button>

              </div>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full overflow-hidden  sm:mt-0  flex-end ml-1">
            <img class=" w-full h-full -pr-2" src={hero} alt="stats" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default HeroSection;