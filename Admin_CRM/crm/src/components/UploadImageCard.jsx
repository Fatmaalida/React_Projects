

export default function UploadImageCard(title) {
  

    return (
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <div className="avatar-upload">
                    <div className="avatar-preview">
                        <div className="avatar-edit">
                            <input type="file" id="imageUpload" accept="image/*" />
                            <label htmlFor="imageUpload" />
                        </div>
                    </div>
                </div>
            </div>
    );
}



