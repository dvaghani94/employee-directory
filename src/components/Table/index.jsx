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
        </table>
    );
};

export default Table;
