function Stats({ workouts }) {
  const totalWorkouts = workouts.length;

  const totalSets = workouts.reduce(
    (total, workout) => total + Number(workout.sets),
    0
  );

  const totalVolume = workouts.reduce(
    (total, workout) =>
      total +
      Number(workout.sets) *
        Number(workout.reps) *
        Number(workout.weight),
    0
  );

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Workouts</h3>
        <h2>{totalWorkouts}</h2>
        <p>Exercises recorded</p>
      </div>

      <div className="stat-card">
        <h3>Total Sets</h3>
        <h2>{totalSets}</h2>
        <p>Sets completed</p>
      </div>

      <div className="stat-card">
        <h3>Training Volume</h3>
        <h2>{totalVolume} kg</h2>
        <p>Total weight moved</p>
      </div>
    </div>
  );
}

export default Stats;