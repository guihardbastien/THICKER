import * as Thicker from '../lib';
import * as Chai from 'chai';

const should = Chai.should();

describe('Library#index', () => {
    it('should export what\'s needed', () => {
        should.exist(Thicker.Random);
        should.exist(Thicker.Recursion);
        should.exist(Thicker.Geometry);
        should.exist(Thicker.String);
        should.exist(Thicker.Utils);
        should.exist(Thicker.Crypto);
    });
});

