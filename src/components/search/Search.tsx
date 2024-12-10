import { SyntheticEvent } from "react"

interface SearchProps {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined,
    handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export default function Search({ onSearchSubmit, search, handleSearchChange}: SearchProps) {

    return (
        <>
        <form onSubmit={onSearchSubmit} >
            <input className="border border-black" value={search} onChange={handleSearchChange} />
        </form>
        </>
    )
}
