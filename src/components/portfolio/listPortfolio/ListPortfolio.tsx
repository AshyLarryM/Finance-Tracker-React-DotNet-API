import { SyntheticEvent } from "react"
import { CardPortfolio } from "../cardPortfolio/CardPortfolio"

interface ListPortfolioProps {
    portfolioValues: string[],
    onPortfolioDelete: (e: SyntheticEvent) => void,
}
export function ListPortfolio({ portfolioValues, onPortfolioDelete }: ListPortfolioProps) {
    return (
        <section id="portfolio">
            <h2 className="mb-8 mt-6 text-3xl font-semibold text-center md:text-4xl text-slate-300">
                MY PORTFOLIO
            </h2>
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
                            <h3 className="text-xl text-slate-400 font-light text-center md:text-xl">
                                Your portfolio is empty. Search and add new equities
                            </h3>
                        </div>
                    )}
                </>
            </div>
        </section>
    )
}
