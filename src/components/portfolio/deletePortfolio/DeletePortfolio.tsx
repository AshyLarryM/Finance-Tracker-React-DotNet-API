import { SyntheticEvent } from "react"

interface DeletePortfolioProps {
    onPortfolioDelete: (e: SyntheticEvent) => void,
    portfolioValue: string,
}

export function DeletePortfolio({ onPortfolioDelete, portfolioValue }: DeletePortfolioProps) {
    return (
        <div>
            <form onSubmit={onPortfolioDelete}>
                <input hidden={true} value={portfolioValue} />
                <button className="px-8 py-2 bg-red-400 hover:bg-red-500 duration-200 rounded-3xl text-white">X</button>
            </form>
        </div>
    )
}
