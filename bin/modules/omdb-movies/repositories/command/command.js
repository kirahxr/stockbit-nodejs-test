const Mysql = require('../../../../helpers/databases/mysql/db');
const config = require('../../../../infra/configs/global_config');

class Command {

	async insertOne(payload) {
		const query = `
		INSERT INTO omdb_movies (endpoint, parameter, datetime) 
		VALUES 
			(
				'${payload.url}',
				'${payload.query}', 
				'${payload.dateTime}'
			)
		`;

		const db = new Mysql(config.get('/mysqlConfig'));
		const insert = await db.query(query, '');
		console.log(insert)

		return insert;
	}
}

module.exports = Command;