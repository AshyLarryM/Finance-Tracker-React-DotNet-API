import { useOutletContext } from "react-router";
import { CompanyCashFlow } from "../../types/company";
import { useEffect, useState } from "react";
import { getCashflowStatement } from "../../apiRepository";
import { Table } from "../table/Table";
import { Spinner } from "../spinner/Spinner";

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) => company.operatingCashFlow,
    },
    {
        label: "Investing Cashflow",
        render: (company: CompanyCashFlow) =>
            company.netCashUsedForInvestingActivites,
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) =>
            company.netCashUsedProvidedByFinancingActivities,
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) => company.cashAtEndOfPeriod,
    },
    {
        label: "CapEX",
        render: (company: CompanyCashFlow) => company.capitalExpenditure,
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) => company.commonStockIssued,
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) => company.freeCashFlow,
    },
];

export function CashflowStatement() {
    const ticker = useOutletContext<string>();
    const [cashFlow, setCashFlow] = useState<CompanyCashFlow[]>();

    useEffect(() => {
        async function fetchCashFlow() {
            const result = await getCashflowStatement(ticker!);
            setCashFlow(result!.data);
        }
        fetchCashFlow();
    }, []);


    return (
        <>
            {cashFlow ? (
                <>
                    <Table config={config} data={cashFlow} />
                </>
            ) : (
                <Spinner />
            )}

        </>
    )
}
