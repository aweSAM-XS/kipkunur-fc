import logo from '../assets/images/logo.png';

const Hero = () => {
    return (
        <section className='h-screen  bg-primary text-white grid place-items-center'>
            <div className='md:w-4/5 flex flex-col md:flex-row justify-center items-center h-full'>
                <img src={logo} alt='logo' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-white text-center leading-tight'>
                        Welcome to Kipkunur Football Club
                    </h1>
                    <p className='mt-4 text-lg md:text-xl text-center'>
                        Join us for an exciting season of football!
                    </p>
                    <div className='flex gap-4'>
                        <button className='mt-6 bg-secondary text-white py-2 px-6 rounded-full hover:bg-secondary hover:scale-105 hover:font-bold transition duration-300'>
                            Buy Tickets
                        </button>
                        <button className='mt-6 bg-secondary text-white py-2 px-6 rounded-full hover:bg-secondary hover:scale-105 hover:font-bold transition duration-300'>
                            Support Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
