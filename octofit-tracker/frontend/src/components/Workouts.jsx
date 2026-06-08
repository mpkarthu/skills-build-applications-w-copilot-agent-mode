import { useEffect, useState } from 'react'
import { fetchResource } from './apiClient.js'

function Workouts({ apiBase }) {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchResource('workouts', apiBase)
      .then(setWorkouts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [apiBase])

  return (
    <section>
      <h1>Workouts</h1>
      {loading && <div className="alert alert-secondary">Loading workouts...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && workouts.length === 0 && (
        <div className="alert alert-warning">No workouts were returned.</div>
      )}
      {workouts.length > 0 && (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Name</th>
                <th>Difficulty</th>
                <th>Focus</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, index) => (
                <tr key={workout._id ?? workout.id ?? index}>
                  <td>{workout.name ?? `Workout ${index + 1}`}</td>
                  <td>{workout.difficulty ?? 'Medium'}</td>
                  <td>{workout.focus ?? 'General fitness'}</td>
                  <td>{workout.durationMinutes ?? 'N/A'} min</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default Workouts
