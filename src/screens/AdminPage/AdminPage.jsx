import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const apiUrl = process.env.REACT_APP_BASE_URL;
  useEffect(() => {
    axios
      .get(apiUrl+'/get-users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("error", error);
      });
  }, []);

  return (
    <div className="admin-container">
      <h2>User data</h2>
      <div className="table-wrapper">
      <table className="table">
        <thead className="table-header">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="table-items">
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserTable;
