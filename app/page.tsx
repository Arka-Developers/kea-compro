'use client';
import React from 'react';
// import { scrollCheck } from '@/lib/script';
import { HomeSection } from '@/app/(sections)/homeSection';
import { AboutSection } from '@/app/(sections)/aboutSection';
import { ClientsSection } from '@/app/(sections)/clientsSection';
import { ProductSection } from '@/app/(sections)/productSection';
import { NavSection } from '@/app/(sections)/navSection';
import { ThemeProvider } from '@material-tailwind/react';
import { FooterSection } from '@/app/(sections)/footerSection';

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
      <ThemeProvider>
        <NavSection />
        <HomeSection />
        <AboutSection />
        <ClientsSection />
        <ProductSection />
        <FooterSection />
      </ThemeProvider>
    </>
  );
}
