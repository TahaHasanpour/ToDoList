const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");

const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config()

app.use(express.json());
app.use(cors());

app.use("/api/tasks", tasks);

const port = process.env.PORT || 8080;
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();
