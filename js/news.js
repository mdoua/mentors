const express = require('express');   
const router = express.Router();
const fs = require('fs');


router.post('/create', (req, res) =>{
    fs.writeFile("file.txt", req.body, "utf8");
    res.send("submit successful");
});

module.exports = router;

