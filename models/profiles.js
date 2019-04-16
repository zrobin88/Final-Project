const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String, required: true },
  links: { type: String, required: true},
  age: { type: Number, required: true},
  instrument: { type: String, required: true},
  style: { type: String, required: true},
  experience: { type: Number, required: true},
  about: { type: String, required: true},
});

const Profile = mongoose.model("Profile", profileSchema);

module.exports = Profile;
