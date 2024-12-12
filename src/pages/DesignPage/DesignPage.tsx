import React from 'react'
import { Table } from '../../components/table/Table'
import { RatioList } from '../../components/ratioList/RatioList'
import { CompanyKeyMetrics } from '../../types/company'
import { testIncomeStatementData } from '../../components/table/testData'

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: any) => company.marketCapTTM,
        subTitle: "Total value of all a company's shares of stock",
    },
]

export default function DesignPage() {
    return (
        <div className='text-slate-300'>
            <h1>Design Page</h1>
            <h2>This is _____ design page.  </h2>
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <RatioList data={testIncomeStatementData} config={tableConfig} />
            <Table />
        </div>
    )
}
