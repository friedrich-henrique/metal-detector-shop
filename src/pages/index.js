import About from '@/components/About';
import Image from 'next/image';

export default function Home() {
    return (
        <>
            <div className="h-screen bg-flex flex-col">
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
                    <div className="flex justify-around bg-gray-100 mt-10 mx-20">
                        <div class="grid grid-rows-2">
                            <div class="row-start-1 m-5">
                                <Image
                                    src="/sensor-plano.jpg" // Route of the image file
                                    height={220} // Desired size with correct aspect ratio
                                    width={220} // Desired size with correct aspect ratio
                                    alt="Savel logo"
                                />
                            </div>
                            <div class="row-start-1 m-5">
                                <Image
                                    src="/sensor-curvo.jpg" // Route of the image file
                                    height={220} // Desired size with correct aspect ratio
                                    width={220} // Desired size with correct aspect ratio
                                    alt="Savel logo"
                                />
                            </div>
                            <div class="row-start-1 m-5">
                                <Image
                                    src="/sensor-tunel.jpg" // Route of the image file
                                    height={220} // Desired size with correct aspect ratio
                                    width={220} // Desired size with correct aspect ratio
                                    alt="Savel logo"
                                />
                            </div>
                        </div>
                    </div>
                    <div id='about'>
                        <About></About>
                    </div>
                </main>
            </div>

        </>
    )
}
