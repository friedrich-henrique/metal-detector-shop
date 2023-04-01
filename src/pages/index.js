import About from '@/components/About';
import Contact from '@/components/Contact';
import Leading from '@/components/Leading';
import Products from '@/components/Products';
export default function Home() {
    return (
        <>
            <div id='leading'>
                <Leading></Leading>
            </div>
            <div id='sobre'>
                <About></About>
            </div>
            <div id='contato'>
                <Contact></Contact>
            </div>
        </>
    )
}
