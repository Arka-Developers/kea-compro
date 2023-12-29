// 'use client';
import React from 'react';

export const navRef = React.createRef<HTMLDivElement>();
export const headerRef = React.createRef<HTMLDivElement>();
export const aboutRef = React.createRef<HTMLDivElement>();
export const productRef = React.createRef<HTMLDivElement>();
export const clientRef = React.createRef<HTMLDivElement>();
export const contactRef = React.createRef<HTMLDivElement>();

export const scrollToHome = () => {
  if (headerRef.current) {
    headerRef.current.scrollIntoView();
  }
};
export const scrollToAbout = () => {
  if (aboutRef.current) {
    aboutRef.current.scrollIntoView();
  }
};
export const scrollToProduct = () => {
  if (productRef.current) {
    productRef.current.scrollIntoView();
  }
};
export const scrollToClient = () => {
  if (clientRef.current) {
    clientRef.current.scrollIntoView();
  }
};
export const scrollToContact = () => {
  if (contactRef.current) {
    contactRef.current.scrollIntoView();
  }
};
export const scrollCheck = () => {
  if (typeof window !== 'undefined') {
    window.onscroll = function () {
      const header = navRef.current;
      const fixedNav = header ? header.offsetTop : 0; // Use a default value, like 0
      if (window.scrollY > fixedNav) {
        return header?.classList.add('navbar-fixed');
      } else {
        return header?.classList.remove('navbar-fixed');
      }
    };
  }
};
