
export function Navbar() {
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">
                    {/* <img src={logo} alt="" /> */}
                    <div className="hidden font-bold lg:flex">
                        <a href="" className="text-xl text-teal-400 duration-100 hover:text-teal-600">
                            Dashboard
                        </a>
                    </div>
                </div>
                <div className="hidden lg:flex items-center space-x-6 text-teal-300">
                    <div className="hover:text-teal-500 duration-200 cursor-pointer font-semibold text-lg mr-6">Login</div>
                    <a
                        href=""
                        className="px-8 py-3 font-bold rounded text-white border border-teal-500 bg-teal-500 duration-200 hover:bg-opacity-20 hover:text-teal-500"
                    >
                        Signup
                    </a>
                </div>
            </div>
        </nav>
    );
}
