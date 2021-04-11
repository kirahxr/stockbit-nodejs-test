const assert = require('assert');
const sinon = require('sinon');

const Command = require('../../../../../../../bin/modules/omdb-movies/repositories/command/command');

describe('Omdb-Movies Command', () => {

    describe('insertOne', () => {
      const queryResult = {
        'err': null,
        'data': {
          '_id': '5bac53b45ea76b1e9bd58e1c',
          'username': 'alifsndev',
          'password': '8789ad457ac341e4fc4cad32'
        }
      };
  
      it('should success to insert one data to db', async() => {
  
        const payload = {
          url: '',
          query: '',
          dateTime: ''
        };

        const command = new Command();
        const res = await command.insertOne(payload);
        assert.equal(res.code, 200);
      });
    });
  
  });
  