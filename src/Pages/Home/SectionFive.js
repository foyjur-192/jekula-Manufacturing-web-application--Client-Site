import React from 'react';

const SectionFive = () => {
    return (
        <div>
             <section class="text-gray-600 body-font mb-5">
    
    <div class="container px-5 py-16 mx-auto">
    <h1 className='font-medium text-5xl text-Center mt-5 p-2  mb-16 uppercase' >Review & Rating</h1>
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
      </div>
    </div>
  </section>
        </div>
    );
};

export default SectionFive;