require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')


// express app
const app = express()
const workoutRoutes = require('./routes/workouts')
// Middleware

app.use(express.json())


app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
})

// Routes
app.use("/api/workouts", workoutRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URI).then(() => {

    // Listen for request
    app.listen(process.env.PORT, () => {
        console.log("Listening on port, ", process.env.PORT);
    })

}).catch((err)=>{
    console.log(err);
})    










