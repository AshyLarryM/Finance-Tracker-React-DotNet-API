import { Link } from "react-router-dom";
import { HomeIcon, Square3Stack3DIcon, ScaleIcon, BanknotesIcon } from "@heroicons/react/24/solid";

export function Sidebar() {
    return (
        <nav className="block py-4 px-6 top-0 bottom-0 w-64 shadow-xl left-0 absolute flex-row flex-nowrap md:z-10 z-9999 transition-all duration-300 ease-in-out transform md:translate-x-0 -translate-x-full">
            <button className="md:hidden flex items-center justify-center cursor-pointer w-6 h-10 text-xl leading-none rounded-r  absolute top-1/2 -right-24-px focus:outline-none z-9998">
                <i className="fas fa-ellipsis-v"></i>
            </button>
            <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col opacity-100 relative mt-4 overflow-y-auto overflow-x-hidden h-auto z-40 items-center flex-1 rounded w-full">
                    <div className="md:flex-col md:min-w-full flex flex-col list-none text-sm">
                        <Link to="company-profile" className="flex md:min-w-full text-slate-400 hover:text-slate-200 duration-300 uppercase font-bold pt-1 pb-4 no-underline">
                            <HomeIcon className="h-6 text-teal-500" />
                            <h6 className="ml-3">Company Profile</h6>
                        </Link>
                        <Link to="income-statement" className="flex md:min-w-full mt-3 text-slate-400 hover:text-slate-200 duration-300 uppercase font-bold pt-1 pb-4 no-underline">
                            <Square3Stack3DIcon className="h-6 text-teal-500" />
                            <h6 className="ml-3">Income Statement</h6>
                        </Link>
                        <Link to="balance-sheet" className="flex md:min-w-full mt-3 text-slate-400 hover:text-slate-200 duration-300 uppercase font-bold pt-1 pb-4 no-underline">
                            <ScaleIcon className="h-6 text-teal-500" />
                            <h6 className="ml-3">Balance Sheet</h6>
                        </Link>
                        <Link to="cashflow-statement" className="flex md:min-w-full mt-3 text-slate-400 hover:text-slate-200 duration-300 uppercase font-bold pt-1 pb-4 no-underline">
                            <BanknotesIcon className="h-6 text-teal-500" />
                            <h6 className="ml-3">Cashflow Statement</h6>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>

    )
}
