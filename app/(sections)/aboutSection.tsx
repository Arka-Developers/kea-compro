import { aboutRef } from '@/lib/script';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import React from 'react';
import { headerData } from '@/lib/const';

export const AboutSection = () => {
  const { companyHistory, vision, mission, goals, companyName } = headerData;

  return (
    <section ref={aboutRef} id={`about`} className={`bg-primary pb-32 pt-36`}>
      <div className={`container`}>
        <div className={`flex flex-wrap`}>
          <div className={`mb-10 w-full px-4 lg:w-1/2`}>
            <h4
              className={`mb-3 font-bold uppercase text-black md:text-xl lg:text-4xl`}
            >`
              About Us
            </h4>
            <h2
              className={`mb-5 max-w-full text-3xl font-bold text-white lg:text-2xl`}
            >
              {companyName}
            </h2>
            <p
              className={`max-w-xl text-base font-medium text-secondary lg:text-lg`}
              dangerouslySetInnerHTML={{
                __html: companyHistory.replace(/\n/g, '<br>'),
              }}
            />
          </div>
          <div className={`w-full px-4 lg:w-1/2`}>
            <h4
              className={`mb-4 text-2xl font-semibold text-white lg:pt-10 lg:text-3xl`}
            >
              Vision
            </h4>
            <p
              className={`mb-6 max-w-xl text-base font-medium text-black lg:text-lg`}
            >
              {vision}
            </p>
            <h4
              className={`mb-4 text-2xl font-semibold text-white lg:text-3xl`}
            >
              Mission
            </h4>
            <p
              className={`mb-6 max-w-xl text-base font-medium text-secondary lg:text-lg`}
            >
              {mission}
            </p>
            <h4
              className={`mb-4 text-2xl font-semibold text-white lg:text-3xl`}
            >
              Goals
            </h4>
            <ul className={`mb-4 list-disc`}>
              {goals.map((goal, index) => (
                <li
                  key={index}
                  className={`mb-2 max-w-xl font-medium text-black text-secondary lg:text-lg`}
                >
                  {goal.goalsItem}
                </li>
              ))}
            </ul>
            <div className={`flex items-center`}>
              <Link
                href={`#`}
                className={`text-slate-300 mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-primary hover:bg-primary hover:text-white`}
              >
                <Instagram />
              </Link>
              <Link
                href={`#`}
                className={`text-slate-300 mr-3 flex h-9 w-9 items-center justify-center rounded-full border hover:border-primary hover:bg-primary hover:text-white`}
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
