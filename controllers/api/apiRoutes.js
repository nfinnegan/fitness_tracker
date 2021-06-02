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

//add exercise
router.put("/workouts/:id", ({ body, params }, res) => {
  //console.log("line18", { _id });
  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $set: { exercises: body } },
    { new: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get last workout
router.get("/workouts", (req, res) => {
  Workout.find({})
    .then((dbWorkout) => {
      for (i = 0; i < dbWorkout.length; i++) {
        console.log(dbWorkout.exercises[i].duration);
      }
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//get workouts in range
router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .populate("exercises")
    .sort({ day: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;