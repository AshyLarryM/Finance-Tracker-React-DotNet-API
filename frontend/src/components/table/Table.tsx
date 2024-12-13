interface TableProps {
    config: any,
    data: any,
}

export function Table({ config, data }: TableProps) {
    const renderedRows = data.map((company: any) => {
        return (
            <tr key={company.cik}>
                {config.map((val: any) => {
                    return (
                        <td className="p-4 whitespace-nowrap text-slate-400 text-sm font-normal">
                            {val.render(company)}
                        </td>
                    )
                })}
            </tr>
        )
    });

    const renderHeaders = config.map((config: any) => {
        return (
            <th className="p-4 text-left text-xs font-medium text-slate-300 uppercase tracking-wider"
                key={config.label}
            >
                {config.label}
            </th>
        )
    });
    return (
        <div className="shadow rounded p-4 sm:p-6 xl:p-8">
            <table className="min-w-full divide-y divide divide-slate-700">
                <thead className="">{renderHeaders}</thead>
                <tbody className="">{renderedRows}</tbody>
            </table>
        </div>
    )
}
