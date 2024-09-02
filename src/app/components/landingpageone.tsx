import React from 'react';
import  Button  from '@/app/components/button';

const LandingPage = () => {
  return (
    <div className="tw-flex tw-flex-col tw-min-h-screen">
      {/* Header */}
      <header className="tw-bg-white tw-shadow-md tw-py-4 tw-px-8">
        <nav className="tw-flex tw-justify-between tw-items-center">
          <div className="tw-text-2xl tw-font-bold">Logo</div>
          <div className="tw-flex tw-items-center tw-space-x-6">
            <a href="#" className="tw-text-gray-700 hover:tw-text-gray-900">Home</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-gray-900">About Us</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-gray-900">Blog</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-gray-900">Page</a>
            <a href="#" className="tw-text-gray-700 hover:tw-text-gray-900">Contact</a>
            <button className="tw-border tw-border-pink-500 tw-text-pink-500 tw-px-4 tw-py-2 tw-rounded-full hover:tw-bg-pink-500 hover:tw-text-white tw-transition tw-duration-300">Free Sign Up</button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-500 tw-text-white tw-py-20">
        <div className="tw-container tw-mx-auto tw-px-4 tw-flex tw-items-center">
          <div className="tw-w-1/2">
            <h1 className="tw-text-5xl tw-font-bold tw-mb-4">Saas Software Landing is the Best Ever</h1>
            <p className="tw-text-xl tw-mb-8">Why I say old chap that is spiffing bits and bobs chimney pot cracking goal bamboozled!</p>
            <button className="tw-bg-white tw-text-pink-500 tw-px-8 tw-py-3 tw-rounded-full hover:tw-bg-gray-100 tw-transition tw-duration-300">Get Started</button>
          </div>
          <div className="tw-w-1/2">
            {/* Placeholder for hero image */}
            <div className="tw-bg-white tw-h-64 tw-w-64 tw-mx-auto tw-rounded-lg tw-shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="tw-py-20 tw-bg-gray-100">
        <div className="tw-container tw-mx-auto tw-px-4">
          <div className="tw-text-center tw-mb-12">
            <h2 className="tw-text-3xl tw-font-bold">Our Features</h2>
          </div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-8">
            {['Enjoy This App', 'Fully Secured', 'Design & Branding'].map((feature, index) => (
              <div key={index} className="tw-bg-white tw-p-6 tw-rounded-lg tw-shadow-md tw-text-center">
                <h3 className="tw-text-xl tw-font-semibold tw-mb-4">{feature}</h3>
                <p className="tw-text-gray-600">Hotpot bubble and squeak pukka quaint Jeffrey brown bread easy peasy squiffy!</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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