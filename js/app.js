const express = require("express");
const app = express();
const newRouter = require('./news');

app.use(express.static('public'));
app.use('/api', newRouter)


app.get("/url", (req, res, next) => {
    res.json(
        [
            {   
                "mentorName" : "Mentor1",
                "mentorShifts" :["shift1", "shift2", "shift3"]
            },
            {
                "mentorName" : "Mentor2",
                "mentorShifts" :["shift1", "shift2"]
            },
            {
               "mentorName" : "Mentor3",
               "mentorShifts" : ["shift1", "shift2", "shift3", "shift4", "shift5"]
            },
            {
                "mentorName" : "Mentor4",
                "mentorShifts" : ["shift1", "shift2", "shift3", "shift4", "shift5"]
            },
            {
                "mentorName" : "Mentor5",
                "mentorShifts" : ["shift1", "shift2", "shift3", "shift4"]
            },
            {
                "mentorName" : "Mentor6",
                "mentorShifts" : ["shift1", "shift2", "shift3", "shift4"]
            }
        ]);
   });


app.listen(3000, () => {
 console.log("Server running on port 3000");
});


