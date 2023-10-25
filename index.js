const express = require('express');
const app = express();
// const { MongoClient, ServerApiVersion } = require('mongodb');

const cors = require("cors");

const port = process.env.PORT || 5700;
// const uri = "mongodb+srv://virtualacademy628:OnoPSTWepxqJwLHs@cluster0.xuczi3d.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });


app.use(cors());

const campClassData = require("./campData.json");

app.get('/', (req, res) => {
    res.send('Virtual Academy Server');
});

app.get('/campData', (req, res) => {
    res.send(campClassData);
});

app.get('/campData/:id', (req, res) => {
    const campId = req.params.id;
    const campData = campClassData.find(camp => camp.id === parseInt(campId));
    res.send(campData);
});

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("virtualAcademies").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
