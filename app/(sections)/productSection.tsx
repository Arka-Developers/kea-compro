import { productRef } from '@/lib/script';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { headerData } from '@/lib/const';
import 'react-tooltip/dist/react-tooltip.css';
import { productTypeDefinition } from '@/lib/definition';

export const ProductSection: React.FC = () => {
  const { companySelfDefinition, productCatalog } = headerData;
  const [selectedProductType, setSelectedProductType] =
    useState<productTypeDefinition | null>(null);

  const openModal = (productTypeName: string) => {
    // Find the selected productType based on productTypeName
    const selectedType = productCatalog
      .map((product) => product.productType)
      .flat()
      .find((type) => productTypeName === type.productTypeName);

    // @ts-ignore
    setSelectedProductType(selectedType || null);
  };

  const closeModal = () => {
    setSelectedProductType(null);
  };

  const modalRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const closeModalOnOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', closeModalOnOutsideClick);
    return () => {
      document.removeEventListener('mousedown', closeModalOnOutsideClick);
    };
  }, []);
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
            className={`flex flex-wrap justify-center px-4 xl:mx-auto xl:w-10/12`}
          >
            {productCatalog.map((item) => (
              <div
                key={item.productName}
                className={`mb-12 w-1/2 transform p-4`}
                style={{ position: 'relative' }}
              >
                <div className='mb-4'>
                  <div className='relative mx-auto h-80 w-80 overflow-hidden rounded-md shadow-md transition duration-300 hover:scale-105 hover:shadow-lg'>
                    <Image
                      src={item.productPicture}
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
                    <div key={detailItem.productTypeName} className={`mb-2`}>
                      <a
                        onClick={() => openModal(detailItem.productTypeName)}
                        style={{ cursor: 'pointer' }}
                      >
                        <div
                          className={`cursor-pointer rounded-md bg-gray-200 p-2 text-base font-medium text-secondary`}
                        >
                          {detailItem.productTypeName}
                        </div>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal */}
      {selectedProductType && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
          <div
            ref={modalRef}
            className='h-[600px] w-[600px] overflow-auto rounded-md bg-white p-6'
          >
            <div className='mb-4'>
              <div className='relative mx-auto h-80 w-80 overflow-hidden rounded-md'>
                <Image
                  src={selectedProductType.productPic}
                  alt={selectedProductType.productTypeName}
                  layout='fill'
                  objectFit='cover'
                  className='rounded-md'
                />
              </div>
            </div>
            <h2 className='mb-4 text-2xl font-semibold'>
              {selectedProductType.productTypeName}
            </h2>
            <p className='mb-2 text-base font-medium'>
              {selectedProductType.productDesc}
            </p>
            <p className='mb-2 text-sm'>
              <strong>Volume:</strong> {selectedProductType.productVolume},{' '}
              <strong>Weight:</strong> {selectedProductType.productWeight}
            </p>
            <p className='text-sm'>
              <strong>Example:</strong> {selectedProductType.productExample}
            </p>
            <div className={`flex justify-end`}>
              <button
                className='mt-4 rounded-md bg-red-400 px-4 py-2 text-white'
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
