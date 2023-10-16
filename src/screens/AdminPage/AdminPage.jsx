import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

const UserTable = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get("URL")
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
          </tr>
        </thead>
        <tbody className="table-items">
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default UserTable;
