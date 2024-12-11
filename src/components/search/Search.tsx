import { SyntheticEvent } from "react"
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
interface SearchProps {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined,
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export function Search({ onSearchSubmit, search, handleSearchChange }: SearchProps) {
    return (
        <section className="relative">
            <div className="max-w-sm mx-auto  space-y-6">
                <form
                    className="form relative flex flex-col w-full p-10 space-y-4 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
                    onSubmit={onSearchSubmit}
                >
                    <div className="relative flex-1">
                        <input
                            className="w-full p-3 border-2 text-center border-slate-600 text-slate-300 rounded-lg placeholder-slate-400 focus:outline-none bg-slate-700"
                            id="search-input"
                            placeholder="Search companies"
                            value={search}
                            onChange={handleSearchChange}
                        />
                        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    </div>
                </form>
            </div>
        </section>
    )
}
