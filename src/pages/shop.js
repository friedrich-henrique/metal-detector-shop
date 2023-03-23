import axios from '@/lib/axios'
import Image from 'next/image';
import { useState, useEffect } from 'react';
const Shop = () => {
    const [state, setState] = useState(null)
    const [products, setProducts] = useState(null)
    const [errors, setErrors] = useState([])
    useEffect(() => {
        fetchProducts()
    }, [])

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    async function fetchProducts() {
        await csrf()
        setState('loading')
        axios.get('/api/products').then(
            res => {
                setProducts(res.data)
                setState('done')
            }
        ).catch(err => {
            setErrors(err.response)
        })
    }

    return <>
        <div className="grid grid-cols-4 gap-4">
            {state === 'done' &&
                Object.keys(products).map((keyName) => (
                    <div>
                        <div class="flex justify-center">
                            <div
                                class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700">
                                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                                    <Image
                                        class="rounded-t-lg"
                                        src={`/${keyName}.jpg`} // Route of the image file
                                        
                                        width={384} // Desired size with correct aspect ratio
                                        height={150} // Desired size with correct aspect ratio
                                        alt=""
                                    />
                                </a>
                                <div class="p-6">
                                    <h5
                                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                        {products[keyName]['nome']}
                                    </h5>
                                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                        {products[keyName]['descrição']}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
}

export default Shop