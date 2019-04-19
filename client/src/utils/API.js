import axios from "axios";

export default {

  getProfiles: function() {
   return axios.get("api/profiles");
 },
  
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  saveProfile: function(profileData) {
   
    return axios.post("api/profiles", profileData);
  }
};
