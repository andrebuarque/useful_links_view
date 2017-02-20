import axios from 'axios';

const URL_BASE = 'http://localhost:3000/tags';
const BASIC_AUTH = {
	username: 'name',
	password: 'password'
};

const TagService = {
	all() {
		return axios.get(URL_BASE, { auth: BASIC_AUTH });
	},

	new(obj) {
		return axios.post(URL_BASE, obj, { auth: BASIC_AUTH });
	},

	update(obj) {
		return axios.put(`${URL_BASE}/${obj.id}`, obj, { auth: BASIC_AUTH });
	},

	delete(id) {
		return axios.delete(`${URL_BASE}/${id}`, { auth: BASIC_AUTH });
	}
};

export default TagService;