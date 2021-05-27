const router = require("express").Router();
const Workout = require("../models/workoutModel");

//create new workout
// router.get("/exercise", ({ body }, res) => {
//   Workout.create(body)
//     .then((dbWorkout) => {
//       res.json(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });
