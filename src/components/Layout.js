import Contact from "./Contact"
import Navbar from "./Navbar"
import Head from 'next/head'


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>SAVEL</title>
            </Head>
            <main className="min-h-screen relative bg-flex flex-col">
                <Navbar></Navbar>
                <div className="lg:pb-28">
                    {children}
                </div>
                <Contact></Contact>
            </main>
        </>
    )
}