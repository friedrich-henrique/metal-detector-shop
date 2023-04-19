import Layout from '@/components/Layout'
import 'tailwindcss/tailwind.css'
import { ToastContainer } from 'react-toastify';

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
        <Component {...pageProps} />
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
        </Layout>
    )
}