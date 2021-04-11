import React from "react";
import "./style.css";

const Table = (props) => {
  return (
    <table className="table table-sortable table-striped text-center">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col" data-sortable="true" data-field="name">
            <span onClick={() => props.sortBy("name", "last", "first")}>
              Name
            </span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("phone")}>Phone</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("email")}>Email</span>
          </th>
          <th scope="col">
            <span onClick={() => props.sortBy("dob", "date")}>DOB</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.state.employeeSearch.map((searched) => {
          const { first, last } = searched.name;
          const fullName = `${first} ${last}`;

          const dob = props.formatDate(searched.dob.date);

          return (
            <tr key={searched.login.uuid}>
              <td>
                <img src={searched.picture.thumbnail} alt={fullName} />
              </td>
              <td className="align-middle">{fullName}</td>
              <td className="align-middle">
                <a href={`tel:+1${searched.phone}`}>{searched.phone}</a>
              </td>
              <td className="align-middle email">
                <a href={`mailto:${searched.email}`}>{searched.email}</a>
              </td>
              <td className="align-middle">{dob}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
