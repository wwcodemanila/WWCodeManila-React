/* This component is an example of state management
 * States are the values of dynamics parts of your render.
 * It should be initialized by using `this.state = {}`
 * It can be updated using the this.setState method
 * 
 * Reference: https://reactjs.org/docs/faq-state.html
 *
 */

import React, { Component } from "react";

class Tag extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0
    };
  }

  addLike = () => {
    this.setState(previousState => {
      return { likes: previousState.likes + 1 };
    });
    console.log(this.state.likes);
  };

  render() {
    return (
      <div className="field is-grouped is-grouped-multiline">
        <div className="control">
          <div className="tags has-addons" onClick={this.addLike}>
            <span className="tag is-info">Likes</span>
            <span className="tag">{this.state.likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Tag;
