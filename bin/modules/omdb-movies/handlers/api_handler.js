const validator = require('../utils/validator');
const queryModel = require('../repositories/queries/query_model');
const queryHandler = require('../repositories/queries/query_handler');

const search = async (req, res) => {
	const { query, url } = req;
	const payload = {
		query,
		url
	};

	const validate = validator.isValidPayload(req.query, queryModel.search);
	if (!validate.err) {
		const searchMovies = await queryHandler.search(payload);
		res.status(searchMovies.code).send(searchMovies);
	} else {
		res.status(400).send(validate.message);
	};
};

const detail = async (req, res) => {
	const { query, url } = req;
	const payload = {
		query,
		url
	};

	const validate = validator.isValidPayload(req.query, queryModel.detail);
	if (!validate.err) {
		const detailMovies = await queryHandler.detail(payload);
		res.status(detailMovies.code).send(detailMovies);
	} else {
		res.status(400).send(validate.message);
	};
};

module.exports = {
	search,
	detail
};