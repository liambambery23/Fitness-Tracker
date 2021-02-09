// let db = require(".../models");

// module.exports(function(app) {
//     app.get("/api/workouts", (req, res) => {

//     });

//     app.post("/api/workouts", (req, res) => {

//     });

//     app.put("/api/workouts/:id", (req, res) => {

//     });


//     app.get("/api/workouts/range", (req, res) => {

//     });
// })

const router = require("express").Router();
const path = require("path");
const Workout = require("../models/workout.js")

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .limit(7)
    .sort({'day': -1})
    .then(function(data){
        res.json(data)
    })
});

router.get("/api/workouts", (req, res) => {
   Workout.find()
   .sort({"day": 1})
   .then(function(data) {
        res.json(data)
   });
});

router.post("/api/workouts", (req, res) => {
    Workout.create()
    .then(function(data) {
        res.json(data)
    });
});


module.exports = router;