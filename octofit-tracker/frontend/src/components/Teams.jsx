import { useEffect, useState } from 'react'
import { fetchResource } from './apiClient.js'

function Teams({ apiBase }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchResource('teams', apiBase)
      .then(setTeams)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [apiBase])

  return (
    <section>
      <h1>Teams</h1>
      {loading && <div className="alert alert-secondary">Loading teams...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && teams.length === 0 && (
        <div className="alert alert-warning">No teams were returned.</div>
      )}
      {teams.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Team</th>
                <th>Members</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {teams.map((team, index) => (
                <tr key={team._id ?? team.id ?? index}>
                  <td>{team.name ?? `Team ${index + 1}`}</td>
                  <td>{team.members ?? 0}</td>
                  <td>{team.points ?? 0}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Teams
