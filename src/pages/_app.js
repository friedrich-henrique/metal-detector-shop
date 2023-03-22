import Layout from '@/components/Layout'
import 'tailwindcss/tailwind.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}