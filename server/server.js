const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

const categoryRouter = require("./routes/category.route");
const subCategoryRouter = require("./routes/sub_category.route");
const userRouter = require("./routes/user.route");
const addressRouter = require("./routes/address.route");
const productRouter = require("./routes/product.route");
const cartRouter = require("./routes/cart.route");
const cartItemRouter = require("./routes/cart_item.route");
const cloudinary = require('cloudinary').v2;
const cookieParser = require('cookie-parser')
const session = require('express-session')
const onBoarding = require('./routes/onboarding.route');

dotenv.config({ path: "./.env" });
mongoose.connect(process.env.DB_URI).then(() => console.log("moongoose connected successfully")).catch(error => console.log(error.meaasge));
app.use(express.json());
app.use(cors());
app.use(cookieParser());
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

app.use(session({  
  name: 'EasyShop',
  secret: process.env.SESSION_SECRET,  
  resave: false,
  saveUninitialized: false,
  cookie: { 
    secure: false, // This will only work if you have https enabled!
    maxAge: 60000 // 1 min
  } 
}));

app.use("/category", categoryRouter);
app.use("/subcategory", subCategoryRouter);
app.use("/user", userRouter);
app.use("/address", addressRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);
app.use("/cartitem", cartItemRouter);
app.use('/auth', onBoarding);

app.listen(8000, console.log("Your app is running in 8000 port"));

