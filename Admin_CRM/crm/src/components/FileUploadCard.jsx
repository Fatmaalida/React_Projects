

export default function FileUploadCard(props) {

    const { title } = props
    return (

        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <input type="file" className="form-control" multiple />
            </div>
        </div>
    );
}



