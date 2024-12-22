import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { CompanyKeyMetrics } from "../../types/company";
import { RatioList } from "../ratioList/RatioList";
import { getKeyMetrics } from "../../apiRepository";
import { Spinner } from "../spinner/Spinner";
import { formatLargeNonMonetaryNumber, formatRatio } from "../../utils/NumberFormatting";
import { StockComment } from "../stock/StockComment";

const tableConfig = [
    {
        label: "Market Cap",
        render: (company: CompanyKeyMetrics) =>
            formatLargeNonMonetaryNumber(company.marketCapTTM),
        subTitle: "Total value of all a company's shares of stock",
    },
    {
        label: "Current Ratio",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.currentRatioTTM),
        subTitle:
            "Measures the companies ability to pay short term debt obligations",
    },
    {
        label: "Return On Equity",
        render: (company: CompanyKeyMetrics) => formatRatio(company.roeTTM),
        subTitle:
            "Return on equity is the measure of a company's net income divided by its shareholder's equity",
    },
    {
        label: "Return On Assets",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.returnOnTangibleAssetsTTM),
        subTitle:
            "Return on assets is the measure of how effective a company is using its assets",
    },
    {
        label: "Free Cashflow Per Share",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.freeCashFlowPerShareTTM),
        subTitle:
            "Return on assets is the measure of how effective a company is using its assets",
    },
    {
        label: "Book Value Per Share TTM",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.bookValuePerShareTTM),
        subTitle:
            "Book value per share indicates a firm's net asset value (total assets - total liabilities) on per share basis",
    },
    {
        label: "Divdend Yield TTM",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.dividendYieldTTM),
        subTitle: "Shows how much a company pays each year relative to stock price",
    },
    {
        label: "Capex Per Share TTM",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.capexPerShareTTM),
        subTitle:
            "Capex is used by a company to aquire, upgrade, and maintain physical assets",
    },
    {
        label: "Graham Number",
        render: (company: CompanyKeyMetrics) =>
            formatRatio(company.grahamNumberTTM),
        subTitle:
            "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
    {
        label: "PE Ratio",
        render: (company: CompanyKeyMetrics) => formatRatio(company.peRatioTTM),
        subTitle:
            "This is the upperbouind of the price range that a defensive investor should pay for a stock",
    },
];

export function CompanyProfile() {
    const ticker = useOutletContext<string>();
    const [companyData, setCompanyData] = useState<CompanyKeyMetrics>();

    useEffect(() => {
        async function getCompanyKeyMetrics() {
            const result = await getKeyMetrics(ticker);
            if (result && typeof result !== "string") {
                setCompanyData(result.data[0]);
            } else {
                console.error("Failed to fetch company key metrics:", result);
            }
        };
        getCompanyKeyMetrics();
    }, []);

    return (
        <>
            {companyData ? (
                <>
                    <RatioList config={tableConfig} data={companyData} />
                    <StockComment stockSymbol={ticker} />
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
};
