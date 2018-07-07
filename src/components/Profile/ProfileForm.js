/* In this component, we'll handle forms.
 * React handles forms quite differently.
 * You'll need to handle the changes when you input something to the form.
 *
 * Activity:
 * Modify this component to create your form.
 * Add new fields, new form elements
 * Create a function that logs the form results.
 *
 * Reference: https://reactjs.org/docs/forms.html
 */

import React, { Component } from "react";
import PageContent from "components/Elements/PageContent";
import Tabs from "components/Elements/Tabs";
import ProfileFormResults from "components/Profile/ProfileFormResults";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      message: "",
      status: ""
    };

    /* If we don't bind the event handler method,
     * we'll get an error: "this" is undefined.
     */
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* To be able to edit forms in React,
   * you'll need to handle changes.
   * We'll create a function handleChange
   */
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      [event.target.message]: event.target.value,
    });
  };

  /* Modify the function handleSubmit to log the form results.
   *
   * You may also display the results in another component,
   * maybe to the ProfileCard component? :)
   */
  handleSubmit = event => {
    alert("Hi, " + this.state.name + "! Thank you for your message!")
    event.preventDefault();
  };

  isActive = () => {
    this.setState( {
      status: "is-active"
    })
  }

  render() {
    console.log(this.state.name)
    console.log(this.state.message)
    return (
      <PageContent
        title="Form"
        description="Let's handle forms in React. See the source code."
      >
      <div className="tabs is-boxed">
        <ul>
          <Tabs label="Profile Form" status={this.state.status} onClick={() => this.isActive()} />
          <Tabs label="Profile Form Results" status={this.state.status} onClick={() => this.isActive()} />
        </ul>
      </div>
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">
              Name:
              <input
                className="input"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>

            <label className="label">
              Message:
              <input
                className="input"
                name="message"
                type="text"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </label>
            <div className="control">
              <input className="button is-info" type="submit" value="Submit" />
            </div>
          </div>
        </form>

        <ProfileFormResults name={this.state.name} message={this.state.message} />
      </PageContent>
    );
  }
}

export default ProfileForm;
