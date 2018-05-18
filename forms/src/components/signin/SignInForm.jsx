import React from 'react'

import FormField from '../form/FormField'
import Submit from '../form/Submit'

const SignInForm = ({ submit, value, handleInputChange }) => (
    <div className="container">
        <h3 className="title">Sign In</h3>
        
            <FormField
                placeholder="Email"
                type="email"
                icon="fas fa-envelope"
                value={handleInputChange}
                />

            <FormField
                placeholder="Password"
                type="password"
                icon="fas fa-lock"
                value={handleInputChange}
                />

            <Submit/>
        
        <br/>
        No account? <a href="#">Sign Up</a>!
    </div>
)

export default SignInForm