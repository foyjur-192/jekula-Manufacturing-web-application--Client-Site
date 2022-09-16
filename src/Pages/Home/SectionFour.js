import React from 'react';

const SectionFour = () => {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container  mx-auto flex flex-wrap bg-color shadow  ">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10 p-16 ">
            <div class="w-full sm:p-4 px-4 mb-6 text-left ">
              <h1 class="text-gray-900 text-5xl title-font font-medium mb-4 uppercase">About Our Company</h1>
              <p className='mt-4 text-gray-700 font-normal text-normal'>JEKULA is a highly prominent manufacturer, Importer, and exporter, engrossed in offering a wide variety of Cylinder Liner, Piston Ring, Gudgeon Ring, Con Rod Bearing, Bush Bearing, Thrust Washer, etc. Read More</p>

              <div className='flex justify-between mt-12 grid grid-cols-3 gap-3'>
                <div className=''>
                  <h1 className='font-medium text-base'><img src='https://i.ibb.co/r0Qwx6y/business-1.png' className='w-8 h-8  mb-2' />Nature of Business</h1>
                  <p>Exporter and Manufacturer</p>
                </div>
                <div>
                  <h1 className='font-medium text-base'><img src='https://i.ibb.co/NY7yFDt/organization.png' className='w-8 h-8 mb-2' />Year of Establishment</h1>
                  <p>2000</p>
                </div>
                <div>
                  <h1 className='font-medium text-base'><img src='https://i.ibb.co/5Wb2bVJ/legal-document-1.png' className='w-8 h-8 mb-2' />  Legal Status of Firm</h1>
                  <p>Individual - Proprietor</p>
                </div>
              </div>
              <div className='flex justify-between mt-4 grid grid-cols-3 gap-3'>
                <div className=''>
                  <h1 className='font-medium text-base'><img src='https://i.ibb.co/6YrDH7v/statistics-1.png' className='w-8 h-8 mb-2' />Annual Turnover</h1>
                  <p>S 2-5 Million</p>
                </div>
                <div>
                  <h1 className='font-medium text-base '><img src='https://i.ibb.co/0C4zW2d/world-1.png' className='w-8 h-8  mb-2' />Import Export Code (IEC)</h1>
                  <p>ADRPM*****</p>
                </div>
                <div>

                  <h1 className='font-medium text-base'><img src='https://i.ibb.co/P4GmDWB/tax-1.png' className='w-8 h-8 mb-2' />Tax Id</h1>
                  <p>27ADRPM2116M1Z6</p>
                </div>

              </div>
              <label for="my-modal-5" class="btn mt-7 mr-12 cursor-pointer">LEARN MORE</label>
            </div>


          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden  sm:mt-0 ml-8 flex-end">
            <img class="object-cover object-center w-full h-full" src="https://5.imimg.com/data5/FI/PG/IS/SELLER-42716818/supply-of-hydraulic-pumps-and-spare-parts-500x500.jpg" alt="stats" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default SectionFour;