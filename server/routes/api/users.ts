//* REQUIRE THU VIEN EX VS MONGO
import { Router } from "express";
import Users from "../database/users";
import { IUser } from "../interfaces";

const users = Router();

//! Get All User
users.get("/", (req, res) => {
  Users.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

//! Get One User
users.get("/:id", (req, res) => {
  Users.findById(req.params.id)
    .populate("parentId")
    .exec()
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.log(err);
    });
});

//! Edit User by Id
users.put("/:_id", (req, res) => {
  const post = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  } as IUser;
  Users.updateOne(
    { _id: req.params._id },
    { $set: { firstName: post.firstName, lastName: post.lastName } }
  )
    .then(() => {
      return res.status(200).send();
    })
    .catch((err) => {
      return res.status(500).send(err);
    });
});

//! Add User
users.post("/", async (req, res) => {
  const user = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    parentId: req.body.parentId,
  };
  const callUser = await Users.create(user);

  return res.status(200).send(callUser);
  ///201 thong bao tao thanh cong. khong noi dung
  // const posts = await
  // const post = {
  //   text: req.body.text,
  //   createAt: new Date(),
  // };
  // await posts.insertOne(post);
  // const result = await posts.find(post).toArray();
  // return res.status(200).json(result);
  ///201 thong bao tao thanh cong. khong noi dung
});

//! Delete User by Id
users.delete("/:id", async (req, res) => {
  console.log(req.params.id);
  await Users.deleteOne({ _id: req.params.id });
  res.status(200).send();
});

//! Delete All User
// router.delete("/:name", async (req, res) => {
//
//   console.log(req.params.name);
//   await Users.deleteMany({ firstName: req.params.name });
//   res.status(200).send();
// });

export default users;
