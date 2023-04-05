import { useRouter } from "next/router";
import { useState } from "react";
import Image from 'next/image';


const Checkout = () => {
    const router = useRouter();
    const { subtotal, cart } = router.query;
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [frete, setFrete] = useState(0);
    const [total, setTotal] = useState(subtotal + frete);
    const [items, setItems] = useState('');
    const [selectedShipping, setSelectedShipping] = useState('');

    cart ? setItems(JSON.parse(cart)) : setItems('')
    const handleRadioChange = (event) => {
        setSelectedShipping(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // handle form submission logic here
    };
    return <>
        <div>
            <div class="grid bg-gray-50 sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
                <div class="mt-10 px-4 pt-8 lg:mt-0">
                    <p class="text-xl font-medium">Detalhes de envio</p>
                    <p class="text-gray-400">Complete seu pedido informando seu endereço e dados de pagamento.</p>
                    <div class="pt-8">
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
                            <div class="mb-5 grid gap-6">
                                <p class="mt-4 text-lg font-medium">Transportes disponíveis</p>
                                <div class="relative">
                                    <input
                                        class="peer hidden"
                                        id="radio_1"
                                        type="radio"
                                        name="radio"
                                        value="correios"
                                        checked={selectedShipping === "correios"}
                                        onChange={handleRadioChange}
                                    />
                                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                    <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_1">
                                        <div class="ml-5">
                                            <span class="mt-2 font-semibold">Correios</span>
                                            <p class="text-slate-500 text-sm leading-6">Entrega: 10-15 dias</p>
                                        </div>
                                    </label>
                                </div>
                                <div class="relative">
                                    <input
                                        class="peer hidden"
                                        id="radio_2"
                                        type="radio"
                                        name="radio"
                                        value="transportadora"
                                        checked={selectedShipping === "transportadora"}
                                        onChange={handleRadioChange}
                                    />
                                    <span class="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                    <label class="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" for="radio_2">
                                        <div class="ml-5">
                                            <span class="mt-2 font-semibold">Transportadora</span>
                                            <p class="text-slate-500 text-sm leading-6">Entrega: 5-7 dias</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <div class="px-4 pt-8">
                    <p class="text-xl font-medium">Resumo do pedido</p>
                    <p class="text-gray-400">Cheque seus items e selecione o método de envio e pagamento.</p>
                    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">

                        {
                            items.map((item) => {
                                return <div class="flex flex-col rounded-lg bg-white sm:flex-row my-5">
                                    <div className="h-24 w-40">
                                        <Image
                                            src={"/" + item.image}
                                            class="h-full w-full object-cover object-center"
                                            alt={item.nome}
                                            width={100}
                                            height={100} />
                                    </div>

                                    <div class="flex w-full flex-col px-4 py-4">
                                        <span class="font-semibold">{item.nome}</span>
                                        <p class="text-gray-400">{item.displayPreço}</p>
                                    </div>
                                </div>
                            })
                        }

                        <div class="mt-6 border-t border-b py-2">
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <p class="font-semibold text-gray-900">{subtotal}</p>
                            </div>
                            <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Frete</p>
                                <p class="font-semibold text-gray-900">{frete}</p>
                            </div>
                        </div>
                        <div class="mt-6 flex items-center justify-between">
                            <p class="text-sm font-medium text-gray-900">Total</p>
                            <p class="text-2xl font-semibold text-gray-900">{total}</p>
                        </div>

                        <button type="submit" className="w-full py-2 mt-4 mb-8 3 font-medium font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                            Enviar pedido
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Checkout