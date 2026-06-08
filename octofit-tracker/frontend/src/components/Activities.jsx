import { useEffect, useState } from 'react'
import { fetchResource } from './apiClient.js'

function Activities({ apiBase }) {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchResource('activities', apiBase)
      .then(setActivities)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [apiBase])

  return (
    <section>
      <h1>Activities</h1>
      {loading && <div className="alert alert-secondary">Loading activities...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && activities.length === 0 && (
        <div className="alert alert-warning">No activity records were returned.</div>
      )}
      {activities.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Type</th>
                <th>User</th>
                <th>Duration</th>
                <th>Distance</th>
                <th>Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((activity, index) => (
                <tr key={activity._id ?? activity.id ?? index}>
                  <td>{activity.type ?? 'Unknown'}</td>
                  <td>{activity.userId ?? 'N/A'}</td>
                  <td>{activity.durationMinutes ?? 'N/A'} min</td>
                  <td>{activity.distanceKm ?? '—'}</td>
                  <td>{new Date(activity.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Activities
