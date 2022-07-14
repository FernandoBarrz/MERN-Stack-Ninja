const express = require('express');

const router = express.Router()

const {createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

// GEt all workouts
router.get('/', getWorkouts)

// Get a single workout
// :<any> -> represents a raw parameter, it may change
router.get('/:id', getWorkout)

// POST a new workout 
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)
// UPDATE a workout
router.patch('/:id', updateWorkout)



module.exports = router