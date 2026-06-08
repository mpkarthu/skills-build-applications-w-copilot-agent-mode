import { useEffect, useState } from 'react'
import { fetchResource } from './apiClient.js'

function Users({ apiBase }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchResource('users', apiBase)
      .then(setUsers)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [apiBase])

  return (
    <section>
      <h1>Users</h1>
      {loading && <div className="alert alert-secondary">Loading users...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && users.length === 0 && (
        <div className="alert alert-warning">No users were returned.</div>
      )}
      {users.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Team</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id ?? user.id ?? index}>
                  <td>{user.name ?? 'Unknown'}</td>
                  <td>{user.email ?? 'N/A'}</td>
                  <td>{user.teamId ?? 'N/A'}</td>
                  <td>{user.role ?? 'Member'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Users
