const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  imageUrl: { type: String},
  links: { type: String},
  age: { type: Number, required: true},
  instrument: { type: String, required: true},
  style: { type: String, required: true},
  experience: { type: String, required: true},
  about: { type: String}
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
