const Bar = ({ pages, changePage }) => {
    return <>
        {pages.map((page) => {
            return <button className="w-5 h-5 rounded-full bg-blue-500 hover:bg-blue-800 text-white mx-5" onClick={() => changePage(page)}>
            </button>
        })}
    </>
}
export default Bar