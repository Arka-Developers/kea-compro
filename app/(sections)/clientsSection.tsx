import { clientRef } from '@/lib/script';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { headerData } from '@/lib/const';

export const ClientsSection = () => {
  const { companySelfDefinition } = headerData;
  return (
    <section
      ref={clientRef}
      id={`client`}
      className={`bg-blue-900 pb-32 pt-36`}
    >
      <div className={`container`}>
        <div className={`w-full px-4`}>
          <div className={`mx-auto mb-16 max-w-xl text-center`}>
            <h4 className={`mb-2 text-lg font-semibold text-primary`}>
              Clients
            </h4>
            <h2
              className={`mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl`}
            >
              Our Happy Clients
            </h2>
            <p className={`text-md font-medium text-dark md:text-lg`}>
              {companySelfDefinition}
            </p>
          </div>
        </div>

        <div className={`w-full px-4`}>
          <div className={`flex flex-wrap items-center justify-center`}>
            <Link
              href={`#`}
              className={`mx-4 max-w-[120px] py-4 opacity-60 grayscale transition duration-500 hover:opacity-100 hover:grayscale-0`}
            >
              <div className='w-full'>
                <Image
                  src='/next.svg'
                  alt='product'
                  width={300}
                  height={300}
                  style={{ width: '100%' }}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
