

export default function TextAreaCard({title}) {
   
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <textarea className="form-control" placeholder="Enter project description..." rows="4"></textarea>
            </div>
        </div>
    );
}


