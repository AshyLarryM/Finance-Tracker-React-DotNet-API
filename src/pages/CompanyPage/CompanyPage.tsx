import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { CompanyProfile } from '../../types/company';
import { getCompanyProfileData } from '../../apiRepository';

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
                <div className='text-teal-500'>{company.companyName}</div>
            ) : (
                <div>Company Not Found!</div>
            )}
        </>
    )

}
