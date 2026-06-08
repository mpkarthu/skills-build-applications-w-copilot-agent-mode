import { useEffect, useState } from 'react'
import { fetchResource } from './apiClient.js'

function Leaderboard({ apiBase }) {
  const [leaders, setLeaders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchResource('leaderboard', apiBase)
      .then(setLeaders)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [apiBase])

  return (
    <section>
      <h1>Leaderboard</h1>
      {loading && <div className="alert alert-secondary">Loading leaderboard...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && leaders.length === 0 && (
        <div className="alert alert-warning">No leaderboard entries were returned.</div>
      )}
      {leaders.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaders.map((leader, index) => (
                <tr key={leader._id ?? leader.id ?? index}>
                  <td>{leader.rank ?? index + 1}</td>
                  <td>{leader.teamName ?? leader.name ?? 'Unknown'}</td>
                  <td>{leader.points ?? '0'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Leaderboard
