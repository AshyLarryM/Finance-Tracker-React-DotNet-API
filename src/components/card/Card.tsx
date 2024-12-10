import { SyntheticEvent } from "react"
import { CompanySearch } from "../../types/company"
import AddPortfolio from "../portfolio/addPortfolio/AddPortfolio"

interface CardProps {
    id: string,
    searchResult: CompanySearch,
    onPortfolioCreate: (e: SyntheticEvent) => void,
}

export default function Card({ id, searchResult, onPortfolioCreate }: CardProps) {
    return (
        <div className='w-[400px] h-[550px] flex flex-col text-center items-center p-14 overflow-hidden shadow-lg rounded-lg'>
            <img className='rounded-full h-[180px] w-[180px] m-1' src="https://picsum.photos/200" alt="company logo" />
            <div className="m-3">
                <h2 className="text-xl font-semibold">{searchResult.symbol}</h2>
                <p>${searchResult.currency}</p>
            </div>
            <p className="font-light">
                {searchResult.exchangeShortName} - {searchResult.stockExchange}
            </p>
            <AddPortfolio onPortfolioCreate={onPortfolioCreate} symbol={searchResult.symbol} />
        </div>
    )
}
