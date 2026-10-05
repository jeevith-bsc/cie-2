function WorkoutCard({ workout, onDelete }) {
  return (
    <div className="workout-card">

      <div className="workout-card-top">
        <div>
          <span className="muscle-badge">
            {workout.muscleGroup}
          </span>

          <h2>{workout.exercise}</h2>
        </div>

        <button
          className="delete-btn"
          onClick={() => onDelete(workout.id)}
        >
          Delete
        </button>
      </div>

      <div className="workout-details">

        <div>
          <span>SETS</span>
          <strong>{workout.sets}</strong>
        </div>

        <div>
          <span>REPS</span>
          <strong>{workout.reps}</strong>
        </div>

        <div>
          <span>WEIGHT</span>
          <strong>{workout.weight} kg</strong>
        </div>

        <div>
          <span>DATE</span>
          <strong>{workout.date}</strong>
        </div>

      </div>

    </div>
  );
}

export default WorkoutCard;