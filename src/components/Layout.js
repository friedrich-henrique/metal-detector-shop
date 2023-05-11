import Contact from "./Contact"
import Navbar from "./Navbar"
import Head from 'next/head'


export default function Layout({ children }) {
    return (
        <>
            <Head>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-PQP5GGCBJ6"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PQP5GGCBJ6');
              `,
                    }}
                />
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