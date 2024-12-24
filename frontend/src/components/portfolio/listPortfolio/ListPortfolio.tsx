import { SyntheticEvent } from "react"
import { CardPortfolio } from "../cardPortfolio/CardPortfolio"
import { PortfolioGet } from "../../../models/Portfolio";

interface ListPortfolioProps {
    portfolioValues: PortfolioGet[],
    onPortfolioDelete: (e: SyntheticEvent) => void,
}
export function ListPortfolio({ portfolioValues, onPortfolioDelete }: ListPortfolioProps) {
    return (
        <section id="portfolio" className="my-12">
            <div className="border-b border-b-slate-600 mx-auto max-w-7xl px-4">
                <h2 className="mb-2 mt-6 text-3xl font-semibold md:text-3xl text-center sm:text-left text-slate-300">
                    MY PORTFOLIO
                </h2>
            </div>
            <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
                <>
                    {portfolioValues.length > 0 ? (
                        portfolioValues.map((portfolioValue) => {
                            return (
                                <CardPortfolio
                                    portfolioValue={portfolioValue}
                                    onPortfolioDelete={onPortfolioDelete}
                                />
                            );
                        })
                    ) : (
                        <div className="flex items-center justify-center w-full my-8">
                            <h3 className="text-xl text-slate-400 font-light text-center md:text-lg">
                                Your portfolio is empty. Search and add new equities
                            </h3>
                        </div>
                    )}
                </>
            </div>
        </section>
    )
}
