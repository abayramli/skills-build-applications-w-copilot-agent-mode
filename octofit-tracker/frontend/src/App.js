


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src="/octofitapp-small.png" alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Routes>
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/" element={
            <div className="card text-center">
              <div className="card-header bg-primary text-white">
                <h2 className="card-title">Welcome to Octofit Tracker!</h2>
              </div>
              <div className="card-body">
                <p className="card-text">Track your fitness, join teams, compete, and get personalized workouts!</p>
                <Link className="btn btn-success m-2" to="/activities">View Activities</Link>
                <Link className="btn btn-info m-2" to="/leaderboard">Leaderboard</Link>
                <Link className="btn btn-warning m-2" to="/teams">Teams</Link>
                <Link className="btn btn-secondary m-2" to="/users">Users</Link>
                <Link className="btn btn-danger m-2" to="/workouts">Workouts</Link>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
