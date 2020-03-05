import * as Chai from 'chai';
import * as Crypto from '../lib/crypto_utils/crypto_modules';

const should = Chai.should();

describe('Library#crypto', () => {
    it('todo', () => {
        const test = Crypto.hexToBase64("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d");
        test.should.eql("SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t");
    });
    it('todo2', () => {
        const test = Crypto.fixedHexXor("1c0111001f010100061a024b53535009181c", "686974207468652062756c6c277320657965")
        //test.should.eql("746865206b696420646f6e277420706c6179");
        console.log(test);
    });
});