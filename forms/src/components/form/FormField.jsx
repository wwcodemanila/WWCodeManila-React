import React from 'react'

const FormField = ({
    placeholder,
    value,
    type,
    icon,
    handleInputChange    
}) => (
    <div className="field">
        <p className="control has-icons-left has-icons-right">
            <input 
                className="input" 
                type={type} 
                placeholder={placeholder}
                value={handleInputChange}/>
            <span className="icon is-small is-left">
                <i className={icon}></i>
            </span>
        </p>
    </div>
)

export default FormField