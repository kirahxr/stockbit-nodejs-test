const fetch = require('node-fetch');

const searchOmdb = async (config, payload) => {
	const { baseUrl, apiKey } = config;
	const { title, page = '' } = payload.query;

	const result = await fetch(`${baseUrl}/?apikey=${apiKey}&s=${title}&page=${page}`)
	.then(async response => {
		const result = await response.json();
		return result;
	})
	.catch(error => {
		return error;
	});

	return result;
};

const detailOmdb = async (config, payload) => {
	const { baseUrl, apiKey } = config;
	const { id, title = '' } = payload.query;

	const result = await fetch(`${baseUrl}/?apikey=${apiKey}&i=${id}&t=${title}`)
	.then(async response => {
		const result = await response.json();
		return result;
	})
	.catch(error => {
		return error;
	});

	return result;
};

module.exports = {
	searchOmdb,
	detailOmdb
}