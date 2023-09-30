import React from 'react'
import backgroundImage from '../assets/home.svg';
import HomeImg from "../assets/home.svg"
const Home = () => {
  return (
<div className="relative" id='#home'>
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-3xl brightness-105  "
    style={{ backgroundImage: `url(${backgroundImage})` }}
  ></div>
  <div className="relative z-10 p-4">
  <section class="text-gray-600 body-font overflow-hidden">
  <div class="container px-5 py-24 mx-auto">
    <div class="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src={HomeImg}></img>
      <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
      <div className="relative">
  <div
    className="absolute inset-0 bg-cover bg-center filter blur-lg"
    style={{ backgroundImage: `url(${backgroundImage})` }}
  ></div>
  <div className="relative z-10 p-4">
    <div className="bg-white bg-opacity-80 p-4 rounded-lg">
      <h1 className="text-indigo-500 text-3xl title-font font-medium mb-1">Dê vida à sua gestão educacional com o EduClass!</h1>       
      <p className="">Transforme a administração escolar em algo simples, eficiente e acessível. Nosso software de gestão educacional permite que professores, alunos e administradores tenham o controle total sobre notas, frequência e muito mais. Descubra como tornar a gestão escolar mais inteligente e intuitiva agora!</p>
    </div>
  </div>
</div>  </div>
    </div>
  </div>
</section>
  </div>
</div>
  

      
  )
}

export default Home