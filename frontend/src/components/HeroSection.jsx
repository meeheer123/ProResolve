import heroDemoUrl from '../assets/demo.png'
import Tag from './Tag'

const HeroSection = () => {
    return (
        <section className='hero-section text-center mt-32 flex flex-col'>
            <Tag>
                <div className='flex items-center cursor-pointer'>
                    <span>
                        <span>ProResolve v0.1.0</span>
                    </span>
                </div>
            </Tag>
            <h1 className='text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl'>
                Launch Your SaaS
                <br />
            <span className='bg-gradient-to-r from-pink-500 via-indigo-500 to-pink-500 bg-clip-text text-transparent'>
                    In Minutes Not Days
                </span>
            </h1>
            <h2 className="mt-5 text-gray-600 sm:text-xl max-w-2xl mx-auto px-4">ProResolve is an open-source tool for developers who want to track the errors in their SaaS products.</h2>
            <div className='mx-auto mt-5 flex max-w-fit space-x-4'>
                <a href="#get-started" className='rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2'>Get Started</a>
                <a href="#features" className='rounded-full mx-auto max-w-fit border px-5 py-2 text-sm font-medium shadow-sm border-gray-200 bg-white text-black hover:ring-gray-300 hover:ring-2'>Learn More</a>
            </div>
            <div className='mt-5 items-center justify-center'>
                <img src={heroDemoUrl} alt="hero-demo" className='mx-auto max-h-[300px] sm:max-h-[500px]'></img>
            </div>
        </section>
    )
}

export default HeroSection;
