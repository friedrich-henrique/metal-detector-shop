import Loading from '@/components/Loading';
import axios from '@/lib/axios'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const ShippingDetails = ({ changeCartState, cart, resetParentCart }) => {
    const csrf = () => axios.get('/sanctum/csrf-cookie')
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [errors, setErrors] = useState({});

    const setParentState = (state) => {
        changeCartState(state)
    }

    const notifySuccess = () =>
        toast.success('Pedido realizado!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        const notifyError = () =>
        toast.error('Tivemos um erro ao processar seu pedido!', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const handleSubmit = async (e) => {
        await csrf()
        setParentState('loading')

        e.preventDefault();
        // handle form submission logic here
        axios.post('/api/checkout', {
            email: email,
            endereco: endereco,
            cidade: cidade,
            estado: estado,
            cep: cep,
            telefone: telefone,
            products: cart
        }).then(
            setParentState('success'),
            resetParentCart(),
            notifySuccess()
        ).catch(err => {
            notifyError()
            setParentState('error'),
            console.log(errors)
            setErrors(err.response)
        })
    };

    return <>
        <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div class="flex justify-between text-base font-medium font-semibold text-gray-900">
                <p>Contato</p>
            </div>

            <p class="mt-0.5 text-sm text-gray-500 my-3">Enviaremos um orçamento para você assim em até dois dias úteis.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
                    <input
                        id="email"
                        type="email"
                        className="w-full p-2 border rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="endereco" className="block mb-2 font-semibold">Endereço</label>
                    <input
                        id="endereco"
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={endereco}
                        onChange={(e) => setEndereco(e.target.value)}
                        required
                    />
                </div>

                <div class="flex flex-col w-full sm:flex-row justify-between">
                    <div className="mb-4 lg:w-1/2 lg:mr-2">
                        <label htmlFor="cidade" className="mb-2 font-semibold">Cidade</label>
                        <input
                            id="cidade"
                            type="text"
                            className="w-full p-2 border rounded-md"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4 lg:w-1/2 lg:ml-2">
                        <label htmlFor="estado" className="mb-2 font-semibold">Estado</label>
                        <input
                            id="estado"
                            type="text"
                            className="w-full p-2 border rounded-md"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
                            required
                        />
                    </div>
                </div>


                <div className="mb-4">
                    <label htmlFor="cep" className="block mb-2 font-semibold">CEP</label>
                    <input
                        id="cep"
                        type="text"
                        className="w-full p-2 border rounded-md"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="telefone" className="block mb-2 font-semibold">Telefone</label>
                    <input
                        id="telefone"
                        type="tel"
                        className="w-full p-2 border rounded-md"
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                        required
                    />
                </div>
            </form>
            {

                <div class="mt-6">
                    <button
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        onClick={handleSubmit}
                    >
                        Finalizar pedido
                    </button>
                </div>
            }
        </div>
    </>
}

const Cart = ({ cart, removeProductFromCart, closeCart, resetParentCart }) => {
    const [state, setState] = useState(null)

    const changeCartState = (state) => {
        setState(state)
    }
    return <>
        {
            state === 'loading'
                ?
                <div className="grid place-content-center h-80">
                    <Loading></Loading>
                </div>
                :
                <div>
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
                            {
                                cart.length !== 0 &&
                                <ShippingDetails changeCartState={changeCartState} cart={cart} resetParentCart={resetParentCart} />
                            }
                        </div>
                    </div>
                </div>
        }
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
                        alt={`Imagem do ${product.nome}`}
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
                    <button
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
                        onClick={() => addToCart(product)} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className='mx-3'>Adicionar ao pedido </span>
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
    const [cartState, setCartState] = useState('closed')
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

    function resetCart() {
        setCart([])
        setCartState('closed')
    }

    function formatPrice(price) {
        return price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }

    function addToCart(product) {
        product.quantity = 1
        const existingItemIndex = cart.findIndex((item) => item.id === product.id);
        setCartState('open')
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
        setCartState('open')
    }

    function removeProductFromCart(product) {
        setCart(cart.filter((item) => item.id !== product.id))
    }

    function closeCart() {
        setCartState('closed')
    }

    function openCart() {
        setCartState('open')
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
            <div class="w-full flex flex-col-reverse md:flex-row">
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
                    cartState == 'open' &&
                    <div class="flex flex-col overflow-y-scroll h-full bg-white shadow-xl lg:w-1/4 right-0 transition">
                        <Cart cart={cart} subtotal={subtotal} removeProductFromCart={removeProductFromCart} closeCart={closeCart} resetParentCart={resetCart} />
                    </div>
                }
                {
                    cartState === 'closed' &&
                    <CartButton openCart={openCart} count={count} />
                }

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
            </div>
        }
    </>
}

export default Shop