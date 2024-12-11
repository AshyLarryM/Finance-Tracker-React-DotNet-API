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
        <div className="mx-auto max-w-4xl rounded-lg">
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
                    );
                })
            ) : (
                <p className="text-teal-500 mb-3 mt-3 text-2xl font-semibold text-center md:text-4xl">No Results!</p>
            )}
        </div>
    )
}
