import { useEffect, useState } from "react";
import {
  getWorkouts,
  deleteWorkout
} from "../services/api";

import WorkoutCard from "../components/WorkoutCard";

function Workouts() {

  const [workouts, setWorkouts] = useState([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const loadWorkouts = async () => {
    try {
      const response = await getWorkouts();
      setWorkouts(response.data);
    } catch (error) {
      console.error("Error loading workouts:", error);
    }
  };

  useEffect(() => {
    loadWorkouts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteWorkout(id);

      setWorkouts(
        workouts.filter((workout) => workout.id !== id)
      );

    } catch (error) {
      console.error("Error deleting workout:", error);
    }
  };

  const filteredWorkouts = workouts.filter((workout) => {

    const matchesMuscle =
      filter === "All" ||
      workout.muscleGroup === filter;

    const matchesSearch =
      workout.exercise
        .toLowerCase()
        .includes(search.toLowerCase());

    return matchesMuscle && matchesSearch;
  });

  return (
    <div className="workouts-page">

      <div className="workouts-header">

        <div>
          <p className="small-title">
            TRAINING LOG
          </p>

          <h1>Workout History</h1>

          <p>
            Review and manage your recorded exercises.
          </p>
        </div>

      </div>

      <div className="workout-tools">

        <input
          type="text"
          placeholder="Search exercise..."
          value={search}
          onChange={(event) =>
            setSearch(event.target.value)
          }
        />

        <select
          value={filter}
          onChange={(event) =>
            setFilter(event.target.value)
          }
        >
          <option value="All">All Muscle Groups</option>
          <option value="Chest">Chest</option>
          <option value="Back">Back</option>
          <option value="Shoulders">Shoulders</option>
          <option value="Biceps">Biceps</option>
          <option value="Triceps">Triceps</option>
          <option value="Legs">Legs</option>
          <option value="Abs">Abs</option>
        </select>

      </div>

      <p className="results-count">
        Showing {filteredWorkouts.length} workout(s)
      </p>

      <div className="workout-list">

        {filteredWorkouts.length > 0 ? (

          filteredWorkouts.map((workout) => (
            <WorkoutCard
              key={workout.id}
              workout={workout}
              onDelete={handleDelete}
            />
          ))

        ) : (

          <div className="empty-state">
            <h2>No workouts found</h2>
            <p>
              Add a workout or change your search/filter.
            </p>
          </div>

        )}

      </div>

    </div>
  );
}

export default Workouts;