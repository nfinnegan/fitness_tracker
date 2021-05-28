const router = require("express").Router();
const Workout = require("../../models/workoutModel");

//create new workout
router.post("/workouts", ({ body }, res) => {
  console.log("workout:", body);
  Workout.create(body)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
