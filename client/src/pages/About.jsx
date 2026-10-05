function About() {
  return (
    <div className="about-page">

      <div className="about-header">
        <p className="small-title">ABOUT THE PROJECT</p>
        <h1>FitTrack</h1>

        <p>
          A simple full-stack gym workout tracking application
          built using React.js and Express.js.
        </p>
      </div>

      <div className="about-grid">

        <div className="about-card">
          <span>🏋️</span>
          <h2>Track Workouts</h2>
          <p>
            Record exercises along with sets, repetitions,
            weight and workout date.
          </p>
        </div>

        <div className="about-card">
          <span>📊</span>
          <h2>Monitor Progress</h2>
          <p>
            View workout statistics including total workouts,
            sets and overall training volume.
          </p>
        </div>

        <div className="about-card">
          <span>🔎</span>
          <h2>Search & Filter</h2>
          <p>
            Quickly search exercises and filter workouts
            according to muscle group.
          </p>
        </div>

      </div>

      <div className="tech-section">
        <p className="small-title">TECHNOLOGIES</p>
        <h2>Built With</h2>

        <div className="tech-list">
          <span>React.js</span>
          <span>JavaScript</span>
          <span>React Router</span>
          <span>Axios</span>
          <span>Express.js</span>
          <span>CSS</span>
        </div>
      </div>

    </div>
  );
}

export default About;