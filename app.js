const express = require('express');
const app = express();

app.get('/', (req, res) => {
 
    if (req.query.name) {
        return res.send(`Hello ${req.query.name}!`);
    }

    res.send('Hello World!');
  
});

const server = app.listen(3000, () => console.log(`Server running on port 3000`));

module.exports = server; 
