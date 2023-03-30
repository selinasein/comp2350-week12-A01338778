const database = include("databaseConnection");
const User = include("models/user");
const Pet = include("models/pet");
const Joi = require("joi");

const router = require("express").Router();

router.get("/", async (req, res) => {
  console.log("page hit");
  try {
    console.log("Test");
    res.render("index", { message: "This is Awesome!" });
  } catch (ex) {
    res.render("error", { message: "Error" });
    console.log("Error");
    console.log(ex);
  }
});

router.get("/populateData", async (req, res) => {
  console.log("populate Data");
  try {
    let pet1 = new Pet({
      name: "Fido",
    });
    let pet2 = new Pet({
      name: "Rex",
    });
    await pet1.save();
    //pet1.id contains the newly created pet's id
    console.log(pet1.id);
    await pet2.save();
    //pet2.id contains the newly created pet's id
    console.log(pet2.id);
    let user = new User({
      first_name: "Me",
      last_name: "Awesome",
      email: "a@b.ca",
      password_hash: "thisisnotreallyahash",
      password_salt: "notagreatsalt",
      pets: [pet1.id, pet2.id],
    });
    await user.save();
    //user.id contains the newly created user's id
    console.log(user.id);
    res.redirect("/");
  } catch (ex) {
    res.render("error", { message: "Error" });
    console.log("Error");
    console.log(ex);
  }
});

module.exports = router;