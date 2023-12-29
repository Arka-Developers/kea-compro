'use client';
import React from 'react';
// import { scrollCheck } from '@/lib/script';
import { HomeSection } from '@/app/(sections)/homeSection';
import { AboutSection } from '@/app/(sections)/aboutSection';
import { ClientsSection } from '@/app/(sections)/clientsSection';
import { ContactSection } from '@/app/(sections)/contactSection';
import { ProductSection } from '@/app/(sections)/productSection';
import { NavSection } from '@/app/(sections)/navSection';

export default function Home() {
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
      <NavSection />
      <HomeSection />
      <AboutSection />
      <ProductSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
}
