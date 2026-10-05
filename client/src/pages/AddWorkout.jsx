import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addWorkout } from "../services/api";

function AddWorkout() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    exercise: "",
    muscleGroup: "",
    sets: "",
    reps: "",
    weight: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !formData.exercise ||
      !formData.muscleGroup ||
      !formData.sets ||
      !formData.reps ||
      !formData.weight ||
      !formData.date
    ) {
      setMessage("Please fill in all fields.");
      return;
    }

    try {
      await addWorkout({
        ...formData,
        sets: Number(formData.sets),
        reps: Number(formData.reps),
        weight: Number(formData.weight),
      });

      setMessage("Workout added successfully!");

      setTimeout(() => {
        navigate("/workouts");
      }, 700);
    } catch (error) {
      console.error(error);
      setMessage("Unable to add workout.");
    }
  };

  return (
    <div className="form-page">
      <div className="form-header">
        <p className="small-title">LOG YOUR TRAINING</p>
        <h1>Add Workout</h1>
        <p>
          Record your exercise details and keep track of your progress.
        </p>
      </div>

      <form className="workout-form" onSubmit={handleSubmit}>

        <div className="form-group">
          <label>Exercise Name</label>
          <input
            type="text"
            name="exercise"
            placeholder="Example: Bench Press"
            value={formData.exercise}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Muscle Group</label>

          <select
            name="muscleGroup"
            value={formData.muscleGroup}
            onChange={handleChange}
          >
            <option value="">Select Muscle Group</option>
            <option value="Chest">Chest</option>
            <option value="Back">Back</option>
            <option value="Shoulders">Shoulders</option>
            <option value="Biceps">Biceps</option>
            <option value="Triceps">Triceps</option>
            <option value="Legs">Legs</option>
            <option value="Abs">Abs</option>
          </select>
        </div>

        <div className="form-row">

          <div className="form-group">
            <label>Sets</label>
            <input
              type="number"
              name="sets"
              min="1"
              placeholder="4"
              value={formData.sets}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Reps</label>
            <input
              type="number"
              name="reps"
              min="1"
              placeholder="10"
              value={formData.reps}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Weight (kg)</label>
            <input
              type="number"
              name="weight"
              min="0"
              placeholder="60"
              value={formData.weight}
              onChange={handleChange}
            />
          </div>

        </div>

        <div className="form-group">
          <label>Workout Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>

        {message && <p className="form-message">{message}</p>}

        <button type="submit" className="submit-btn">
          + Add Workout
        </button>

      </form>
    </div>
  );
}

export default AddWorkout;