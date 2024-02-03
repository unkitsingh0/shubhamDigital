const express = require("express");
const cors = require("cors");
const connectingToDatabase = require("./database/database");
const userRouter = require("./routes/userRoute");
const categoryRouter = require("./routes/categoryRoute");
const productRouter = require("./routes/productRoute");
const dotEvn = require("dotenv");

const app = express();
dotEvn.config();
//Port No
let PORT = process.env.PORT || 8080;

//Database connection
connectingToDatabase(process.env.DATABASEURI);

//middleware
app.use(cors());
app.use(express.json());

//Routes

app.use("/api/auth", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);

//listing to the server
app.listen(PORT, (e) => {
  console.log(`Server is running on port no ${PORT}`);
});
