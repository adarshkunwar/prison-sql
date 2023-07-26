/* 
const express = require("express");
const prisonRoutes = require("./routes/prisons");

const app = express();
app.use(express.json());
app.use("/api/v1/prison", prisonRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
 */


const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/prison.routes");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to Prison Management System"
  });
});

app.use("/api/v1/prison", router);
app.listen(5000, ()  => console.log(`Server is running on http://localhost:${PORT}`));
