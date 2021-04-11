const Command = require('../../../../../../../bin/modules/omdb-movies/repositories/command/command');
const OmdbMovies = require('../../../../../../../bin/modules/omdb-movies/repositories/queries/domain');
const helper = require('../../../../../../../bin/modules/omdb-movies/utils/helper');
const moment = require('moment');
const config = require('../../../../../../../bin/infra/configs/global_config');

const assert = require('assert');
const sinon = require('sinon');


describe('OmdbMovies-domain', () => {

    const payload = {};

    const db = {};
  
    const omdbMovies = new OmdbMovies(db);

    let helpersearchOmdbStub;
    let helperdetailOmdbStub;
  
    before(() => {
        helpersearchOmdbStub = sinon.stub(helper, 'searchOmdb');
        helperdetailOmdbStub = sinon.stub(helper, 'detailOmdb');
    });
  
    after(() => {
        helpersearchOmdbStub.restore();
        helperdetailOmdbStub.restore();
    });
  
    describe('search', () => {
  
      it('should success', async() => {
        helpersearchOmdbStub.resolves({ Response: 'True'})
  
        const res = await omdbMovies.search(payload);
        assert.equal(res.code, 200);
      });
  
      it('should error with key Error', async() => {
        helpersearchOmdbStub.resolves({ Response: 'Fail', Error: 'Connection Error'})
  
        const res = await omdbMovies.search(payload);
        assert.equal(res.code, 500);
      });

      it('should error without key Error', async() => {
        helpersearchOmdbStub.resolves({ Response: 'Fail'})
  
        const res = await omdbMovies.search(payload);
        assert.equal(res.code, 500);
      });
    });
  
    describe('detailOmdb', () => {
  
        it('should success', async() => {
            helperdetailOmdbStub.resolves({ Response: 'True'})
    
          const res = await omdbMovies.detail(payload);
          assert.equal(res.code, 200);
        });
    
        it('should error with key Error', async() => {
          helperdetailOmdbStub.resolves({ Response: 'Fail', Error: 'Connection Error'})
    
          const res = await omdbMovies.detail(payload);
          assert.equal(res.code, 500);
        });
  
        it('should error without key Error', async() => {
            helperdetailOmdbStub.resolves({ Response: 'Fail'})
    
          const res = await omdbMovies.detail(payload);
          assert.equal(res.code, 500);
        });
      });
  });
  