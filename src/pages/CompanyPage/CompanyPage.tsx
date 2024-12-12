import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../types/company';
import { getCompanyProfileData } from '../../apiRepository';
import { Sidebar } from '../../components/layout/Sidebar';
import { CompanyDashboard } from '../../components/dashboard/CompanyDashboard';
import { Tile } from '../../components/tile/Tile';

export default function CompanyPage() {
    let { ticker } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect(() => {
        async function getProfileInit() {
            const result = await getCompanyProfileData(ticker!);

            if (typeof result === 'string') {
                console.error("Error fetching company profile:", result);
                return;
            }
            setCompany(result.data[0]);
        }
        getProfileInit();
    }, [ticker])

    return (
        <>
            {company ? (
                <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
                    <Sidebar />
                    <CompanyDashboard ticker={ticker!} >
                        <Tile title="Company Name" subTitle={company.companyName} />
                    </CompanyDashboard>
                </div>
            ) : (
                <div>Company Not Found!</div>
            )}
        </>
    )

}
