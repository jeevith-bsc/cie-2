const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary workout data
let workouts = [
  {
    id: 1,
    exercise: "Bench Press",
    muscleGroup: "Chest",
    sets: 4,
    reps: 10,
    weight: 60,
    date: "2026-10-04"
  },
  {
    id: 2,
    exercise: "Lat Pulldown",
    muscleGroup: "Back",
    sets: 3,
    reps: 12,
    weight: 50,
    date: "2026-10-04"
  }
];

// Home API
app.get("/", (req, res) => {
  res.send("FitTrack Gym Workout Tracker API is running!");
});

// Get all workouts
app.get("/api/workouts", (req, res) => {
  res.json(workouts);
});

// Add workout
app.post("/api/workouts", (req, res) => {
  const newWorkout = {
    id: Date.now(),
    ...req.body
  };

  workouts.push(newWorkout);

  res.status(201).json(newWorkout);
});

// Delete workout
app.delete("/api/workouts/:id", (req, res) => {
  const id = Number(req.params.id);

  workouts = workouts.filter((workout) => workout.id !== id);

  res.json({
    message: "Workout deleted successfully"
  });
});

// Update workout
app.put("/api/workouts/:id", (req, res) => {
  const id = Number(req.params.id);

  const index = workouts.findIndex(
    (workout) => workout.id === id
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Workout not found"
    });
  }

  workouts[index] = {
    ...workouts[index],
    ...req.body,
    id: id
  };

  res.json(workouts[index]);
});// Start server
app.listen(PORT, () => {
  console.log(`FitTrack server running on port ${PORT}`);
});