import React, { useEffect, useState } from 'react';
/* import  Button  from '@/app/components/button'; */
import Header from './header';
import FeaturesSection from './featuressection';


const LandingPage = () => {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="hero" className="tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-500 tw-text-white tw-pt-24 sm:tw-pt-28 md:tw-pt-20 tw-pb-8 sm:tw-pb-12 md:tw-pb-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-flex tw-flex-col sm:tw-flex-row tw-items-center">
          <div className="tw-w-full sm:tw-w-1/2 tw-mb-8 sm:tw-mb-0">
            <h1 className="tw-text-3xl sm:tw-text-4xl md:tw-text-5xl tw-font-bold tw-mb-4">Saas Software Landing is the Best Ever</h1>
            <p className="tw-text-base sm:tw-text-lg md:tw-text-xl tw-mb-6 sm:tw-mb-8">Why I say old chap that is spiffing bits and bobs chimney pot cracking goal bamboozled!</p>
            <button className="tw-bg-white tw-text-pink-500 tw-px-4 sm:tw-px-6 md:tw-px-8 tw-py-2 sm:tw-py-2.5 md:tw-py-3 tw-rounded-full hover:tw-bg-gray-100 tw-transition tw-duration-300">Get Started</button>
          </div>
          <div className="tw-w-full sm:tw-w-1/2">
            <div className="tw-bg-white tw-h-40 tw-w-40 sm:tw-h-48 sm:tw-w-48 md:tw-h-64 md:tw-w-64 tw-mx-auto tw-rounded-lg tw-shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FeaturesSection />
     

      {/* CTA Section */}
      <section className="tw-bg-pink-500 tw-text-white tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-text-center">
          <h2 className="tw-text-3xl tw-font-bold tw-mb-4">Try Saaspik for free!</h2>
          <p className="tw-mb-8">Well barmy daft young delinquent wind up bamboozled chap vagabond a blinding shot on your bike mate cobblers hanky panky pardon me, mush bobby!</p>
          <div className="tw-flex tw-justify-center tw-space-x-4">
            <button className="tw-bg-white tw-text-pink-500 tw-px-8 tw-py-3 tw-rounded-full hover:tw-bg-gray-100 tw-transition tw-duration-300">Google Play</button>
            <button className="tw-bg-white tw-text-pink-500 tw-px-8 tw-py-3 tw-rounded-full hover:tw-bg-gray-100 tw-transition tw-duration-300">App Store</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="tw-bg-gray-800 tw-text-white tw-py-10">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-4 tw-gap-8">
            <div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-4">Our Address</h3>
              <p>Lavaca Street, Suite 24, Road Apt New York, USA</p>
            </div>
            <div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-4">Company</h3>
              <ul>
                <li><a href="#" className="hover:tw-text-gray-300">Feature</a></li>
                <li><a href="#" className="hover:tw-text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:tw-text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-4">Service</h3>
              <ul>
                <li><a href="#" className="hover:tw-text-gray-300">Web Design</a></li>
                <li><a href="#" className="hover:tw-text-gray-300">Development</a></li>
                <li><a href="#" className="hover:tw-text-gray-300">WordPress</a></li>
              </ul>
            </div>
            <div>
              <h3 className="tw-text-xl tw-font-bold tw-mb-4">Newsletter</h3>
              <p className="tw-mb-4">Subscribe to our newsletter to receive early discount offers.</p>
              <div className="tw-flex">
                <input type="email" placeholder="Email" className="tw-p-2 tw-w-full" />
                <button className="tw-bg-pink-500 tw-text-white tw-px-4 tw-py-2">→</button>
              </div>
            </div>
          </div>
          <div className="tw-mt-8 tw-text-center">
            <p>© 2024 Saspik - All Rights Reserved. Design by PixelSigns</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;