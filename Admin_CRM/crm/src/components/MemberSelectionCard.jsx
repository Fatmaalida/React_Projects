
const MemberSelectionCard = (props) => {
    const {title , optionName} = props
    return (
        <div className="card mb-4">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <select className="form-select">
                    <option>{optionName}</option>
                    {/* Add other members here */}
                </select>
            </div>
        </div>
    );
};

export default MemberSelectionCard ;
