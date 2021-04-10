import axios from "axios";

export default {
    getEmployees: function() {
        return axious.get("https://randomuser.me/api/?results=200&nat=us");
    }
};