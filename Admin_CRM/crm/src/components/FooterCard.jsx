

export function FooterCard(props) {
    const { status, date } = props;

    return (
        <div className="px-4 py-3 border-top">
            <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                    <span className={`badge ${status === 'Completed' ? 'bg-success' : 'bg-warning'}`}>{status}</span>
                </li>
                <li className="list-inline-item me-3">
                    <i className="bx bx-calendar me-1"></i> {date}
                </li>
            </ul>
        </div>
    );
}
