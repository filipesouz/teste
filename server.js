
const express = require('express');
let app = express();
app.use(express.static('app'));
app.listen(3000);
