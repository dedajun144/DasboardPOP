import express from "express";
import db from "./config/Database.js";
/* import Users from "./models/UserModel.js"; */
import router from "./rootes/index.js";
import Pm from "./models/PmModel.js";
import dotenv from "dotenv";
// Untuk api dapat diakses di luar domain
import cors from "cors";

import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connected");
  /* Membuat database baru */
  /* await Users.sync(); */
  /*   await Pm.sync(); */
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

//Sebagai middelware
app.use(cookieParser());

//supaya bisa menggunakan format json
app.use(express.json());

// midellwere
app.use(router);

app.listen(5000, () => console.log("Server running at port 5000"));
