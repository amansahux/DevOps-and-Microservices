import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  async function getData() {
    try {
      const res = await axios.get('/api/data')
      setUsers(res.data.data)
    } catch (err) {
      setError('Failed to fetch users. Make sure the backend is running.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  if (loading) {
    return (
      <div className="app">
        <div className="center-msg">
          <div className="spinner"></div>
          <p style={{ color: '#64748b', fontSize: '15px' }}>Fetching team members…</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app">
        <div className="center-msg">
          <div className="error-box">⚠️ {error}</div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Header */}
      <div className="header">
        <div className="header-badge">👥 Team Directory</div>
        <h1>Meet Our Team</h1>
        <p>{users.length} members across multiple departments</p>
      </div>

      {/* Cards Grid */}
      <div className="grid">
        {users.map((user) => (
          <div className="card" key={user.id}>
            {/* Top accent bar */}
            <div className={`status-bar ${user.isActive ? '' : 'inactive'}`}></div>

            {/* Card Header — Avatar + Name */}
            <div className="card-header">
              <div className="avatar-wrap">
                <img
                  className="avatar"
                  src={user.avatar}
                  alt={user.name}
                />
                <span className={`status-dot ${user.isActive ? 'active' : 'inactive'}`}></span>
              </div>
              <div className="card-title">
                <h2>{user.name}</h2>
                <span className="role-badge">{user.role}</span>
              </div>
            </div>

            <div className="divider"></div>

            {/* Info Rows */}
            <div className="info-section">
              <div className="info-row">
                <span className="info-icon">🏢</span>
                <span>{user.department}</span>
              </div>
              <div className="info-row">
                <span className="info-icon">✉️</span>
                <span>{user.email}</span>
              </div>
              <div className="info-row">
                <span className="info-icon">📞</span>
                <span>{user.phone}</span>
              </div>
              <div className="info-row">
                <span className="info-icon">📍</span>
                <span>{user.location.city}, {user.location.state}, {user.location.country}</span>
              </div>
              <div className="info-row">
                <span className="info-icon">🗓️</span>
                <span>Joined {new Date(user.joinedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
            </div>

            {/* Stats Row */}
            <div className="stats-row">
              <div className="stat-box">
                <div className="stat-value">{user.age}y</div>
                <div className="stat-label">Age</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">₹{(user.salary / 1000).toFixed(0)}K</div>
                <div className="stat-label">Salary</div>
              </div>
              <div className="stat-box">
                <div className="stat-value">{user.gender[0]}</div>
                <div className="stat-label">Gender</div>
              </div>
            </div>

            {/* Skills */}
            <div className="skills-section">
              <div className="skills-label">Skills</div>
              <div className="skills-wrap">
                {user.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App