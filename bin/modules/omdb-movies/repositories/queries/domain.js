const Command = require('../command/command');
const wrapper = require('../../../../helpers/utils/wrapper');
const helper = require('../../utils/helper');
const moment = require('moment');
const config = require('../../../../infra/configs/global_config');

class omdbMovies {
  constructor(db) {
    this.command = new Command(db);
  }

  async search(payload) {
    const result = await helper.searchOmdb(config.get('/omdbConfig'), payload);
    if (result.Response !== 'True') return wrapper.error('fail', result.Error ? result.Error : 'Connection Error');

    const setQuery = {
      url: payload.url,
      query: JSON.stringify(payload.query),
      dateTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    await this.command.insertOne(setQuery);

    const newResult = {
      data: result.Search,
      total: result.totalResults,
      date: new Date()
    };

    return wrapper.data(newResult.data, 'Success get data movies', newResult.total, newResult.date, 200);
  }

  async detail(payload) {
    const result = await helper.detailOmdb(config.get('/omdbConfig'), payload);
    if (result.Response !== 'True') return wrapper.error('fail', result.Error ? result.Error : 'Connection Error');

    const setQuery = {
      url: payload.url,
      query: JSON.stringify(payload.query),
      dateTime: moment().format('YYYY-MM-DD HH:mm:ss')
    };

    await this.command.insertOne(setQuery);

    const newResult = {
      data: result,
      total: [result].length,
      date: new Date()
    };

    return wrapper.data(newResult.data, 'Success get detail movie', newResult.total, newResult.date, 200);
  }
}

module.exports = omdbMovies;
