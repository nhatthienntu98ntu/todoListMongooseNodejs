import { connect } from "mongoose";

const URL =
  "mongodb+srv://nhatthienntu:thien123@todelistexpress.vgq2f.mongodb.net/TodoList?retryWrites=true&w=majority";

const connectDB = () => {
  connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("connected...");
};

export default connectDB;
