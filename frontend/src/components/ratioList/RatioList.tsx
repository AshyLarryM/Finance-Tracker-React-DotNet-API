interface RatioListProps {
    config: any,
    data: any,
}

export function RatioList({ config, data }: RatioListProps) {
    const renderedRows = config.map((row: any) => {
        return (
            <li className="py-3 px-4 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        <p className="text-md font-medium text-slate-300 truncate">
                            {row.label}
                        </p>
                        <p className="text-md text-slate-400 truncate">
                            {row.subTitle && row.subTitle}
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-slate-300">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div className="bg-slate-800 rounded shadow px-4 ml-4 mt-4 mb-2 p-4 sm:p-6  w-full">
            <ul className="divide-y divide-slate-700">{renderedRows}</ul>
        </div>
    )
}
