import React, { Component } from 'react'

import SignInForm from './SignInForm'

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pin:''
        }
    }

    handleInputChange = event => {
        this.setState({
            value: event.target.value
        })
    }

    handleSubmit = event => {
        this.setState(
            {email: event.target.value},
            console.log(this.state.email)
        )
    }

    render() {
        return(
            <SignInForm
                handleInputChange={this.handleInputChange} 
                email={this.state.email}
                submit={this.handleSubmit}/>
        )
    }
}

export default SignIn