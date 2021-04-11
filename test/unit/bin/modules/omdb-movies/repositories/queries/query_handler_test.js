const OmdbMovies = require('../../../../../../../bin/modules/omdb-movies/repositories/queries/domain');
const queryHandler = require('../../../../../../../bin/modules/omdb-movies/repositories/queries/query_handler');

const sinon = require('sinon');
const assert = require('assert');

describe('OmdbMovies-queryHandler', () => {

    const payload = {};
  
    describe('search', () => {
  
      it('should return success', async() => {
        sinon.stub(OmdbMovies.prototype, 'search').resolves({data: {}, code:200});
  
        const rs = await queryHandler.search(payload);
  
        assert.notEqual(rs.data, null);
        assert.equal(rs.code, 200);
  
        OmdbMovies.prototype.search.restore();
      });
    });
  
    describe('detail', () => {
  
        it('should return success', async() => {
          sinon.stub(OmdbMovies.prototype, 'detail').resolves({data: {}, code:200});
    
          const rs = await queryHandler.detail(payload);
    
          assert.notEqual(rs.data, null);
          assert.equal(rs.code, 200);
    
          OmdbMovies.prototype.detail.restore();
        });
      });
  });
  