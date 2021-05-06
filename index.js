const express = require('express')
const port = process.env.PORT || 8080;
const mongo = require("./config/db");

const app = express()
app.use(express.json())
// const db = mongoose.connection
// //console.log(mongo)
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", () => {
//     console.log("connected to mongodb");
// });
const routePath = require("./routes/client.js");
// app.get('/', (req, res) => {
//     res.send('welcome to payment')
// })
app.use("/", routePath);

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})