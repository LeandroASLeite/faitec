/* eslint-disable react/no-unknown-property */
import React from 'react'
import { IoLogoYoutube, IoLogoInstagram, IoLogoGithub } from "react-icons/io";

const FooterPage = () => {
  return (
    <footer class="text-gray-600 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col justify-between">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">EduClass</span>
        </a>
        <div class='flex row-auto '>
          <div>
            <a href="https://www.youtube.com/channel/UCJ3npApd7V9Qhj0Nes8fwHw" target="_blank">
            <IoLogoYoutube class='h-10 w-10'/>
            </a>
            </div>
          <div>
            <a href="https://www.instagram.com/educlasspepos/" target="_blank">
            <IoLogoInstagram class='h-10 w-10'/>
            </a>
            </div>
        <div>  
          <a href="https://github.com/FaitecPepos" target="_blank">
          <IoLogoGithub class='h-10 w-10'/>
          </a>
        </div>
        </div>
      </div>
    </footer>

  )
}

export default FooterPage






