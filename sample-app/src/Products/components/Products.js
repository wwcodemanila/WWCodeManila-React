import React, { Component } from "react";
import { connect } from "react-redux";

import PageContent from "../../Elements/components/PageContent";
import User from "./User";

import { updateUser } from "../actions/userActions";

class ProductsPage extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.onUpdateUser();
  };

  onUpdateUser = () => {
    this.props.onUpdateUser(this.state.value);
  };

  render() {
    const { products } = this.props;
    return (
      <PageContent title="Products" description="Let's try Redux">
        <div className="row">
          <div className="col-6">
            <h4>Product List</h4>
            <div className="flex-container">
              {products.map(item => (
                <div className="card card-content">
                  <h5>{item.name}</h5>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <br />
          <User
            value={this.state.value}
            onChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            {...this.props}
          />
        </div>
      </PageContent>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
});

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
