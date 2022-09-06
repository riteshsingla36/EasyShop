const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const categoryRouter = require("./routes/category.route");
const subCategoryRouter = require("./routes/sub_category.route");
const userRouter = require("./routes/user.route");
const addressRouter = require("./routes/address.route");

dotenv.config({path: "./.env"});
mongoose.connect(process.env.DB_URI).then(() => console.log("moongoose connected successfully")).catch(error => console.log(error.meaasge));
app.use(express.json());
app.use(cors());


app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/user", userRouter);
app.use("/address", addressRouter);

app.listen(8000, console.log("Your app is running in 8000 port"))

