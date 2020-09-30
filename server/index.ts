import * as express from "express";
import * as cors from "cors";
import connectDB from "./routes/config/config";
import router from "./routes/api/users";

const app = express();

//middleware
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());
connectDB();

app.use("/users", router);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server start on port ${port}`));
