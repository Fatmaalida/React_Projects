import  { useState } from 'react';

export default function InputPasswordCard() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (

                <div className="">
                    <label className="form-label">Password</label>
                    <div className="input-group auth-pass-inputgroup">
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="form-control" 
                            placeholder="Enter password" 
                            aria-label="Password" 
                            aria-describedby="password-addon" 
                        />
                        <button 
                            className="btn btn-light" 
                            type="button" 
                            id="password-addon" 
                            onClick={togglePasswordVisibility}
                        >
                            <i className={showPassword ? "mdi mdi-eye-off" : "mdi mdi-eye-outline"}></i>
                        </button>
                    </div>
                </div>

    );
}
