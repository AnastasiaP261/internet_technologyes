import axios from 'axios';

const axiosConfig = {
	baseURL: "http://localhost:8080/api/"
}

export async function getHrs() {
	return await axios.get('hr', axiosConfig).then(response => response.data);
}

export async function getVacanciesOfHr(hrId) {
	return await axios.get(`vacancy/hr/${hrId}`, axiosConfig).then(response => response.data);
}

export async function saveHr(hr) {
	return await axios.post('hr', hr, axiosConfig).then(response => response.data);
}

export async function saveVacancy(vacancy) {
	return await axios.post('vacancy', vacancy, axiosConfig).then(response => response.data);
}

export async function changeVacancy(vacancyDto) {
	return await axios.put('vacancy', vacancyDto, axiosConfig).then(response => response.data);
}