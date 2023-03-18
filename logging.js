const express = require('express');
const app = express();

app.use((req, res, next) => {
   console.log("A new request received at " + Date(Date.now()));

   next();  
});

app.listen(2000, () => console.log('Example app listening on port 2000!'));