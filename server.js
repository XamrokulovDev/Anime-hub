// importing 
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const path = require("path");
const connectDB = require("./config/db");
const errorHandle = require('./middlewares/error');

// dotenv 
dotenv.config();

// body-parse 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// "public/upload" file static 
app.use("/uploads", express.static(path.join(__dirname,"public/uploads")));

// developer tools 
if(process.env.NODE_ENV === "developer"){
    app.use(morgan("dev"));
};

// mongoDb server 
connectDB();

// errorHandle 
app.use(errorHandle);

// Routes 
app.use("/api/v1/auth", require("./Routes/user.route"));
app.use("/api/v1/anime", require("./Routes/anime.route"));
app.use("/api/v1/swagger", require("./Routes/swagger.route"));
app.use("/", (req,res,next)=>{
    res.send(`
        <h1>" /api/v1/auth/register or login " = Registration</h1>
        <h1>" /api/v1/anime/all " = anime list</h1>
        <h1>" /api/v1/swagger " = swagger</h1>
    `);
    next();
});

// PORT and Listening 
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Dastur ${PORT} da ishlamoqda...`);
});