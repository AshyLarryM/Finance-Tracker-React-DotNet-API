export type PortfolioGet = {
    id: number,
    symbol: string,
    purchase: number,
    lastDiv: number,
    industry: string,
    marketCat: number,
    comments: any,
}

export type PortfolioPost = {
    symbol: string,
}