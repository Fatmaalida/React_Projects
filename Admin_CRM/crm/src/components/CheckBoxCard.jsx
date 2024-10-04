

export default function CheckboxCard({desc}) {

    return (
        
                <div className="check">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        id="remember-check" 
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="remember-check"
                    >
                        {desc}
                    </label>
                </div>
       
    );
}
