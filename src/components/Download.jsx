import React from 'react'
import DownloadImg from "../assets/download.svg"
const Download = () => {
  return (
    <div>     
          <h1 class="lg:w-4/5 mx-auto flex flex-wrap text-indigo-500 text-3xl title-font font-medium mb-4">Download</h1>
    <section class="text-gray-600 body-font justify-center w-full">
      <div class="container mx-auto flex px-10 py-24 md:flex-row flex-col items-center">
        

        
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-1 flex flex-col md:items-start md:text-left items-center text-center">
        
        
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Experimente o EduClass hoje mesmo!
           
          </h1>
          <p class="mb-8 leading-relaxed">Faça o download gratuito do EduClass agora e comece a simplificar a gestão educacional. Professores, alunos e administradores podem finalmente desfrutar de uma plataforma intuitiva que facilita o acompanhamento de notas e frequência. Clique no botão abaixo para iniciar sua jornada em direção a uma administração escolar mais inteligente.</p>
          <div class="flex justify-center">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 my-5 focus:outline-none hover:bg-indigo-600 rounded text-lg">Baixar</button>

          </div>
        </div>
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src={DownloadImg} class="object-cover object-center rounded-3xl" alt="hero" ></img>
        </div>
      </div>
    </section>
     </div>
  )
}

export default Download