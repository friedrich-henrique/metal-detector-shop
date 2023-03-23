import Image from 'next/image';
const ImageGrid = ({category}) => {
    return <>
        {
            category === 'detectores' &&
            <div className='grid grid-cols-3'>
                <div className="col m-5">
                    <Image
                        src="/detector-plano.jpg" // Route of the image file
                        height={220} // Desired size with correct aspect ratio
                        width={220} // Desired size with correct aspect ratio
                        alt="Savel logo"
                    />
                </div>
                <div className="col m-5">
                    <Image
                        src="/detector-curvo.jpg" // Route of the image file
                        height={220} // Desired size with correct aspect ratio
                        width={220} // Desired size with correct aspect ratio
                        alt="Savel logo"
                    />
                </div>
                <div className="row-start-1 m-5">
                    <Image
                        src="/detector-tunel.jpg" // Route of the image file
                        height={220} // Desired size with correct aspect ratio
                        width={220} // Desired size with correct aspect ratio
                        alt="Savel logo"
                    />
                </div>
            </div>
        }

        {
            category === 'britagem' &&
            <div className='h-full'>
                Aqui fotos de equipamentos de britagem
            </div>
        }

        {
            category === 'máquinas' &&
            <div className='h-full'>
                Aqui fotos de equipamentos de máquinas
            </div>
        }
    </>
}

export default ImageGrid