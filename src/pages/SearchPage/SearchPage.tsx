import React, { SyntheticEvent, useState } from 'react'
import { Navbar } from '../../components/layout/Navbar'
import { Search } from '../../components/search/Search'
import CardList from '../../components/card/CardList'
import { ListPortfolio } from '../../components/portfolio/listPortfolio/ListPortfolio'
import { searchCompanies } from '../../apiRepository'
import { CompanySearch } from '../../types/company'

export default function SearchPage() {
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	const [serverError, setServerError] = useState<string>("");

	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value);
		console.log(e)
	}

	async function onSearchSubmit(e: SyntheticEvent) {
		e.preventDefault();
		const result = await searchCompanies(search)
		if (typeof result === 'string') {
			setServerError(result);
		} else if (Array.isArray(result.data)) {
			setSearchResult(result.data)
		}
		console.log(searchResult);
	}

	function onPortfolioCreate(e: any) {
		e.preventDefault();
		const exists = portfolioValues.find((value) => value === e.target[0].value);
		if (exists) {
			return;
		}
		const updatedPortfolio = [...portfolioValues, e.target[0].value]
		setPortfolioValues(updatedPortfolio);
	}

	function onPortfolioDelete(e: any) {
		e.preventDefault();

		const removed = portfolioValues.filter((value) => {
			return value !== e.target[0].value;
		});
		setPortfolioValues(removed);
	}
	console.log(portfolioValues);
    return (
        <div className='bg-slate-900 h-screen'>
			<Search
				search={search}
				onSearchSubmit={onSearchSubmit}
				handleSearchChange={handleSearchChange}
			/>

			{serverError && <h1 className='font-bold text-xl'>{serverError}</h1>}
			<CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />

			<ListPortfolio portfolioValues={portfolioValues} onPortfolioDelete={onPortfolioDelete} />
		</div>
    )
}