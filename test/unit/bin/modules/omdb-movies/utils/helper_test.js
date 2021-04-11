const helper = require('../../../../../../bin/modules/omdb-movies/utils/helper');
const fetch = require('node-fetch');
const sinon = require('sinon');

describe(__filename, () => {
    describe('#searchOmdb', () => {
        let stubFetch;
        let stubHelperSearchOmdb;

        beforeEach(() => {
          stubFetch = sinon.stub(fetch, 'Promise').returns(Promise.resolve({Response: 'True'}));
          stubHelperSearchOmdb = sinon.stub(helper, 'searchOmdb');
        });

        afterEach(() => {
          stubFetch.restore();
          stubHelperSearchOmdb.restore();
        });

        it('should cover true statement', async () => {
          const config = {
              baseUrl: '',
              apiKey: ''
          }

          const payload = {
            title: '',
            page: ''
          }

          stubHelperSearchOmdb.resolves({Response: 'True'});
          stubFetch.resolves({Response: 'True'});
          await helper.searchOmdb(config, payload);
        });
      });
});
  