import { SyntheticEvent } from "react"
import { DeletePortfolio } from "../deletePortfolio/DeletePortfolio"

interface CardPortfolioProps {
    portfolioValue: string,
    onPortfolioDelete: (e: SyntheticEvent) => void,
}
export function CardPortfolio({ portfolioValue, onPortfolioDelete }: CardPortfolioProps) {
    return (
        <div className="flex flex-col bg-slate-800 hover:bg-slate-700 duration-500 w-full p-8 space-y-4 text-center border-2 border-slate-800 rounded-xl shadow-lg md:w-1/3">
            <p className="text-xl font-bold text-teal-100">{portfolioValue}</p>
            <DeletePortfolio
                onPortfolioDelete={onPortfolioDelete}
                portfolioValue={portfolioValue}
            />
        </div>
    )
}