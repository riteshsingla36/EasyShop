const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const cloudinary = require('cloudinary').v2;
const session = require('express-session')
const oneWeek = 1000 * 60 * 60 * 24 * 7;
const MongoDBStore = require("connect-mongodb-session")(session);
const cookieParser = require('cookie-parser');

const categoryRouter = require("./routes/category.route");
const subCategoryRouter = require("./routes/sub_category.route");
const userRouter = require("./routes/user.route");
const addressRouter = require("./routes/address.route");
const productRouter = require("./routes/product.route");
const cartRouter = require("./routes/cart.route");
const cartItemRouter = require("./routes/cart_item.route");
const onBoarding = require('./routes/onboarding.route');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));
app.use(cookieParser());
dotenv.config({ path: "./.env" });

mongoose.connect(process.env.DB_URI).then(() => console.log("moongoose connected successfully")).catch(error => console.log(error.meaasge));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});


const store = new MongoDBStore({
  uri: process.env.DB_URI,
  collection: "loginSessions",
});

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true
  })
);

app.use(session({
  key: "user",
  secret: 'tdfnkcyrdrcc',
  resave: true,
  rolling: true,
  saveUninitialized: false,
  store: store,
  cookie: {
    expires: oneWeek
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

