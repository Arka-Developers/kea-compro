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
import { TimelineSection } from '@/app/(sections)/timelineSection';

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <NavSection />
        <HomeSection />
        <AboutSection />
        <ClientsSection />
        <TimelineSection />
        <ProductSection />
        <FooterSection />
      </ThemeProvider>
    </>
  );
}
