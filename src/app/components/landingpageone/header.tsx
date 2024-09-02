import React, { useState, useEffect } from 'react';

interface HeaderProps {
  // Add any props here if needed in the future
}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`tw-fixed tw-top-0 tw-left-0 tw-right-0 tw-transition-all tw-duration-300 tw-z-50 ${
      isScrolled 
        ? 'tw-bg-white tw-shadow-md' 
        : 'tw-bg-gradient-to-r tw-from-purple-600 tw-to-pink-500'
    } tw-py-4 tw-px-4 sm:tw-px-8`}>
      <nav className="tw-flex tw-justify-between tw-items-center">
        <div className={`tw-text-2xl tw-font-bold ${isScrolled ? 'tw-text-gray-800' : 'tw-text-white'}`}>Logo</div>
        
        {/* Mobile menu button */}
        <button 
          className="tw-block sm:tw-hidden tw-text-3xl tw-leading-none tw-px-2 tw-py-1 tw-rounded focus:tw-outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? '\u00D7' : '\u2630'}
        </button>

        {/* Desktop menu */}
        <div className="tw-hidden sm:tw-flex tw-items-center tw-space-x-6">
          <a href="#" className={`tw-text-sm md:tw-text-base ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Home</a>
          <a href="#" className={`tw-text-sm md:tw-text-base ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>About Us</a>
          <a href="#" className={`tw-text-sm md:tw-text-base ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Blog</a>
          <a href="#" className={`tw-text-sm md:tw-text-base ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Page</a>
          <a href="#" className={`tw-text-sm md:tw-text-base ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Contact</a>
          <button className={`tw-text-sm md:tw-text-base tw-border tw-px-4 tw-py-2 tw-rounded-full tw-transition tw-duration-300 ${
            isScrolled
              ? 'tw-border-pink-500 tw-text-pink-500 hover:tw-bg-pink-500 hover:tw-text-white'
              : 'tw-border-white tw-text-white hover:tw-bg-white hover:tw-text-pink-500'
          }`}>Free Sign Up</button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="tw-sm:hidden tw-mt-4 tw-flex tw-flex-col tw-space-y-4">
          <a href="#" className={`tw-text-sm ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Home</a>
          <a href="#" className={`tw-text-sm ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>About Us</a>
          <a href="#" className={`tw-text-sm ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Blog</a>
          <a href="#" className={`tw-text-sm ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Page</a>
          <a href="#" className={`tw-text-sm ${isScrolled ? 'tw-text-gray-700 hover:tw-text-gray-900' : 'tw-text-white hover:tw-text-gray-200'}`}>Contact</a>
          <button className={`tw-text-sm tw-border tw-px-4 tw-py-2 tw-rounded-full tw-transition tw-duration-300 ${
            isScrolled
              ? 'tw-border-pink-500 tw-text-pink-500 hover:tw-bg-pink-500 hover:tw-text-white'
              : 'tw-border-white tw-text-white hover:tw-bg-white hover:tw-text-pink-500'
          }`}>Free Sign Up</button>
        </div>
      )}
    </header>
  );
};

export default Header;