import React, { useEffect, useState } from "react";
import axios from "axios";

const roleColors = {
  "Software Engineer": { bg: "#e0f2fe", text: "#0369a1", border: "#bae6fd" },
  "Product Manager": { bg: "#fef3c7", text: "#b45309", border: "#fde68a" },
  "DevOps Engineer": { bg: "#ede9fe", text: "#6d28d9", border: "#ddd6fe" },
  "UX Designer": { bg: "#fce7f3", text: "#be185d", border: "#fbcfe8" },
  "QA Engineer": { bg: "#fee2e2", text: "#b91c1c", border: "#fecaca" },
  "Frontend Developer": { bg: "#dcfce7", text: "#15803d", border: "#bbf7d0" },
  "Backend Developer": { bg: "#e0e7ff", text: "#4338ca", border: "#c7d2fe" },
  "Data Analyst": { bg: "#ccfbf1", text: "#0f766e", border: "#99f6e4" },
  "System Architect": { bg: "#f3e8ff", text: "#7e22ce", border: "#e9d5ff" },
  "Scrum Master": { bg: "#ffedd5", text: "#c2410c", border: "#fed7aa" },
};

const getInitials = (name) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const avatarGradients = [
  "linear-gradient(135deg, #6366f1, #a855f7)",
  "linear-gradient(135deg, #3b82f6, #06b6d4)",
  "linear-gradient(135deg, #10b981, #14b8a6)",
  "linear-gradient(135deg, #f59e0b, #ef4444)",
  "linear-gradient(135deg, #ec4899, #8b5cf6)",
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/data");
        setUsers(res.data);
      } catch (err) {
        console.error("Failed to load users:", err);
        setError("Unable to connect to the server. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.badge}>Live Directory</div>
        <h1 style={styles.title}>Team Members & Users</h1>
        <p style={styles.subtitle}>
          Fetched dynamically from <code>/api/data</code>
        </p>

        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by name, role, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={styles.searchInput}
          />
        </div>
      </header>

      {/* Loading & Error States */}
      {loading && (
        <div style={styles.statusBox}>
          <div style={styles.spinner}></div>
          <p style={{ marginTop: "16px", color: "#64748b" }}>Loading users...</p>
        </div>
      )}

      {error && (
        <div style={{ ...styles.statusBox, border: "1px solid #fecaca", background: "#fef2f2" }}>
          <p style={{ color: "#dc2626", fontWeight: "600" }}>{error}</p>
        </div>
      )}

      {/* User Cards Grid */}
      {!loading && !error && (
        <div style={styles.grid}>
          {filteredUsers.length === 0 ? (
            <p style={{ textAlign: "center", color: "#94a3b8", gridColumn: "1 / -1" }}>
              No users found matching "{searchTerm}"
            </p>
          ) : (
            filteredUsers.map((user, index) => {
              const tagStyle = roleColors[user.role] || {
                bg: "#f1f5f9",
                text: "#334155",
                border: "#cbd5e1",
              };
              const gradient = avatarGradients[index % avatarGradients.length];

              return (
                <div key={user.id} style={styles.card}>
                  <div style={styles.cardHeader}>
                    <div style={{ ...styles.avatar, background: gradient }}>
                      {getInitials(user.name)}
                    </div>
                    <span
                      style={{
                        ...styles.roleBadge,
                        backgroundColor: tagStyle.bg,
                        color: tagStyle.text,
                        borderColor: tagStyle.border,
                      }}
                    >
                      {user.role}
                    </span>
                  </div>

                  <h3 style={styles.userName}>{user.name}</h3>
                  <p style={styles.userEmail}>{user.email}</p>

                  <div style={styles.cardFooter}>
                    <div style={styles.metaItem}>
                      <span style={styles.metaLabel}>User ID</span>
                      <span style={styles.metaValue}>#{user.id}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <span style={styles.metaLabel}>Age</span>
                      <span style={styles.metaValue}>{user.age} yrs</span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#0f172a",
    color: "#f8fafc",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    padding: "48px 24px",
    boxSizing: "border-box",
  },
  header: {
    maxWidth: "800px",
    margin: "0 auto 40px auto",
    textAlign: "center",
  },
  badge: {
    display: "inline-block",
    padding: "6px 14px",
    fontSize: "12px",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    backgroundColor: "rgba(99, 102, 241, 0.15)",
    color: "#818cf8",
    border: "1px solid rgba(99, 102, 241, 0.3)",
    borderRadius: "9999px",
    marginBottom: "16px",
  },
  title: {
    fontSize: "36px",
    fontWeight: "800",
    margin: "0 0 10px 0",
    background: "linear-gradient(to right, #ffffff, #94a3b8)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: "16px",
    margin: "0 0 28px 0",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    maxWidth: "460px",
    padding: "14px 20px",
    fontSize: "15px",
    borderRadius: "14px",
    border: "1px solid #334155",
    backgroundColor: "#1e293b",
    color: "#ffffff",
    outline: "none",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    transition: "border 0.2s, box-shadow 0.2s",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "24px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1e293b",
    border: "1px solid #334155",
    borderRadius: "18px",
    padding: "24px",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "16px",
    color: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  },
  roleBadge: {
    fontSize: "12px",
    fontWeight: "600",
    padding: "4px 10px",
    borderRadius: "9999px",
    border: "1px solid",
  },
  userName: {
    fontSize: "20px",
    fontWeight: "700",
    color: "#f8fafc",
    margin: "0 0 6px 0",
  },
  userEmail: {
    color: "#94a3b8",
    fontSize: "14px",
    margin: "0 0 20px 0",
    wordBreak: "break-all",
  },
  cardFooter: {
    marginTop: "auto",
    paddingTop: "14px",
    borderTop: "1px solid #334155",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  metaItem: {
    display: "flex",
    flexDirection: "column",
  },
  metaLabel: {
    fontSize: "11px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    color: "#64748b",
  },
  metaValue: {
    fontSize: "14px",
    fontWeight: "600",
    color: "#e2e8f0",
  },
  statusBox: {
    textAlign: "center",
    padding: "48px",
    maxWidth: "400px",
    margin: "0 auto",
    borderRadius: "16px",
    backgroundColor: "#1e293b",
  },
  spinner: {
    width: "36px",
    height: "36px",
    margin: "0 auto",
    border: "4px solid rgba(255,255,255,0.1)",
    borderLeftColor: "#6366f1",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
};

export default App;
