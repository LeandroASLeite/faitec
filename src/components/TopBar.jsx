import React from 'react';
import Logo from '../assets/LOGO.svg'

const TopBar = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      
      window.scrollTo({
              top: element.offsetTop - 120,
              behavior:'smooth',
            });
    }
  };

  return (

    <div>
      <header className=" text-indigo-500 body-font fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={Logo} className="w-28" alt="Logo" />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button
              onClick={() => scrollToSection('home')}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Download
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Contato
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default TopBar;