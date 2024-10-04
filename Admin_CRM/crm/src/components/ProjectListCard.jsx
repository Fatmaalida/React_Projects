

export default function ProjectsListCard() {
   

    const headers = [
        "Projects",
        "Due Date",
        "Status"
    ];

    const data = [
        {
            Projects: '#SK2540',
            DueDate: '07 Oct, 2019',
            Status: '$400',
        },
        {
            Projects: '#SK2540',
            DueDate: '07 Oct, 2019',
            Status: '$400',
        },
        {
            Projects: '#SK2540',
            DueDate: '07 Oct, 2019',
            Status: '$400',
        },
    ];
    return (
        <>
            <div className="">
                <div className="table-responsive">
                    <table className="table project-list-table align-middle table-nowrap dt-responsive nowrap w-100 table-borderless" id="projectList-table">
                        <thead className="table-light">
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index} className="align-middle">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <a className="text-body fw-bold">
                                            {item.Projects}
                                        </a>
                                    </td>
                                    <td>{item.DueDate}</td>
                                    <td>{item.Status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}