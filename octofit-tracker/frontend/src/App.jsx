import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const apiHost = codespaceName ? `${codespaceName}-8000.app.github.dev` : 'localhost:8000'
const apiProtocol = codespaceName ? 'https' : 'http'
const apiBaseUrl = `${apiProtocol}://${apiHost}/api`

function App() {
  return (
    <div className="app-shell">
      <header className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            OctoFit Tracker
          </NavLink>

          <div className="navbar-nav">
            <NavLink className="nav-link" to="/activities">
              Activities
            </NavLink>
            <NavLink className="nav-link" to="/leaderboard">
              Leaderboard
            </NavLink>
            <NavLink className="nav-link" to="/teams">
              Teams
            </NavLink>
            <NavLink className="nav-link" to="/users">
              Users
            </NavLink>
            <NavLink className="nav-link" to="/workouts">
              Workouts
            </NavLink>
          </div>
        </div>
      </header>

      <main className="container py-4">
        <div className="alert alert-info">
          <strong>API base URL:</strong> <code>{apiBaseUrl}</code>
          <div className="small mt-2">
            {codespaceName ? (
              'Using Codespaces environment variable VITE_CODESPACE_NAME.'
            ) : (
              <>
                VITE_CODESPACE_NAME is not defined. Add it to <code>.env.local</code>{' '}
                to use the Codespaces API host.
              </>
            )}
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities apiBase={apiBaseUrl} />} />
          <Route path="/leaderboard" element={<Leaderboard apiBase={apiBaseUrl} />} />
          <Route path="/teams" element={<Teams apiBase={apiBaseUrl} />} />
          <Route path="/users" element={<Users apiBase={apiBaseUrl} />} />
          <Route path="/workouts" element={<Workouts apiBase={apiBaseUrl} />} />
          <Route
            path="*"
            element={
              <div className="alert alert-warning">
                Page not found. Select a section from the top navigation.
              </div>
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
