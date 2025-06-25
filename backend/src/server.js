const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");


const connectDatabase = require("./database/databaseConnection")

const errorHandler = require("./middlewares/errorHandler");


const app = express();


const PORT = process.env.PORT || 5000;





app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));





app.get("/", (req, res) => {
  res.send("Server is running");
});





app.use('/api/v1/user', require("./users/user.route"))

app.use('/api/v1/orders/assignments', require("./orders/orders.route"));



app.use(errorHandler);



app.listen(PORT, async () => {

  await connectDatabase()
  console.log(`Server is running on port  http://localhost:${PORT}`);
});
