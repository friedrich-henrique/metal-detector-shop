const Bar = ({ pages, changePage }) => {
    return <>
        <div className="flex gap-4 items-center h-6">
            { pages.map((page) => {
                return <button className="w-5 h-5 rounded-full bg-blue-500 hover:bg-blue-800 text-white mx-5" onClick={() => changePage(page)}>
                </button>
            })}
            <a href="shop">
                <span className='text-blue-500 hover:text-blue-800'>
                    Ir para loja
                </span>
            </a>
        </div>

    </>
}
export default Bar