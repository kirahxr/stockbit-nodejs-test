const OmdbMovies = require('./domain');
const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');
const db = new Mysql(config.get('/mysqlConfig'));

const search = async (payload) => {
  const omdbMovies = new OmdbMovies(db);
	const getData = async payload => omdbMovies.search(payload);
	return getData(payload);
};

const detail = async (payload) => {
  const omdbMovies = new OmdbMovies(db);
	const getData = async payload => omdbMovies.detail(payload);
	return getData(payload);
}

module.exports = {
	search,
	detail
};
