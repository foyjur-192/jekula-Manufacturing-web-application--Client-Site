import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="text-white body-font">
  <div class="container px-5 py-24 mx-auto bg-slate-900 shadow ">
    <div class="flex flex-wrap md:text-left text-center order-first">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white uppercase tracking-widest text-sm mb-3">Wholesale Fashion Couture</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">1615 e 15th st</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Los Angeles, CA 90021</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Phone (213) 805-5554</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Email sales@jsxsneaker.com</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">INFORMATION</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">Size Guide</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Contact Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">About Us</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Returns Policy</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Shipping</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">Terms of Service</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white hover:text-gray-800">    SHOP</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">    NEW ARRIVALS</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">    PLUS SIZE NEW ARRIVALS</a>
          </li>
          <li>
            <a class="text-white hover:text-gray-800">    LAST CHANCE (50% OFF)</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium uppercase text-white tracking-widest text-sm mb-3">NEWSLETTER</h2>
        <p>Enter your email to receive WEEKLY deals and Priority on NEW ARRIVALS.</p>
        <div class="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start mt-4">
          <div class="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label for="footer-field" class="leading-7 text-sm text-white">Receive 20% off your first order.</label>
            <input type="text" id="footer-field" name="footer-field" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
          <button class="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-color border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">SUBSCRIBE</button>
        </div>
    
      </div>
    </div>
  </div>
  
</footer>
        </div>
    );
};

export default Footer;