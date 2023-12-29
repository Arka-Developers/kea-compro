import {
  navRef,
  scrollCheck,
  scrollToAbout,
  scrollToClient,
  scrollToContact,
  scrollToHome,
  scrollToProduct,
} from '@/lib/script';
import React from 'react';
import Image from 'next/image';

export const NavSection = () => {
  scrollCheck();
  return (
    <header
      ref={navRef}
      className={`absolute left-0 top-0 z-10 flex w-full items-center bg-transparent`}
    >
      <div className={`container`}>
        <div className={`relative flex items-center justify-between`}>
          <div className={`px-4`}>
            <button
              onClick={scrollToHome}
              className={`mx-8 flex py-2 text-base text-dark group-hover:text-primary`}
            >
              <Image
                src={'/keaLogo.png'}
                alt='product'
                width={50}
                height={50}
                style={{ width: '100%' }}
              />
            </button>
          </div>
          <div className={`flex items-center px-4`}>
            <button
              id={'hamburger'}
              name={`hamburger`}
              type={`button`}
              className={`absolute right-4 block lg:hidden`}
            >
              <span
                className={`hamburger-line origin-top-left transition duration-300 ease-in-out`}
              ></span>
              <span
                className={`hamburger-line transition duration-300 ease-in-out`}
              ></span>
              <span
                className={`hamburger-line origin-bottom-left transition duration-300 ease-in-out`}
              ></span>
            </button>
            <nav
              id={`nav-menu`}
              className={`absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg lg:static lg:block lg:max-w-xl lg:rounded-none lg:bg-transparent lg:shadow-none `}
            >
              <ul className={`block lg:flex`}>
                <li className={`group`}>
                  <button
                    onClick={scrollToHome}
                    className={`mx-8 flex py-2 text-base text-dark group-hover:text-primary`}
                  >
                    Home
                  </button>
                </li>
                <li className={`group`}>
                  <button
                    onClick={scrollToAbout}
                    className={`mx-8 flex py-2 text-base text-dark group-hover:text-primary`}
                  >
                    About
                  </button>
                </li>
                <li className={`group`}>
                  <button
                    onClick={scrollToProduct}
                    className={`mx-8 flex py-2 text-base text-dark group-hover:text-primary`}
                  >
                    Product
                  </button>
                </li>
                <li className={`group`}>
                  <button
                    onClick={scrollToClient}
                    className={`mx-8 flex py-2 text-base text-dark group-hover:text-primary`}
                  >
                    Client
                  </button>
                </li>
                <li className={`group`}>
                  <button
                    onClick={scrollToContact}
                    className={`mx-8 flex py-2 text-base text-dark group-hover:text-primary`}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
