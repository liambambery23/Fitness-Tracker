
const router = require("express").Router();
const Workout = require("../models/workout.js")

router.get("/api/workouts/range", (req, res) => {
    Workout.find()
    .limit(7)
    .sort({'day': -1})
    .then(function(data){
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    });
});

router.post("/api/workouts",function (req,res){    
    Workout.create({})
    .then(data => res.json(data))
    .catch(err => { 
        res.json(err)
    })
});

router.get("/api/workouts", (req, res) => {
   Workout.find()
   .sort({"day": 1})
   .then(function(data) {
        res.json(data)
   })
   .catch(err => {
        res.json(err)
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create()
    .then(function(data) {
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    Workout.findByIdAndUpdate(
       params.id,
        { $push: {exercises: body } },
        { new: true, runValidators: true }
    )
    .then(function(data) {
        res.json(data);
    }).catch(err => {
        res.json(err);
    });
});


module.exports = router;