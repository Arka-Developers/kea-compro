import { contactRef } from '@/lib/script';
import React from 'react';

export const ContactSection = () => {
  return (
    <section ref={contactRef} id={`contact`} className={``}>
      <div className={`container`}></div>
    </section>
  );
};
