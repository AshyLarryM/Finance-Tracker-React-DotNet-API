import { SyntheticEvent } from "react";
import { CompanySearch } from "../../types/company";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";

interface CardListProps {
    searchResults: CompanySearch[],
    onPortfolioCreate: (e: SyntheticEvent) => void,
}

export default function CardList({ searchResults, onPortfolioCreate }: CardListProps) {
    return (
        <div className="mx-auto max-w-4xl border-2 border-slate-700 rounded-lg shadow-lg">
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
                    );
                })
            ) : (
                <p className="text-teal-600 mb-3 mt-3 text-2xl font-medium text-center md:text-4xl">No Results!</p>
            )}
        </div>
    )
}
