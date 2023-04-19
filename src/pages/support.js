import { useState, useEffect } from 'react';
import axios from '@/lib/axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Support = () => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const notifySuccess = () =>
        toast.success('Solitação realizada!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const notifyError = () =>
        toast.error('Tivemos um erro ao processar seu pedido!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const formSubmit = async (e) => {
        e.preventDefault()
        await csrf()
        axios.post('/api/support', {
            email,
            subject,
            message
        }).then(res => {
            console.log(res)
            if (res.status === 200) {
                setEmail('')
                setSubject('')
                setMessage('')
                notifySuccess()
            }
        })
            .catch(err => {
                notifyError()
            })

    }
    return (
        <div>
            <section class="bg-white">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 class="mb-4 text-4xl font-bold text-center text-gray-900">Contate-nos</h2>
                    <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">Tiveram um problema técnino? Descreva para gente o que ocorreu e em breve estaremos entrando em contato com você para melhor atende-lo.</p>
                    <form action="#" class="space-y-8" onSubmit={formSubmit}>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900">Seu email</label>
                            <input
                                type="email"
                                id="email"
                                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                placeholder="name@flowbite.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900">Assunto</label>
                            <input
                                type="text"
                                id="subject"
                                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                placeholder="Escreva o tema central do problema"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required />
                        </div>
                        <div class="sm:col-span-2">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900">Sua mensagem</label>
                            <textarea
                                id="message"
                                rows="6"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                placeholder="Escreva o que está acontecendo..."
                                onChange={(e) => setMessage(e.target.value)}
                                value={message}
                                ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                class="py-3 px-5 text-sm text-white font-medium text-center rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-500 focus:ring-4">
                                Enviar mensagem
                            </button>
                        </div>

                    </form>
                </div>
            </section>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default Support