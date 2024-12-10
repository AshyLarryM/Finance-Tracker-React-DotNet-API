import Card from "./Card";

interface CardListProps {

}

export default function CardList() {
    return (
        <div>
            <Card companyName="Apple" ticker="AAPL" price={225} />
            <Card companyName="Microsoft" ticker="MSFT" price={225} />
            <Card companyName="Tesla" ticker="TSLA" price={300} />
        </div>
    )
}
