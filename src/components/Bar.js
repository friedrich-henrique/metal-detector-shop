const Bar = ({ categories, changeCategory }) => {
    return <>
        <div className="px-2">
            {categories.map((cat) => {
                return <a className="mx-5 underline decoration-sky-500 text-l text-sky-400 hover:text-white font-semibold whitespace-nowrap">
                    <span className='' key={cat} onClick={() => changeCategory(cat)}>{
                        cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </span>
                </a>
            })}
            <a className="mx-5 underline decoration-sky-500 text-l text-sky-400 hover:text-white font-semibold whitespace-nowrap" href="/shop">
                Ir para loja
            </a>
        </div>
    </>
}
export default Bar