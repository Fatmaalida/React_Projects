export default function MiniCard({ icon, count, label }) {
    return (
        <div className="card dash-widget">
            <div className="card-body">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <p className="text-muted fw-medium">{label}</p>
                        <h4 className="mb-0">{count}</h4>
                    </div>
                    <div className="flex-shrink-0 align-self-center">
                        <div className="mini-stat-icon avatar-sm rounded-circle bg-primary">
                            <span className="avatar-title">
                                <i className={icon}></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

