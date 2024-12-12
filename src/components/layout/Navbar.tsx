import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    {/* <img src={logo} alt="" /> */}
                    <div className="hidden font-bold lg:flex">
                        <Link to='/search' className="text-xl text-teal-400 duration-100 hover:text-teal-600">
                            Search
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:flex items-center space-x-6 text-teal-300">
                    <div className="hover:text-teal-500 duration-200 cursor-pointer font-semibold text-lg mr-6">Login</div>
                    <a
                        href="/signup"
                        className="px-8 py-3 font-bold text-white border border-teal-500 bg-teal-500 duration-200 hover:bg-opacity-20 hover:text-teal-500 rounded-full"
                    >
                        Signup
                    </a>
                </div>
            </div>
        </nav>
    );
}
