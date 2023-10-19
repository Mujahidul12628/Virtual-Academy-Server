const express = require('express');
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5700;

app.use(cors());

const campClassData = require("./campData.json");

app.get('/', (req, res) => {
    res.send('Summer Camp Server');
});

app.get('/campData', (req, res) => {
    res.send(campClassData);
});

app.get('/campData/:id', (req, res) => {
    const campId = req.params.id;
    const campData = campClassData.find(camp => camp.id === parseInt(campId));
    res.send(campData);
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
