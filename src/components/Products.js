import Image from 'next/image';
import { useState } from 'react';
useState
const Products = () => {
    let [category, setCategory] = useState('detectores')
    const categories = ['detectores', 'britagem', 'máquinas']

    function changeCategory(newCategory) {
        setCategory(newCategory);

    }
    return <>
        <div className="flex text-center bg-gray-100 mt-10 mx-20">
            <div className='grid grid-rows-2 h-66'>
                <div className='flex justify-between'>
                    {
                        category === 'detectores' &&
                        <div className='grid grid-cols-3'>
                            <div className="col m-5">
                                <Image
                                    src="/sensor-plano.jpg" // Route of the image file
                                    height={220} // Desired size with correct aspect ratio
                                    width={220} // Desired size with correct aspect ratio
                                    alt="Savel logo"
                                />
                            </div>
                            <div className="col m-5">
                                <Image
                                    src="/sensor-curvo.jpg" // Route of the image file
                                    height={220} // Desired size with correct aspect ratio
                                    width={220} // Desired size with correct aspect ratio
                                    alt="Savel logo"
                                />
                            </div>
                            <div className="row-start-1 m-5">
                                <Image
                                    src="/sensor-tunel.jpg" // Route of the image file
                                    height={220} // Desired size with correct aspect ratio
                                    width={220} // Desired size with correct aspect ratio
                                    alt="Savel logo"
                                />
                            </div>
                        </div>
                    }

                    {
                        category === 'britagem' &&
                        <div>
                            Aqui fotos de equipamentos de britagem
                        </div>
                    }

                    {
                        category === 'máquinas' &&
                        <div>
                            Aqui fotos de equipamentos de máquinas
                        </div>
                    }
                </div>

                <div className='flex justify-center'>
                    <div>
                        {categories.map((cat) => {
                            return <span className='mx-5' key={cat} onClick={() => changeCategory(cat)}>{cat}</span>
                        })}
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default Products