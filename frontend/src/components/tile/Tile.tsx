interface TileProps {
    title: string,
    subTitle: string,
}

export function Tile({ title, subTitle }: TileProps) {
    return (
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-slate-800 rounded-lg mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1 text-center">
                            <h5 className="uppercase font-bold  text-xs text-teal-500">
                                {title}
                            </h5>
                            <span className="font-bold text-xl text-slate-200">{subTitle}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
