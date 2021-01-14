import { createStore } from "vuex";
import authentication from "./modules/authentication.js";
import requests from "./modules/requests.js";
import coaches from "./modules/coaches.js";

const store = createStore({
	modules: {
		authentication,
		requests,
		coaches
	}
});

export default store;
