import React from 'react'
import ExtraImg from "../assets/extra.svg"

const Extra = () => {
    const openAstro = () => {
        window.open("https://astro-iota-three.vercel.app/", '_blank');
    };
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <h1 class="lg:w-4/5 mx-auto flex flex-wrap text-indigo-500 text-3xl title-font font-medium mb-4">Extra</h1>

                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={ExtraImg}></img>
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Lembram-se do <b>ASTRO</b> do ano passado?</h1>
                        <p class="mb-8 leading-relaxed">"Astro: Desafios Matemáticos" é um emocionante jogo educativo que estimula, inspira e envolve os jogadores através de desafios matemáticos envolventes. Este jogo inovador foi concebido e introduzido durante a Faitec 2022 e agora está acessível como conteúdo adicional no Educlass, uma plataforma de aprendizado de ponta.<br></br>
                            Para obter informações detalhadas sobre este projeto estimulante, clique no botão abaixo e visite o nosso site oficial. Prepare-se para mergulhar em uma jornada de aprendizado matemático empolgante com Astro!</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={openAstro}>Acesse</button>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Extra