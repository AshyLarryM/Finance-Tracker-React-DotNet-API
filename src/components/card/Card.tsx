import { SyntheticEvent } from "react"
import { CompanySearch } from "../../types/company"
import AddPortfolio from "../portfolio/addPortfolio/AddPortfolio"
import { Link } from "react-router-dom"

interface CardProps {
    id: string,
    searchResult: CompanySearch,
    onPortfolioCreate: (e: SyntheticEvent) => void,
}

export default function Card({ id, searchResult, onPortfolioCreate }: CardProps) {
    return (
        <div
            className="flex flex-col items-center justify-between w-full p-6 bg-slate-900 border-b border-b-slate-600 md:flex-row"
            key={id}
            id={id}
        >
            <Link to={`/company/${searchResult.symbol}/company-profile`} className="font-bold text-center text-slate-300 md:text-left">
                {searchResult.name} ({searchResult.symbol})
            </Link>
            <p className="text-slate-300">{searchResult.currency}</p>
            <p className="font-bold text-slate-500">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
        </div>
    )
}
