

export function ContentCard(props) {
    const { title, description } = props;

    return (
        <div className="flex-grow-1 overflow-hidden">
            <h5 className="text-truncate font-size-15">
                <a className="text-dark">{title}</a>
            </h5>
            <p className="text-muted mb-4">{description}</p>
        </div>
    );
}
