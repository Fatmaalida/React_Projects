
export default function DataTableCard(props) {
    const { maintitle = "Ana Başlık", title = "Başlık", description = "Açıklama" } = props;

    
    const headers = [
        { title: "", style: { width: "20px" } },  
        "Order ID", 
        "Billing Name", 
        "Date", 
        "Total", 
        "Payment Status", 
        "Payment Method", 
        "View Details"
    ];

    const data = [
        {
            orderId: '#SK2540',
            billingName: 'Neal Matthews',
            date: '07 Oct, 2019',
            total: '$400',
            paymentStatus: 'Paid',
            paymentMethod: 'Mastercard',
        },
        {
            orderId: '#SK2541',
            billingName: 'Jamal Burnett',
            date: '07 Oct, 2019',
            total: '$380',
            paymentStatus: 'Chargeback',
            paymentMethod: 'Visa',
        },
        {
            orderId: '#SK2542',
            billingName: 'Juan Mitchell',
            date: '06 Oct, 2019',
            total: '$384',
            paymentStatus: 'Paid',
            paymentMethod: 'Paypal',
        },
    ];

    return (
        <div className="card mb-4">
            <div className="card-body">
                <h4 className="card-title mb-4">{title}</h4>
                <p className="card-text">{description}</p>
                <div className="table-responsive">
                    <table className="table align-middle table-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index} style={header.style || {}} className="align-middle">
                                        {typeof header === 'string' ? header : ""}
                                        {header.title ? header.title : ""}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="form-check font-size-16">
                                            <input className="form-check-input" type="checkbox" id={`transactionCheck0${index + 1}`} />
                                            <label className="form-check-label" htmlFor={`transactionCheck0${index + 1}`}></label>
                                        </div>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" className="text-body fw-bold">{item.orderId}</a>
                                    </td>
                                    <td>{item.billingName}</td>
                                    <td>{item.date}</td>
                                    <td>{item.total}</td>
                                    <td>
                                        <span className={`badge badge-pill badge-soft-${item.paymentStatus === 'Paid' ? 'success' : item.paymentStatus === 'Chargeback' ? 'danger' : 'warning'} font-size-11`}>
                                            {item.paymentStatus}
                                        </span>
                                    </td>
                                    <td>
                                        <i className={`fab fa-cc-${item.paymentMethod.toLowerCase()} me-1`}></i> {item.paymentMethod}
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-primary btn-sm btn-rounded waves-effect waves-light" data-bs-toggle="modal" data-bs-target=".transaction-detailModal">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
