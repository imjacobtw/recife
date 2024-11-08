import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT_NUMBER = Number(process.env.PORT_NUMBER);

const app = express();

app.get("/", (req, res, next) => {
    res.send("Hello World!");
})

app.listen(PORT_NUMBER, () => {
    console.log(`Server started on port ${PORT_NUMBER}.`);
});