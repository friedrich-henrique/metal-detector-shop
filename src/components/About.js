const { default: Image } = require("next/image")

const About = () => {
    return <>
        <section class="relative isolate overflow-hidden bg-white py-24 px-6 sm:py-32 lg:px-8">
            <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20">
                <Image></Image>
            </div>
            <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
            <div class="mx-auto max-w-2xl lg:max-w-4xl">
                <figure class="mt-10">
                    <blockquote class="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                        <p>“Desde o príncipio adotei como lema servir aos meus clientes. A primeira orientação para todos colaboradores da empresa é a importância dessa missão. Felizmente nesses mais de 30 anos sempre conseguimos nos manter fiel a isso, prestando soluções e assistêcia aos mais variados ramos industriais.”</p>
                    </blockquote>
                    <figcaption class="mt-10">
                        <Image className="mx-auto h-10 w-10 rounded-full"
                        src={"/fundador-savel.png"}
                        height={120}
                        width={120}
                        >

                        </Image>
                        <div class="mt-4 flex items-center justify-center space-x-3 text-base">
                            <div class="font-semibold text-gray-900">Fernando Mendes</div>
                            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-gray-900">
                                <circle cx="1" cy="1" r="1" />
                            </svg>
                            <div class="text-gray-600">Fundador da Savel</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>    </>
}

export default About;