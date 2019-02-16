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
import PageContent from "../../Elements/components/PageContent";

class ProfileForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
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
    this.setState({ value: event.target.value });
  };

  /* Modify the function handleSubmit to log the form results.
   *
   * You may also display the results in another component,
   * maybe to the ProfileCard component? :)
   */
  handleSubmit = event => {
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
            <label className="label">
              Name:
              <input
                className="input"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <div className="control">
              <input className="button is-info" type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </PageContent>
    );
  }
}

export default ProfileForm;
