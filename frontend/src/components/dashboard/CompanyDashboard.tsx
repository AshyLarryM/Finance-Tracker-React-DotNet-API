import { Outlet } from "react-router-dom";

interface CompanyDashboardProps {
    children: React.ReactNode
    ticker: string,
}

export function CompanyDashboard({ children, ticker }: CompanyDashboardProps) {
    return (
        <div className="relative md:ml-64 w-full">
            <div className="relative pt-20 pb-32">
                <div className="px-4 md:px-6 mx-auto w-full">
                    <div>
                        <div className="flex flex-wrap">{children}</div>
                        <div className="flex flex-wrap">{<Outlet context={ticker} />}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
