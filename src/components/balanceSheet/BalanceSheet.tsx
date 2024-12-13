import { useOutletContext } from "react-router";
import { CompanyBalanceSheet } from "../../types/company";
import { useEffect, useState } from "react";
import { getBalanceSheet } from "../../apiRepository";
import { RatioList } from "../ratioList/RatioList";
import { Spinner } from "../spinner/Spinner";
import { formatLargeMonetaryNumber } from "../../utils/NumberFormatting";

interface BalanceSheetProps {

}

const config = [
    {
        label: <div className="font-bold">Total Assets</div>,
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.totalAssets),
    },
    {
        label: "Current Assets",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.totalCurrentAssets),
    },
    {
        label: "Total Cash",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.cashAndCashEquivalents),
    },
    {
        label: "Property & equipment",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.propertyPlantEquipmentNet),
    },
    {
        label: "Intangible Assets",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.intangibleAssets),
    },
    {
        label: "Long Term Debt",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.longTermDebt),
    },
    {
        label: "Total Debt",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.otherCurrentLiabilities),
    },
    {
        label: <div className="font-bold">Total Liabilites</div>,
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.totalLiabilities),
    },
    {
        label: "Current Liabilities",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.totalCurrentLiabilities),
    },
    {
        label: "Long-Term Debt",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.longTermDebt),
    },
    {
        label: "Long-Term Income Taxes",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.otherLiabilities),
    },
    {
        label: "Stakeholder's Equity",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.totalStockholdersEquity),
    },
    {
        label: "Retained Earnings",
        render: (company: CompanyBalanceSheet) =>
            formatLargeMonetaryNumber(company.retainedEarnings),
    },
];


export function BalanceSheet() {
    const ticker = useOutletContext<string>();
    const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet>();

    useEffect(() => {
        async function fetchBalanceSheetData() {
            const result = await getBalanceSheet(ticker);
            setBalanceSheet(result?.data[0]);
        }
        fetchBalanceSheetData();
    }, []);

    return (
        <>
            {balanceSheet ? (
                <RatioList config={config} data={balanceSheet} />
            ) : (
                <Spinner />
            )}
        </>
    )
}
