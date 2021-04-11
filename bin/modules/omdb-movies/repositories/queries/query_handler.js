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

const healthCheck = async () => {
  const sender_id = new OmdbMovies(db);
  return sender_id.healthCheck();
};

module.exports = {
	search,
	detail,
  healthCheck
};
