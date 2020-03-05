import * as Thicker from '../lib';
import * as Chai from 'chai';

import * as Crypto from '../lib/crypto_utils/crypto_modules';

const should = Chai.should();

describe('Library#index', () => {
    it('should export what\'s needed', () => {
        should.exist(Thicker.rand);
        should.exist(Thicker.geo);
        should.exist(Thicker.rec);
    });
});

