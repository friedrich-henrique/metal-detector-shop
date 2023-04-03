import { useState } from 'react';
import Bar from './Bar';
import ImageGrid from './ImageGrid';
useState
const Products = () => {
    const [page, setPage] = useState(1)
    const pages = [1, 2, 3]

    function changePage(newPage) {
        setPage(newPage);
    }

    return <>
        <div className="grid justify-items-center bg-gray-100 rounded-lg mt-10 mx-20">
            <div className='mb-10'>
                {
                    page == 1 && <ImageGrid images={['detector-curvo.jpg', 'detector-plano.jpg', 'detector-tunel.jpg', 'detector-alimenticio.jpg']}></ImageGrid>
                }
                {
                    page == 2 && <ImageGrid section='britagem'></ImageGrid>
                }
                {
                    page == 3 && <ImageGrid section='equipamentos'></ImageGrid>
                }
            </div>
            <div className='my-3'>
                <Bar pages={pages} changePage={changePage}></Bar>
            </div>
        </div>

    </>
}

export default Products