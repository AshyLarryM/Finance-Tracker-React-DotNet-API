import { SyntheticEvent } from "react"

interface AddPortfolioProps {
    onPortfolioCreate: (e: SyntheticEvent) => void,
    symbol: string,
}


export default function AddPortfolio({ onPortfolioCreate, symbol}: AddPortfolioProps) {
  return (
    <form onSubmit={onPortfolioCreate} >
        <input readOnly={true} hidden={true} value={symbol} />
        <button type="submit">Add</button>
    </form>
  )
}
