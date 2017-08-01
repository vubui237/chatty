const express = require('express');
const {json} = require('body-parser')
const port= 3000;
const app = express();
app.use(json());
app.use(express.static('assets')) //This pulls in the assets file


const messages = [
    {
        username: "Sara",
        message: "I love kitkats",
        time: "1:52 PM"
    },
];

app.get('/messages', (req,res,next)=> {
    res.status(200).json({messages: messages})
})

app.post('/messages', (req,res,next)=> {
    messages.push({username: req.body.username, message: req.body.message, time: new Date()});
    res.status(200).json({messages: messages})
})



app.listen(port, function() {
    console.log('Listening on port 3000')
});