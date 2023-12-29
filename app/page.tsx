'use client';
import { headerData } from '@/lib/const';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';
import React from 'react';
import Image from 'next/image';

export default function Home() {
  const { companyName, companyCaption, companySelfDefinition, companyHistory } =
    headerData;
  const words = companyCaption.split(' ');
  const extractedText = words.slice(1).join(' ');
  // const navRef = useRef<HTMLDivElement>(null);
  // const headerRef = useRef<HTMLDivElement>(null);
  // const aboutRef = useRef<HTMLDivElement>(null);
  // const productRef = useRef<HTMLDivElement>(null);
  // const clientRef = useRef<HTMLDivElement>(null);
  // const contactRef = useRef<HTMLDivElement>(null);
  const navRef = React.createRef<HTMLDivElement>();
  const headerRef = React.createRef<HTMLDivElement>();
  const aboutRef = React.createRef<HTMLDivElement>();
  const productRef = React.createRef<HTMLDivElement>();
  const clientRef = React.createRef<HTMLDivElement>();
  const contactRef = React.createRef<HTMLDivElement>();

  const scrollToHome = () => {
    if (headerRef.current) {
      headerRef.current.scrollIntoView();
    }
  };
  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView();
    }
  };
  const scrollToProduct = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView();
    }
  };
  const scrollToClient = () => {
    if (clientRef.current) {
      clientRef.current.scrollIntoView();
    }
  };
  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView();
    }
  };
  const scrollCheck = () => {
    if (typeof window !== 'undefined') {
      window.onscroll = function () {
        const header = navRef.current;
        const fixedNav = header ? header.offsetTop : 0; // Use a default value, like 0
        if (window.scrollY > fixedNav) {
          header?.classList.add('navbar-fixed');
        } else {
          header?.classList.remove('navbar-fixed');
        }
      };
    }
  };

  scrollCheck();
  //
  // useEffect(() => {
  //   // Make sure to check if document is defined before using it
  //   const hamburger = document.querySelector(`#hamburger`);
  //   const navMenu = document.querySelector(`#nav-menu`);
  //
  //   if (hamburger) {
  //     hamburger.addEventListener('click', function () {
  //       hamburger.classList.toggle(`hamburger-active`);
  //       navMenu.classList.toggle(`hidden`);
  //       console.log(`clicked`);
  //     });
  //   }
  //
  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     hamburger.removeEventListener('click', function () {
  //       hamburger.classList.toggle(`hamburger-active`);
  //     });
  //   };
  // }, []);
  return (
    <>
      {/*header Start */}
      <header
        ref={navRef}
        className={`absolute left-0 top-0 z-10 flex w-full items-center bg-transparent`}
      >
        <div className={`container`}>
          <div className={`relative flex items-center justify-between`}>
            <div className={`px-4`}>
              <Link
                href={`#home`}
                className={`block py-6 text-lg font-bold text-primary`}
              >
                logo KEA
              </Link>
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
      {/*header Finish */}

      {/* section hero start */}
      <section ref={headerRef} id={`home`} className={`pt-36`}>
        <div className={`container`}>
          <div className={`flex flex-wrap`}>
            <div className={`w-full self-center px-4 lg:w-1/2`}>
              <h1
                className={`text-base font-semibold text-primary md:text-xl lg:text-2xl`}
              >
                Hello Everyone! we are{' '}
                <span
                  className={`mt-1 block text-4xl font-bold text-dark lg:text-5xl`}
                >
                  {companyName}
                </span>
              </h1>
              <h2
                className={`mb-5 text-lg font-medium text-secondary lg:text-2xl`}
              >
                {`${words[0]} `}
                <span className={`text-dark`}>{extractedText}</span>
              </h2>
              <p className={`mb-10 font-medium leading-relaxed text-secondary`}>
                {companySelfDefinition}
              </p>
              <Link
                href={`#`}
                className={`rounded-full bg-primary px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg`}
              >
                Contact us
              </Link>
            </div>
            <div className={`w-full self-end px-4 lg:w-1/2`}>
              <div className={`relative mt-10 lg:right-0 lg:mt-9`}>
                <div className='w-full'>
                  <Image
                    src='/next.svg'
                    alt='product'
                    width={300}
                    height={300}
                    style={{ width: '100%' }}
                  />
                </div>
                <span
                  className={`absolute -bottom-40 left-1/2 -z-10 -translate-x-1/2 md:scale-125`}
                >
                  <svg
                    width={400}
                    height={400}
                    viewBox='0 0 200 200'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill='#6366F1'
                      d='M40.3,-57.8C53.5,-54.1,66.5,-45.2,73.3,-32.7C80.1,-20.3,80.8,-4.3,77.2,10.1C73.5,24.5,65.6,37.3,55.6,47.3C45.5,57.2,33.3,64.4,22.3,60.6C11.4,56.7,1.8,41.7,-7.5,34.8C-16.7,27.8,-25.6,28.8,-35,25.9C-44.5,23,-54.6,16.1,-59.4,6.4C-64.2,-3.4,-63.7,-16.2,-57.1,-24.2C-50.5,-32.2,-37.7,-35.4,-27.1,-40.3C-16.6,-45.2,-8.3,-51.6,2.6,-55.7C13.5,-59.7,27,-61.4,40.3,-57.8Z'
                      transform='translate(100 100) scale(1.1)'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Section Hero finish*/}

      {/*Section About Start*/}
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
      {/* Section About finish*/}

      {/*Section Product Start*/}
      <section
        ref={productRef}
        id={`product`}
        className={`bg-slate-100 pb-16 pt-36`}
      >
        <div className={`container`}>
          <div className={`w-full px-4`}>
            <div className={`mx-auto mb-16 max-w-xl text-center`}>
              <h4 className={`mb-2 text-lg font-semibold text-primary`}>
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
      {/*Section Product End*/}

      {/*Section clients Start*/}
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
      {/*Section clients End*/}

      {/*Section Contact Start*/}
      <section ref={contactRef} id={`contact`} className={``}>
        <div className={`container`}></div>
      </section>
      {/*Section Contact End*/}
    </>
  );
}
