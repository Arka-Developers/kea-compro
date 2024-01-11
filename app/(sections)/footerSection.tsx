import { contactRef } from '@/lib/script';
import React from 'react';
import { headerData } from '@/lib/const';
import Image from 'next/image';

export const FooterSection = () => {
  const { contact, marketing } = headerData;
  const contactLength = contact.length;
  return (
    <footer ref={contactRef} id={`footer`} className={`bg-dark pb-32 pt-36`}>
      <div className={`container`}>
        <div className={`w-full p-4`}>
          <div className={`mb-16 max-w-xl px-4 text-start`}>
            <h2
              className={`mb-4  font-bold text-white sm:text-4xl lg:text-5xl`}
            >
              Contact Us
            </h2>
          </div>
          <div className={`flex flex-wrap`}>
            {contact.map((item) => (
              <>
                <div className={`mb-8 w-full px-4 lg:w-1/${contactLength}`}>
                  <h4
                    className={`mb-3 text-2xl font-bold uppercase text-primary`}
                  >
                    {item.contactName}
                  </h4>
                  <p
                    className={`mb-4 max-w-xl text-base font-medium text-secondary lg:text-lg`}
                  >
                    {item.contactAddress}
                  </p>{' '}
                  <p
                    className={`mb-4 max-w-xl text-base font-medium text-secondary lg:text-lg`}
                  >
                    {item.contactPhone}
                  </p>
                </div>
              </>
            ))}
          </div>
          <div className={`mb-16 max-w-xl px-4 text-start`}>
            <Image
              src={'/keaLogo.png'}
              alt='product'
              width={100}
              height={100}
              // style={{ width: '100%' }}
            />
            {marketing.map((item) => (
              <>
                <h4
                  className={`mb-3 text-2xl font-bold uppercase text-primary`}
                >
                  Marketing Team {item.marketingPlace}
                </h4>
                <p
                  className={`mb-4 max-w-xl text-base font-medium text-secondary lg:text-lg`}
                >
                  {item.marketingNumber}
                </p>
                <p
                  className={`mb-4 max-w-xl text-base font-medium text-secondary lg:text-lg`}
                >
                  {item.marketingEmail}
                </p>
              </>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
