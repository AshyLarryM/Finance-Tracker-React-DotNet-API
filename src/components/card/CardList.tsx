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
        <>
            {searchResults.length > 0 ? (
                searchResults.map((result) => {
                    return (
                        <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortfolioCreate={onPortfolioCreate} />
                    );
                })
            ) : (
                <h1>No Results</h1>
            )}
        </>
    )
}
