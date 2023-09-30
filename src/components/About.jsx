import About1 from "../assets/about1.svg"
import About2 from "../assets/about2.svg"

const About = () => {
  return (
    <div id='#about'> 
      
    <section class="text-gray-600 body-font overflow-hidden justify-center items-center" >
    
    <h1 class="lg:w-4/5 mx-auto flex flex-wrap text-indigo-500 text-3xl title-font font-medium mb-4">Sobre</h1>
    
    
      <div class="container px-5 py-24 mx-auto">
      
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
        
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Simplicar o acesso e controle</h1>
            <p class="mb-4">Somos uma equipe apaixonada que acredita que a educação deve ser simplificada. Com o EduClass, estamos comprometidos em oferecer uma solução completa para escolas e instituições educacionais. Nossa jornada começou com o objetivo de facilitar o trabalho de professores, tornar as informações acessíveis para os alunos e simplificar o gerenciamento para os administradores.</p>
            
          </div>
          <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src={About1}></img>
       </div>
      </div>
    </section>

    <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-3xl" src={About2}></img>
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">Inovação Educacional</h1>
              <div class="flex mb-4">
              </div>
              <p class=""> Nosso compromisso é impulsionar a inovação na gestão educacional, proporcionando uma plataforma que evolui constantemente para atender às necessidades em constante mudança das instituições de ensino. Estamos dedicados a capacitar educadores, estudantes e administradores com as ferramentas necessárias para promover um ambiente de aprendizado mais eficaz e eficiente.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
     
  )
}

export default About