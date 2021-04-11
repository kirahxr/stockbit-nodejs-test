require('dotenv').config();
const confidence = require('confidence');

const config = {
	port: process.env.PORT,
	mysqlConfig: {
		connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
		host: process.env.MYSQL_HOST,
		user: process.env.MYSQL_USERNAME,
		password: process.env.MYSQL_PASSWORD,
		database: process.env.MYSQL_DATABSE
	},
	omdbConfig: {
		baseUrl: process.env.OMDB_API,
		apiKey: process.env.OMDB_API_KEY
	}
}

const store = new confidence.Store(config);

exports.get = key => store.get(key)