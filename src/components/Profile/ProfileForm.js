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

const defaultState = { name: "", message: "" };

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;

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
    const target = event.target;
    
    this.setState({
      [target.name]: target.value
    });
  };

  /* Modify the function handleSubmit to log the form results.
   *
   * You may also display the results in another component,
   * maybe to the ProfileCard component? :)
   */
  handleSubmit = event => {
    console.log(this.state);
    this.setState(defaultState);
    event.preventDefault();
  };

  render() {
    return (
      <PageContent
        title="Form"
        description="Let's handle forms in React. See the source code."
      >
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name:
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </label>
            <label className="label">Message:
              <textarea
                name="message"
                className="input"
                placeholder="What's on your mind?"
                value={this.state.message}
                onChange={this.handleChange}
              />
            </label>
            <div className="control">
              <input className="button is-info" type="submit" value="Submit" />
            </div>
          </div>
        </form>

        <div className="guestbook">
        </div>
      </PageContent>
    );
  }
}

export default ProfileForm;
