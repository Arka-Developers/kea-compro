import { productRef } from '@/lib/script';
import Image from 'next/image';
import React from 'react';
import { headerData } from '@/lib/const';

export const ProductSection = () => {
  const { companySelfDefinition } = headerData;
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
            <div className={`mb-12 w-1/2 p-4`}>
              <div className={`overflow-hidden rounded-md shadow-md`}>
                <div className='w-full'>
                  <Image
                    src='/next.svg'
                    alt='product'
                    width={300}
                    height={300}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <h3 className={`mb-3 mt-5 text-xl font-semibold text-dark`}>
                Product 1
              </h3>
              <p className={`text-base font-medium text-secondary`}>
                {companySelfDefinition}
              </p>
            </div>
            <div className={`mb-12 w-1/2 p-4`}>
              <div className={`overflow-hidden rounded-md shadow-md`}>
                <div className='w-full'>
                  <Image
                    src='/next.svg'
                    alt='product'
                    width={300}
                    height={300}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <h3 className={`mb-3 mt-5 text-xl font-semibold text-dark`}>
                Product 2
              </h3>
              <p className={`text-base font-medium text-secondary`}>
                {companySelfDefinition}
              </p>
            </div>
            <div className={`mb-12 w-1/2 p-4`}>
              <div className={`overflow-hidden rounded-md shadow-md`}>
                <div className='w-full'>
                  <Image
                    src='/next.svg'
                    alt='product'
                    width={300}
                    height={300}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <h3 className={`mb-3 mt-5 text-xl font-semibold text-dark`}>
                Product 3
              </h3>
              <p className={`text-base font-medium text-secondary`}>
                {companySelfDefinition}
              </p>
            </div>
            <div className={`mb-12 w-1/2 p-4`}>
              <div className={`overflow-hidden rounded-md shadow-md`}>
                <div className='w-full'>
                  <Image
                    src='/next.svg'
                    alt='product'
                    width={300}
                    height={300}
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <h3 className={`mb-3 mt-5 text-xl font-semibold text-dark`}>
                Product 4
              </h3>
              <p className={`text-base font-medium text-secondary`}>
                {companySelfDefinition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
