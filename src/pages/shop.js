import Loading from '@/components/Loading';
import axios from '@/lib/axios'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const CartButton = ({ openCart, count }) => {
    return <>
        <div class="mx-auto mt-16">
            <button className='relative rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700' onClick={() => { openCart() }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                {count > 0 &&
                    <div class="absolute top-0 right-0 -mt-4 -mr-4 px-4 py-1 bg-indigo-200 rounded-full">
                        {count}
                    </div>
                }
            </button>
        </div>

    </>
}


const Cart = ({ cart, subtotal, removeProductFromCart, closeCart }) => {
    return <>
        <div class="flex flex-col overflow-y-scroll h-full bg-white shadow-xl lg:w-1/4 right-0 transition">
            <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div class="flex items-start justify-between">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">Carrinho</h2>
                    <div class="ml-3 flex h-7 items-center">
                        <button type="button" class="-m-2 p-2 text-gray-400 hover:text-gray-500" onClick={() => closeCart()}>
                            <span class="sr-only">Fechar carrinho</span>
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="mt-8">
                    <div class="flow-root">
                        <ul role="list" class="-my-6 divide-y divide-gray-200">
                            {cart.length == 0 &&
                                <div class="flex justify-center py-6">
                                    Seu carrinho ainda está vazio.
                                </div>
                            }
                            {
                                cart.map((item) => {
                                    return <li class="flex py-6">
                                        <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                            <Image
                                                src={"/" + item.image}
                                                class="h-full w-full object-cover object-center"
                                                alt={item.nome}
                                                width={100}
                                                height={100} />
                                        </div>

                                        <div class="ml-4 flex flex-1 flex-col">
                                            <div>
                                                <div class="flex justify-between text-base font-medium text-gray-900">
                                                    <h3>
                                                        <a href="#">{item.nome}</a>
                                                    </h3>
                                                    <p class="ml-4">{item.displayPreço}</p>
                                                </div>
                                                <p class="mt-1 text-sm text-gray-500">{item.descrição}</p>
                                            </div>
                                            <div class="flex flex-1 items-end justify-between text-sm">
                                                <p class="text-gray-500">Qte {item.quantity}</p>

                                                <div class="flex">
                                                    <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500" onClick={() => removeProductFromCart(item)}>Remover</button>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{subtotal}</p>
                </div>
                <p class="mt-0.5 text-sm text-gray-500">O frete será calculado antes da finalização do pedido</p>
                {
                    cart.length !== 0 &&
                    <div class="mt-6">
                        <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Finalizar pedido</a>
                    </div>
                }

            </div>
        </div>

    </>
}


const Product = ({ product, addToCart }) => {
    return <div>
        <div class="flex justify-center">
            <div
                class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 hover:shadow-2xl transition-shadow duration-300">
                <a href="#!" data-te-ripple-init data-te-ripple-color="light">
                    <Image
                        class="rounded-t-lg"
                        src={`/${product.image}`} // Route of the image file
                        width={384} // Desired size with correct aspect ratio
                        height={150} // Desired size with correct aspect ratio
                        alt="{product.nome}"
                    />
                </a>
                <div class="p-6">
                    <h5
                        class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                        {product.nome}
                    </h5>
                    <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {product.descrição}
                    </p>
                </div>
                <div className='flex p-3 justify-center items-center gap-6 mx-5'>
                    <p class="text-base text-neutral-600 dark:text-neutral-200">
                        {product.displayPreço}
                    </p>
                    <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                        onClick={() => addToCart(product)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className='mx-3'>Adicionar ao carrinho </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
}
const Shop = () => {
    const [state, setState] = useState(null)
    const [products, setProducts] = useState(null)
    const [errors, setErrors] = useState([])
    const [cart, setCart] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [showCart, setShowCart] = useState(false)
    const [count, setCount] = useState(0)
    useEffect(() => {
        fetchProducts()
    }, [])

    useEffect(() => {
        if (cart.length > 0) {
            let total = 0
            cart.map((item) => {
                total += item.preço * item.quantity
            })
            let count = 0
            cart.map((item) => {
                count += item.quantity
            })
            setCount(count)
            setSubtotal(formatPrice(total))
        } else {
            setSubtotal(formatPrice(0))
            setCount(0)
            setShowCart(false)
        }
    }, [cart])

    const csrf = () => axios.get('/sanctum/csrf-cookie')

    async function fetchProducts() {
        await csrf()
        setState('loading')
        axios.get('/api/products').then(
            res => {
                Object.keys(res.data).map((keyName) => {
                    res.data[keyName].displayPreço = formatPrice(res.data[keyName].preço)
                })
                setProducts(res.data)
                setState('done')
            }
        ).catch(err => {
            console.log(errors)
            setErrors(err.response)
        })
    }

    function formatPrice(price) {
        return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    function addToCart(product) {
        product.quantity = 1
        const existingItemIndex = cart.findIndex((item) => item.id === product.id);
        if (existingItemIndex !== -1) {
            const existingItem = cart[existingItemIndex];
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            };
            const updatedCart = [...cart];
            updatedCart[existingItemIndex] = updatedItem;
            setCart(updatedCart);
        } else {
            setCart([...cart, product])
        }
        setShowCart(true)
    }

    function removeProductFromCart(product) {
        setCart(cart.filter((item) => item.id !== product.id))
    }

    function closeCart() {
        setShowCart(false)
    }

    function openCart() {
        setShowCart(true)
    }
    return <>

        {
            state === 'loading' &&
            <div className="grid place-content-center h-80">
                <Loading></Loading>
            </div>
        }
        {
            state === 'done' &&
            <div class="w-full flex">
                {
                    <div className="mx-auto lg:gap-12 lg:grid lg:grid-cols-3 my-8">
                        {
                            Object.keys(products).map((keyName) => (
                                <Product product={products[keyName]} addToCart={addToCart} />
                            ))
                        }
                    </div>
                }
                {
                    showCart &&
                    <Cart cart={cart} subtotal={subtotal} removeProductFromCart={removeProductFromCart} closeCart={closeCart} />
                }
                {
                    !showCart &&
                    <CartButton openCart={openCart} count={count} />
                }
            </div>

        }
    </>
}

export default Shop