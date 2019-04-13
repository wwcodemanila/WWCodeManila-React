import React from "react";
// import { connect } from "react-redux";
// import PageContent from "../../Elements/components/PageContent";
// import { updateUser } from '../actions/userActions'

const User = props => {
  const { user, onChange, handleSubmit, value } = props;
  return (
    <React.Fragment>
      <h4>
        Current User: <span className="has-text-info">{user}</span>
      </h4>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">
            <input
              className="input"
              type="text"
              value={value}
              onChange={onChange}
            />
          </label>

          <input className="button is-info" type="submit" value="Submit" />
        </div>
      </form>
    </React.Fragment>
  );
};

export default User;
