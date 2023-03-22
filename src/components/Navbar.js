import Link from 'next/link'
import ApplicationLogo from '@/components/ApplicationLogo'
const Navbar = () => {
    return <header className='sticky top-0 z-30 w-full px-2 py-2 bg-white'>
            <nav className='flex justify-between top-0 z-100 mx-auto px-4'>
                    <div className='flex items-center'>
                        <ApplicationLogo />
                    </div>
                    <div className="flex items-center md:gap-x-12">
                        <Link
                            href="#"
                            className="text-sm text-gray-700">
                            Início
                        </Link>

                        <Link
                            href="#produtos"
                            className="ml-4 text-sm text-gray-700">
                            Produtos
                        </Link>

                        <Link
                            href="#sobre"
                            className="ml-4 text-sm text-gray-700">
                            Quem somos
                        </Link>

                        <Link
                            href="#contato"
                            className="ml-4 text-sm text-gray-700">
                            Contato
                        </Link>
                    </div>
                </nav>
        </header>

}

export default Navbar