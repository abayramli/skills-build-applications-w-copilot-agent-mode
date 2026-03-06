import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const codespaceName = process.env.REACT_APP_CODESPACE_NAME;
  const endpoint = `https://${codespaceName}-8000.app.github.dev/api/leaderboard/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', data);
        setLeaders(Array.isArray(data) ? data : data.results || []);
      });
  }, [endpoint]);

  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h2 className="card-title">Leaderboard</h2>
      </div>
      <div className="card-body">
        <table className="table table-striped table-bordered">
          <thead className="table-info">
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={idx}>
                <td>{leader.name || '-'}</td>
                <td>{leader.score || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-info mt-2">View Details</button>
      </div>
    </div>
  );
};

export default Leaderboard;
