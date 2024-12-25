import { SyntheticEvent } from "react"
import { DeletePortfolio } from "../deletePortfolio/DeletePortfolio"
import { Link } from "react-router-dom"
import { PortfolioGet } from "../../../models/Portfolio"

interface CardPortfolioProps {
    portfolioValue: PortfolioGet,
    onPortfolioDelete: (e: SyntheticEvent) => void,
}
export function CardPortfolio({ portfolioValue, onPortfolioDelete }: CardPortfolioProps) {
    return (
        <div className="flex flex-col my-8 bg-slate-800 hover:bg-slate-700 duration-500 w-full p-8 space-y-4 text-center border-2 border-slate-800 rounded-xl shadow-lg md:w-1/3">
            <Link to={`/company/${portfolioValue.symbol}/company-profile`} className="text-xl font-bold text-teal-100">{portfolioValue.symbol}</Link>
            <p className="text-teal-100">Cost: ${portfolioValue.purchase}</p>
            <DeletePortfolio
                onPortfolioDelete={onPortfolioDelete}
                portfolioValue={portfolioValue.symbol}
            />
        </div>
    )
}
