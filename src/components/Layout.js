import Navbar from "./Navbar"
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>SAVEL</title>
            </Head>
            <Navbar></Navbar>
            <main>{children}</main>
        </>
    )
}