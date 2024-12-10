interface CardProps {
    companyName: string,
    ticker: string,
    price: number,
}

export default function Card({ companyName, ticker, price }: CardProps) {
    return (
        <div className='w-[400px] h-[550px] flex flex-col text-center items-center p-14 overflow-hidden shadow-lg rounded-lg'>
            <img className='rounded-full h-[180px] w-[180px] m-1' src="https://picsum.photos/200" alt="Image" />
            <div className="m-3">
                <h2 className="text-xl font-semibold">{ticker}</h2>
                <p>${price}</p>
            </div>
            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. .</p>
        </div>
    )
}
