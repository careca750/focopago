import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Business } from '../components/Business';
import { CTA } from '../components/CTA';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Business />
      <CTA />
    </>
  );
}