import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils";

class Container extends Component {
  state = {
    search: "",
    employee: [],
  };

  handleInputChange = (e) => {
      const value = e.target.value;
      this.setState({ search: value });
  };

  handleFormSubmit = (e) => {
      e.preventDefault();
  }

  componentDidMount() {
    API.getEmployees()
      .then((res) =>
        this.setState({
          employee: res.data.results,
        })
      )
      .catch((err) => console.log(err));
  }

  formatDate = (date) => {
      date = new Date(date);
      const dob = [];
      dob.push(("0" + (date.getMonth() + 1)).slice(-2));
      dob.push(("0" + date.getDate()).slice(-2));
      dob.push(date.getFullYear());

      return dob.join("-");
  };

  render() {
      return (
          <>
          <Search
            value={this.state.search}
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            />
            <div className="container mt-4">
                <Table
                state={this.state}
                formatDate={this.formatDate}
                />
            </div>
            </>
      );
  }
}

export default Container;
