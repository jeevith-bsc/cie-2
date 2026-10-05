import WelcomeMessage from "../components/WelcomeMessage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWorkouts } from "../services/api";
import Stats from "../components/Stats";

function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getWorkouts()
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching workouts:", error);
      });
  }, []);

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">BUILD • TRACK • PROGRESS</p>

          <h1>
            TRAIN HARDER.
            <br />
            <span>TRACK SMARTER.</span>
          </h1>

          <p className="hero-description">
            FitTrack helps you record your workouts, monitor your
            training volume and stay consistent with your fitness journey.
          </p>

          <div className="hero-buttons">
            <Link to="/add-workout" className="primary-btn">
              + Add Workout
            </Link>

            <Link to="/workouts" className="secondary-btn">
              View Workouts
            </Link>
          </div>
        </div>

        <div className="hero-icon">
          🏋️
        </div>
      </section>

      <section className="dashboard-section">

        <div className="section-heading">
          <div>
            <p className="small-title">YOUR PERFORMANCE</p>
            <h2>Training Overview</h2>
          </div>

          <p className="workout-count">
            {workouts.length} exercises recorded
          </p>
        </div>

        <Stats workouts={workouts} />
        
        <WelcomeMessage />

      </section>

    </div>
  );
}

export default Home;