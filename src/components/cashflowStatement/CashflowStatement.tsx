import { useOutletContext } from "react-router";
import { CompanyCashFlow } from "../../types/company";
import { useEffect, useState } from "react";
import { getCashflowStatement } from "../../apiRepository";
import { Table } from "../table/Table";
import { Spinner } from "../spinner/Spinner";
import { formatLargeMonetaryNumber } from "../../utils/NumberFormatting";

const config = [
    {
        label: "Date",
        render: (company: CompanyCashFlow) => company.date,
    },
    {
        label: "Operating Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.operatingCashFlow),
    },
    {
        label: "Investing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.netCashUsedForInvestingActivites),
    },
    {
        label: "Financing Cashflow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(
                company.netCashUsedProvidedByFinancingActivities
            ),
    },
    {
        label: "Cash At End of Period",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.cashAtEndOfPeriod),
    },
    {
        label: "CapEX",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.capitalExpenditure),
    },
    {
        label: "Issuance Of Stock",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.commonStockIssued),
    },
    {
        label: "Free Cash Flow",
        render: (company: CompanyCashFlow) =>
            formatLargeMonetaryNumber(company.freeCashFlow),
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
