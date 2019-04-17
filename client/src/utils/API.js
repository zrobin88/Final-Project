import axios from "axios";

export default {

  //getProfiles: function() {
  //   return axios.get("/api/profiles");
  // },
  // // Gets the profile with the given id
  // getProfile: function(id) {
  //   return axios.get("/api/profiles/" + id);
  // },
  //  // Gets the profile with the given location
  //  getLocation: function(location) {
  //   return axios.get("/api/profiles/" + location);
  // },
  //  // Gets the profile with the given instrument
  //  getInstrument: function(instrument) {
  //   return axios.get("/api/profiles/" + instrument);
  // },
  //  // Gets the profile with the given style
  //  getStyle: function(style) {
  //   return axios.get("/api/profiles/" + style);
  // },

  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  saveProfile: function(profileData) {
    return axios.post("/api/profiles", profileData);
  }
};
