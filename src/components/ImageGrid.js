import Image from 'next/image';
const ImageGrid = ({ images, section }) => {
    return <>
        <div class="mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div class="m-1 flex flex-wrap md:-m-2">
                {images != null && images.map((image) => {
                    return <div class="flex flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <Image src={`/${image}`} width={300} height={300} />
                        </div>
                    </div>
                })}
                {
                    section != null  && 
                    <div class="1 flex flex-wrap md:-m-2">
                        <div class="flex flex-wrap">
                            <div class="w-full p-1 md:p-2 border-solid border-2 border-indigo-600 mx-3">
                                foto de {section} aqui
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-full p-1 md:p-2 border-solid border-2 border-indigo-600 mx-3">
                                foto de {section} aqui
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-full p-1 md:p-2 border-solid border-2 border-indigo-600 mx-3">
                                foto de {section} aqui
                            </div>
                        </div>
                    </div>
                }



            </div>
        </div>
    </>
}

export default ImageGrid