require('dotenv').config();


console.log('Hello, World!');
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello world! from Express.js');
})

app.get('/twitter',(req,res) => {
    res.send('This is Twitter page')
})

app.get('/login',(req,res) => {
    res.send('<h1>Login Page</h1>'); // Fixed syntax error: added missing '(' before
})

app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome to YouTube</h2>');
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${port}`)
})