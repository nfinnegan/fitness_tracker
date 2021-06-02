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
  //BCS learning assistant assist on approach
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

//get workouts in range
router.get("/workouts/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .populate("exercises")
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
