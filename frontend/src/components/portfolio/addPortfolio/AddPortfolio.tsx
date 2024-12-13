import { SyntheticEvent } from "react"

interface AddPortfolioProps {
    onPortfolioCreate: (e: SyntheticEvent) => void,
    symbol: string,
}


export default function AddPortfolio({ onPortfolioCreate, symbol }: AddPortfolioProps) {
    return (
        <form onSubmit={onPortfolioCreate} >
            <input readOnly={true} hidden={true} value={symbol} />
            <button className="bg-slate-700 hover:bg-slate-800 duration-200 text-teal-500 px-8 py-2 rounded-3xl" type="submit">Add</button>
        </form>
    )
}
