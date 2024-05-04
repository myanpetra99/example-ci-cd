const express = require('express');
const app = express();

app.get('/', (req, res) => {
 
    if (req.query.name) {
        const capitalized = req.query.name.toUpperCase();
        return res.send(`Hello ${capitalized}!`);
    }

    res.send('Hello World!');
  
});

const server = app.listen(3000, () => console.log(`Server running on port 3000`));

module.exports = server; 
