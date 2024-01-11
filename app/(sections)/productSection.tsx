import { productRef } from '@/lib/script';
import Image from 'next/image';
import React from 'react';
import { headerData } from '@/lib/const';
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';

export const ProductSection = () => {
  const { companySelfDefinition, productCatalog } = headerData;
  return (
    <section
      ref={productRef}
      id={`product`}
      className={`bg-slate-100 pb-16 pt-36`}
    >
      <div className={`container`}>
        <div className={`w-full px-4`}>
          <div className={`mx-auto mb-16 max-w-xl text-center`}>
            <h4
              className={`mb-2 text-lg font-semibold text-primary md:text-xl lg:text-2xl`}
            >
              Product
            </h4>
            <h2
              className={`mb-4 text-3xl font-bold text-dark sm:text-4xl lg:text-5xl`}
            >
              Our Main Product
            </h2>
            <p className={`text-md font-medium text-secondary md:text-lg`}>
              {companySelfDefinition}
            </p>
          </div>

          {/*  item card*/}

          <div
            className={`flex w-full flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12`}
          >
            {productCatalog.map((item) => (
              <div
                key={item.productName}
                className={`mb-12 w-1/2 transform p-4 transition duration-300 hover:scale-105`}
              >
                <div
                  className={`overflow-hidden rounded-md shadow-md hover:shadow-lg`}
                >
                  <div className='w-full'>
                    <Image
                      src={item.productPicture} // Replace with the actual path to your product picture
                      alt={item.productName}
                      width={300}
                      height={300}
                      style={{ width: '100%' }}
                    />
                  </div>
                </div>
                <h3 className={`mb-3 mt-5 text-xl font-semibold text-dark`}>
                  {item.productName}
                </h3>
                <div className={`flex flex-wrap items-center gap-2`}>
                  {item.productType.map((detailItem) => (
                    <>
                      <a
                        data-tooltip-id={detailItem.productTypeName}
                        data-tooltip-place={'bottom'}
                        data-tooltip-variant='success'
                        // data-tooltip-html={detailItem.productDesc}
                      >
                        <div
                          className={`cursor-pointer rounded-md bg-gray-200 p-2 text-base font-medium text-secondary`}
                        >
                          {detailItem.productTypeName}
                        </div>
                      </a>
                      <Tooltip id={detailItem.productTypeName}>
                        <div
                          key={detailItem.productTypeName}
                          className={`mb-2`}
                        >
                          <p className={`text-base font-medium text-white`}>
                            {detailItem.productTypeName}
                          </p>
                          <p className={`text-sm text-white`}>
                            {detailItem.productDesc}
                          </p>
                          <p className={`text-sm text-white`}>
                            Volume: {detailItem.productVolume}, Weight:{' '}
                            {detailItem.productWeight}
                          </p>
                          <p className={`text-sm text-white`}>
                            Example: {detailItem.productExample}
                          </p>
                        </div>
                      </Tooltip>
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
