import { aboutRef } from '@/lib/script';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import React from 'react';
import { headerData } from '@/lib/const';

export const AboutSection = () => {
  const { companyHistory } = headerData;
  return (
    <section ref={aboutRef} id={`about`} className={`pb-32 pt-36`}>
      <div className={`container`}>
        <div className={`flex flex-wrap`}>
          <div className={`mb-10 w-full px-4 lg:w-1/2`}>
            <h4 className={`mb-3 font-bold uppercase text-primary`}>
              About Us
            </h4>
            <h2
              className={`mb-5 max-w-md text-3xl font-bold text-dark lg:text-5xl`}
            >
              Its Start with...
            </h2>
            <p
              className={`max-w-xl text-base font-medium text-secondary lg:text-lg`}
            >
              {companyHistory}
            </p>
          </div>
          <div className={`w-full px-4 lg:w-1/2`}>
            <h4
              className={`mb-4 text-2xl font-semibold text-dark lg:pt-10 lg:text-3xl`}
            >
              Lets Connect!
            </h4>
            <p
              className={`mb-6 max-w-xl text-base font-medium text-secondary lg:text-lg`}
            >
              {companyHistory}
            </p>
            <div className={`flex items-center`}>
              <Link
                href={`#`}
                className={`mr-3 flex h-9 w-9 items-center justify-center rounded-full border text-slate-300 hover:border-primary hover:bg-primary hover:text-white`}
              >
                <Instagram />
              </Link>
              <Link
                href={`#`}
                className={`mr-3 flex h-9 w-9 items-center justify-center rounded-full border text-slate-300 hover:border-primary hover:bg-primary hover:text-white`}
              >
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
