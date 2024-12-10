import { SyntheticEvent, useState } from 'react';
import CardList from './components/card/CardList';
import Search from './components/search/Search';
import { CompanySearch } from './types/company';
import { searchCompanies } from './apiRepository';

function App() {

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

	function onPortfolioCreate(e: SyntheticEvent) {
		e.preventDefault();
		console.log(e);
	}


	return (
		<div>
			<Search onSearchSubmit={onSearchSubmit} search={search} handleSearchChange={handleSearchChange} />
			{serverError && <h1 className='font-bold text-xl'>{serverError}</h1>}
			<CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />
		</div>
	);
}

export default App;
