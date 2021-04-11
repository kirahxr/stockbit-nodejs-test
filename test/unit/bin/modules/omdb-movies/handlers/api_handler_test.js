const sinon = require('sinon');
const assert = require('assert');

const validator = require('../../../../../../bin/modules/omdb-movies/utils/validator');
const omdbHandler = require('../../../../../../bin/modules/omdb-movies/handlers/api_handler');
const queryModel = require('../../../../../../bin/modules/omdb-movies/repositories/queries/query_model');
const queryHandler = require('../../../../../../bin/modules/omdb-movies/repositories/queries/query_handler');


describe('User Omdb Movie Handler', () => {

    let searchStub;
    let detailStub;
  
    const req = {
      body: {}
    };
  
    const res = {
        send: function(){},
        json: function(err){
            console.log("\n : " + err);
        },
        status: function(responseStatus) {
           return {
               send: function(){}
           }
        }
    };
  
    beforeEach(() => {
      searchStub = sinon.stub(queryHandler, 'search');
      detailStub = sinon.stub(queryHandler, 'detail');
    });
  
    afterEach(() => {
        searchStub.restore();
        detailStub.restore();
    });
  
    describe('search', () => {
      it('should cover success', async() => {
        sinon.stub(validator, 'isValidPayload').resolves({
            err: null,
            data: {}
        });    
        searchStub.resolves({code:200})
        await omdbHandler.search(req, res);
        validator.isValidPayload.restore();
      });
      it('should return user not found', async() => {
        sinon.stub(validator, 'isValidPayload').resolves({
          err: true,
          data: {}
        });
        await omdbHandler.search(req, res);
        validator.isValidPayload.restore();
      });
    });
  
    describe('detail', () => {
        it('should cover success', async() => {
          sinon.stub(validator, 'isValidPayload').resolves({
              err: null,
              data: {}
          });    
          detailStub.resolves({code:200})
          await omdbHandler.detail(req, res);
          validator.isValidPayload.restore();
        });
        it('should return user not found', async() => {
          sinon.stub(validator, 'isValidPayload').resolves({
            err: true,
            data: {}
          });
          await omdbHandler.detail(req, res);
          validator.isValidPayload.restore();
        });
      });
  });
  