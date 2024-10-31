import { motion } from 'framer-motion'

const Slider = ({images}) => {
    const imagesArr = [...images]
    return (
        <div>
            {imagesArr.map((image, index) => (
                <div key={image.id}>
                    <img src={image.logo} alt={image.name} className='max-w-full opacity-75 h-full object-contain'/>
                </div>
            ))}
        </div>
    )
}

export default Slider