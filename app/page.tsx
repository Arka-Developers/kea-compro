import Image from 'next/image';
import { headerData } from '@/lib/const';
import Link from 'next/link';
import { Facebook, Instagram } from 'lucide-react';

export default function Home() {
  const { companyName, companyCaption, companySelfDefinition, companyHistory } =
    headerData;
  const words = companyCaption.split(' ');
  const extractedText = words.slice(1).join(' ');
  return (
    <>
      {/* section hero start */}
      <section id={`home`} className={`pt-36`}>
        <div className={`container`}>
          <div className={`flex flex-wrap`}>
            <div className={`w-full self-center px-4 lg:w-1/2`}>
              <h1
                className={`text-primary text-base font-semibold md:text-xl lg:text-2xl`}
              >
                Hello Everyone! we are{' '}
                <span
                  className={`text-dark mt-1 block text-4xl font-bold lg:text-5xl`}
                >
                  {companyName}
                </span>
              </h1>
              <h2
                className={`text-secondary mb-5 text-lg font-medium lg:text-2xl`}
              >
                {`${words[0]} `}
                <span className={`text-dark`}>{extractedText}</span>
              </h2>
              <p className={`text-secondary mb-10 font-medium leading-relaxed`}>
                {companySelfDefinition}
              </p>
              <Link
                href={`#`}
                className={`bg-primary rounded-full px-8 py-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:opacity-80 hover:shadow-lg`}
              >
                Contact us
              </Link>
            </div>
            <div className={`w-full self-end px-4 lg:w-1/2`}>
              <div className={`relative mt-10 lg:right-0 lg:mt-9`}>
                <img
                  src='/next.svg'
                  alt='Picture of the author'
                  className={`mx-auto max-w-full`}
                />
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
      <section id={`about`} className={`pb-32 pt-36`}>
        <div className={`container`}>
          <div className={`flex flex-wrap`}>
            <div className={`mb-10 w-full px-4`}>
              <h4 className={`text-primary mb-3 font-bold uppercase`}>
                About Us
              </h4>
              <h2 className={`text-dark mb-5 max-w-md text-3xl font-bold`}>
                It's Start with...
              </h2>
              <p className={`text-secondary max-w-xl text-base font-medium`}>
                {companyHistory}
              </p>
            </div>
            <div className={`w-full px-4`}>
              <h4 className={`text-dark mb-4 text-2xl font-semibold`}>
                Let's Connect!
              </h4>
              <p
                className={`text-secondary mb-6 max-w-xl text-base font-medium`}
              >
                {companyHistory}
              </p>
              <div className={`flex items-center`}>
                <Link
                  href={`#`}
                  className={`hover:border-primary hover:bg-primary mr-3 flex h-9 w-9 items-center justify-center rounded-full border text-slate-300 hover:text-white`}
                >
                  <Instagram />
                </Link>
                <Link
                  href={`#`}
                  className={`hover:border-primary hover:bg-primary mr-3 flex h-9 w-9 items-center justify-center rounded-full border text-slate-300 hover:text-white`}
                >
                  <Facebook />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section About finish*/}
    </>
  );
}
