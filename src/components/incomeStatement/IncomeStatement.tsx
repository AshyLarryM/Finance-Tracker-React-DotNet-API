import { useOutletContext } from "react-router";
import { CompanyIncomeStatement } from "../../types/company";
import { useEffect, useState } from "react";
import { getIncomeStatement } from "../../apiRepository";
import { Table } from "../table/Table";

const configs = [
    {
        label: "Date",
        render: (company: CompanyIncomeStatement) => company.date,
    },
    {
        label: "Revenue",
        render: (company: CompanyIncomeStatement) => company.revenue,
    },
    {
        label: "Cost Of Revenue",
        render: (company: CompanyIncomeStatement) => company.costOfRevenue,
    },
    {
        label: "Depreciation",
        render: (company: CompanyIncomeStatement) => company.depreciationAndAmortization,
    },
    {
        label: "Operating Income",
        render: (company: CompanyIncomeStatement) => company.operatingIncome,
    },
    {
        label: "Income Before Taxes",
        render: (company: CompanyIncomeStatement) => company.incomeBeforeTax,
    },
    {
        label: "Net Income",
        render: (company: CompanyIncomeStatement) => company.netIncome,
    },
    {
        label: "Net Income Ratio",
        render: (company: CompanyIncomeStatement) => company.netIncomeRatio,
    },
    {
        label: "Earnings Per Share",
        render: (company: CompanyIncomeStatement) => company.eps,
    },
    {
        label: "Earnings Per Diluted",
        render: (company: CompanyIncomeStatement) => company.epsdiluted,
    },
    {
        label: "Gross Profit Ratio",
        render: (company: CompanyIncomeStatement) => company.grossProfitRatio,
    },
    {
        label: "Opearting Income Ratio",
        render: (company: CompanyIncomeStatement) => company.operatingIncomeRatio,
    },
    {
        label: "Income Before Taxes Ratio",
        render: (company: CompanyIncomeStatement) => company.incomeBeforeTaxRatio,
    },
];


export function IncomeStatement() {
    const ticker = useOutletContext<string>();
    const [incomeStatement, setIncomeStatement] = useState<CompanyIncomeStatement[]>([]);

    useEffect(() => {
        async function fetchIncomeStatement() {
            const result = await getIncomeStatement(ticker);
            setIncomeStatement(result!.data);
        }
        fetchIncomeStatement();
    }, [])

    return (
        <>
            {incomeStatement ? (
                <>
                    <Table config={configs} data={incomeStatement} />
                </>
            ) : (
                <>Loading...</>)
            }
        </>
    )
}
