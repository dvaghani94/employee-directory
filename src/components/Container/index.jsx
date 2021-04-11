import React, { Component } from "react";
import Search from "../Search";
import Table from "../Table";
import API from "../../utils/API";

class Container extends Component {
  state = {
    search: "",
    employee: [],
    employeeSearch: [],
    employeeData: this.initialEmployeeData,
  };

  get initialEmployeeData() {
    return {
      name: "",
      phone: "",
      email: "",
      dob: "",
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ search: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
  };

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

  sortBy = (key, primary = 0, secondary = 0) => {
    const searchData = this.state.employeeSearch;
    if (this.state.employeeData[key]) {
      this.setState({
        employeeData: searchData.reverse(),
        employeeData: {
          ...this.initialEmployeeData,
          [key]: this.state.employeeData[key] === "asc" ? "desc" : "asc",
        },
      });
    } else {
      searchData = this.state.employeeSearch.sort((a, b) => {
        a = a[key];
        b = b[key];

        if (primary) {
          if (secondary && a[primary] === b[primary]) {
            return a[secondary].localeCompare(b[secondary]);
          }
          return a[primary].localeCompare(b[primary]);
        } else {
          return a.localeCompare(b);
        }
      });

      this.setState({
        employeeSearch: searchData,
        employeeData: {
          ...this.initialEmployeeData,
          [key]: "asc",
        },
      });
    }
  };

  employeeSearched = (search) => {
    if (search) {
      this.setState({
        employeeSearch: this.state.employee.filter((searched) => {
          return (
            searched.name.first
              .toLowerCase()
              .concat("", searched.name.last.toLowerCase())
              .includes(search) ||
            searched.phone.includes(search) ||
            searched.email.includes(search) ||
            this.formatDate(searched.dob.date).includes(search)
          );
        }),
      });
    } else {
      this.setState({ employeeSearch: this.state.employee });
    }
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
          <Table state={this.state} formatDate={this.formatDate} />
        </div>
      </>
    );
  }
}

export default Container;
