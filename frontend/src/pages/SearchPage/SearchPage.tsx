import React, { SyntheticEvent, useEffect, useState } from 'react'
import { Search } from '../../components/search/Search'
import CardList from '../../components/card/CardList'
import { ListPortfolio } from '../../components/portfolio/listPortfolio/ListPortfolio'
import { searchCompanies } from '../../apiRepository'
import { CompanySearch } from '../../types/company'
import { PortfolioGet } from '../../models/Portfolio'
import { portfolioAddApi, portfolioDeleteApi, portfolioGetApi } from '../../services/PortfolioService'
import { useAuth } from '../../context/useAuth'
import { toast } from 'react-toastify'

export default function SearchPage() {
	const { token } = useAuth();
	const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
	const [search, setSearch] = useState<string>("");
	const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
	const [serverError, setServerError] = useState<string>("");

	function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSearch(e.target.value);
		console.log(e)
	}

	function getPortfolio() {
		if (!token) {
			toast.warning("You must be logged in to view portfolio!");
			return
		}
		portfolioGetApi(token).then((response) => {
			if (response?.data) {
				setPortfolioValues(response?.data)
			}
		}).catch((e) => {
			toast.warning("Could not get portfolio values");
		})
	};

	useEffect(() => {
		getPortfolio();
	}, []);

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
		console.log("Created Portfolio Token: ", token);
		if (!token) {
			toast.warning("You need to be logged into add to portfolio");
			return;
		}
		e.preventDefault();

		portfolioAddApi(e.target[0].value, token).then((response) => {
			if (response?.status === 204) {
				toast.success("Stock added to portfolio!");
				getPortfolio();
			}
		}).catch((e) => {
			toast.warning("Could not create portfolio!");
		})
	}

	function onPortfolioDelete(e: any) {
		e.preventDefault();
		if (!token) {
			toast.warning("You need to be logged into delete from portfolio");
			return;
		}
		portfolioDeleteApi(e.target[0].value, token).then((response) => {
			if (response?.status === 200) {
				toast.success("Stock deleted from portolio");
				getPortfolio();
			}
		});
	};

	return (
		<div className='bg-slate-900 h-screen'>
			<Search
				search={search}
				onSearchSubmit={onSearchSubmit}
				handleSearchChange={handleSearchChange}
			/>

			{serverError && <h1 className='font-bold text-xl'>{serverError}</h1>}
			<CardList searchResults={searchResult} onPortfolioCreate={onPortfolioCreate} />

			<ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete} />
		</div>
	)
}