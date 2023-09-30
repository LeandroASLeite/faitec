/* eslint-disable react/no-unknown-property */
import React, {useState} from 'react'
import emailjs from '@emailjs/browser'
import Contato from '../assets/contato.svg'

function Contact (){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();        
        const templateParams={
            name: name,
            message: message,
            email: email
        }
       emailjs.send('service_ubacvxb','template_x9e7ed5',templateParams,'P26JSEYQLvdiCZ6MO')
       .then((response)=>{
        console.log('email enviado',response.status, response.text)
        setEmail('')
        setName('')
        setMessage('')

       }, (err)=>{
        console.error("erro ao enviar", err);
       }
       )

    }

    return (
        <div class=''>
            <h1 class="lg:w-4/5 mx-auto flex flex-wrap text-indigo-500 text-3xl title-font font-medium mb-4">Contato</h1>
            <div class="container px-5 grid gap-8 grid-cols-1 md:grid-cols-2 py-24 mx-auto text-gray-900 rounded-lg ">
                <div class="flex flex-col justify-center items-center">
                    <div>
                        <h2 class="text-4xl lg:text-5xl font-bold  text-center">
                            Vamos conversar, deixe uma mensagem ou sugestão.
                        </h2>

                    </div>
                    <div class="mt-12 text-center">
                        <img src={Contato} alt="Contact" class='max-w-lg rounded-3xl' />
                    </div>
                </div>
                <form class=' justify-center items-center px-5' onSubmit={sendEmail}>
                    <div>
                        <label class="uppercase text-sm text-gray-600 font-bold">
                            Nome
                        </label>
                        <input
                            class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                            type="text"
                            placeholder="Digite seu nome"  
                            value={name}                          
                            onChange={(e)=> setName(e.target.value)}
                            
                            required
                        />
                    </div>
                    <div class="mt-8">
                        <lable class="uppercase text-sm text-gray-600 font-bold">
                            E-mail
                        </lable>
                        <input
                            class="w-full bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                            type="email"
                            placeholder="Digite seu endereço de e-mail"
                            
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div class="mt-8">
                        <lable class="uppercase text-sm text-gray-600 font-bold">
                            Mensagem
                        </lable>
                        <textarea
                            class="w-full h-32 bg-gray-200 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-indigo-400"
                            placeholder="Digite sua mensagem"
                            value={message} 
                            onChange={(e)=> setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <div class="mt-8">
                        <button
                            class="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline hover:bg-indigo-700"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Contact