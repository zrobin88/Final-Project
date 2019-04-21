import axios from "axios";

export default {

  getProfiles: function() {
   return axios.get("api/profiles");
 },

 getModalProfile: function(id){
   console.log("id showing", id)
   return axios.get("api/profiles/" + id);
 },
  
  deleteProfile: function(id) {
    return axios.delete("/api/profiles/" + id);
  },
  saveProfile: function(profileData) {
   
    return axios.post("api/profiles", profileData);
  }
};
