import { Link } from 'react-router-dom';

export function Hero() {
    return (
        <section id="hero">
            <div className="container flex flex-col-reverse mx-auto p-8 lg:flex-row">
                <div className="flex flex-col space-y-10 mb-44 m-10 lg:m-10 xl:m-20 lg:mt:16 lg:w-1/2 xl:mb-52">
                    <h1 className="text-5xl text-teal-500 font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                        Financial data with no news.
                    </h1>
                    <p className="text-2xl text-center font-light text-slate-400 lg:max-w-md lg:text-left">
                        Search relevant financial documents without fear mongering and fake
                        news.
                    </p>
                    <div className="mx-auto lg:mx-0 flex">
                        <Link
                            to='/search'
                            className="py-5 px-10 text-2xl font-bold text-white bg-teal-500 rounded-full lg:py-4  border-teal-500 bg-teal-500 duration-200 hover:bg-opacity-20 hover:text-teal-500"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                <div className="mb-24 mx-auto md:w-180 md:px-10 lg:mb-0 lg:w-1/2">
                    {/* <img src={hero} alt="" /> */}
                </div>
            </div>
        </section>
    );
}
