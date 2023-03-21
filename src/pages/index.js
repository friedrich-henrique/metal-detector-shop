import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
import { useAuth } from '@/hooks/auth'
import ApplicationLogo from '@/components/ApplicationLogo'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })
    return (
        <>
            <Head>
                <title>SAVEL</title>
            </Head>
            <div className="bg-cover h-screen bg-flex flex-col">
                <header className="py-2 px-12">
                    <div className="mx-auto px-4">
                        <nav className='relative flex justify-between'>
                            <div className='flex items-center'>
                                <ApplicationLogo />
                            </div>
                            <div className="flex items-center md:gap-x-12">
                                <Link
                                    href="/home"
                                    className="text-sm text-gray-700 underline">
                                    Home
                                </Link>

                                <Link
                                    href="#produtos"
                                    className="ml-4 text-sm text-gray-700 underline">
                                    Produtos
                                </Link>

                                <Link
                                    href="/sobre"
                                    className="ml-4 text-sm text-gray-700 underline">
                                    Quem somos
                                </Link>

                                <Link
                                    href="/contato"
                                    className="ml-4 text-sm text-gray-700 underline">
                                    Contato
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className='py-16 bg-blue-900'>
                        <div className='mx-auto max-w-3xl items-center'>
                            <div className='relative'>
                                <h2 className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text text-5xl text-transparent">
                                    Soluções para o seu negócio!
                                </h2>
                                <p className='mt-3 text-white text-2xl tracking-tight'>
                                    Nós oferecemos diversas soluções para britagens, cerâmicas, reciglagens, empresas alimentícias, e diversos outras indústrias
                                </p>
                            </div>

                        </div>

                    </div>
                    <div className="relative max-w-3x1 pt-10 pb-20 sm:py-24 px-5">
                        <div className='mx-auto lg:px:12'>
                            <div class="grid grid-rows-3 grid-flow-col mx-auto">
                                <div class="row-start-1 row-span-2">
                                    <Image
                                        src="/sensor-plano.jpg" // Route of the image file
                                        height={120} // Desired size with correct aspect ratio
                                        width={220} // Desired size with correct aspect ratio
                                        alt="Savel logo"
                                    />
                                </div>
                                <div class="row-end-3 row-span-2">
                                    <Image
                                        src="/sensor-curvo.jpg" // Route of the image file
                                        height={120} // Desired size with correct aspect ratio
                                        width={220} // Desired size with correct aspect ratio
                                        alt="Savel logo"
                                    />
                                </div>
                                <div class="row-start-1 row-end-4">
                                    <Image
                                        src="/sensor-tunel.jpg" // Route of the image file
                                        height={120} // Desired size with correct aspect ratio
                                        width={220} // Desired size with correct aspect ratio
                                        alt="Savel logo"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>

        </>
    )
}
