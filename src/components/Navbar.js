import Link from 'next/link'
import ApplicationLogo from '@/components/ApplicationLogo'
import { useState } from 'react'
const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    const navItems = {
        'home': {
            'link': '',
            'título': 'Ínicio'
        },
        'shop': {
            'link': 'shop',
            'título': 'Loja'
        },
        'support': {
            'link': 'support',
            'título': 'Assistência Técnica'
        },
    }
    return <header className='sticky top-0 z-30 w-full px-2 py-2 bg-white'>
        <nav className='top-0 z-100 mx-auto px-4'>
            <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
                <div className='flex items-center'>
                    <ApplicationLogo />
                </div>

                <section className='MOBILE-MENU flex md:hidden'>
                    <div className={navOpen ? 'showMenuNav' : 'hideMenuNav'}>
                        <div className='flex flex-col items-center justify-between min-h-[250px]'>
                            {Object.keys(navItems).map((key) => {
                                return <Link
                                    href={`/${navItems[key].link.toLowerCase()}`}
                                    className="text-sm text-gray-700">
                                    {navItems[key].título}
                                </Link>
                            })}
                        </div>
                    </div>

                    <div className='block'>
                        <button onClick={() => setNavOpen((prev) => !prev)} type="button" class="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 hover:bg-gray-200" aria-controls="navbar-default" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                </section>

                <section className='DESKTOP-MENU hidden lg:flex md:flex'>
                    <div className='w-full sm:w-auto md:flex lg:flex items-center sm:gap-x-12'>
                        {Object.keys(navItems).map((key) => {
                            return <Link
                                href={`/${navItems[key].link.toLowerCase()}`}
                                className="text-sm text-gray-700">
                                {navItems[key].título}
                            </Link>
                        })}
                    </div>

                </section>


            </div>
        </nav>
        <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </header>
}

export default Navbar