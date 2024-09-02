import React from 'react';
import  Button  from '@/app/components/button';

const LandingPageOne = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8">
        <nav className="flex justify-between items-center">
          <div className="text-2xl font-bold">Logo</div>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Page</a>
            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
            <Button variant="outline" className="border-pink-500 text-pink-500">Free Sign Up</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-1/2">
            <h1 className="text-5xl font-bold mb-4">Saas Software Landing is the Best Ever</h1>
            <p className="text-xl mb-8">Why I say old chap that is spiffing bits and bobs chimney pot cracking goal bamboozled!</p>
            <Button className="bg-white text-pink-500 hover:bg-gray-100">Get Started</Button>
          </div>
          <div className="w-1/2">
            {/* Placeholder for hero image */}
            <div className="bg-white h-64 w-64 mx-auto rounded-lg shadow-lg"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Features</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Enjoy This App', 'Fully Secured', 'Design & Branding'].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                <p className="text-gray-600">Hotpot bubble and squeak pukka quaint Jeffrey brown bread easy peasy squiffy!</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Try Saaspik for free!</h2>
          <p className="mb-8">Well barmy daft young delinquent wind up bamboozled chap vagabond a blinding shot on your bike mate cobblers hanky panky pardon me, mush bobby!</p>
          <div className="flex justify-center space-x-4">
            <Button className="bg-white text-pink-500 hover:bg-gray-100">Google Play</Button>
            <Button className="bg-white text-pink-500 hover:bg-gray-100">App Store</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Our Address</h3>
              <p>Lavaca Street, Suite 24, Road Apt New York, USA</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Feature</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Service</h3>
              <ul>
                <li><a href="#" className="hover:text-gray-300">Web Design</a></li>
                <li><a href="#" className="hover:text-gray-300">Development</a></li>
                <li><a href="#" className="hover:text-gray-300">WordPress</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter to receive early discount offers.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="p-2 w-full" />
                <Button className="bg-pink-500 text-white">→</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p>© 2024 Saspik - All Rights Reserved. Design by PixelSigns</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageOne;