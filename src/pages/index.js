import About from '@/components/About';
import Leading from '@/components/Leading';
import Products from '@/components/Products';
export default function Home() {
    return (
        <>
            <div id='início'>
                <Leading></Leading>
            </div>
            <div id='produtos'>
                <Products></Products>
            </div>
            <div id='sobre'>
                <About></About>
            </div>
        </>
    )
}
