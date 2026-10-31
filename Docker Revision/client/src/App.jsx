import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/data");
        setData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError("Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h1>Users List</h1>
      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <table
          border="1"
          cellPadding="8"
          style={{
            borderCollapse: "collapse",
            width: "100%",
            maxWidth: "800px",
          }}
        >
          <thead>
            <tr style={{ background: "#f2f2f2", textAlign: "left" }}>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          marginTop: "10px",
          marginLeft: "10px",
          cursor: "pointer",
          border: "none",
        }}
      >
        Testing
      </button>
    </div>
  );
};

export default App;
