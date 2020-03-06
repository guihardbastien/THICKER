import * as Chai from 'chai';
import * as Crypto from '../lib/crypto_utils/crypto_modules';
import * as CUtils from '../lib/crypto_utils/utils';

const should = Chai.should();

describe('Library#crypto', () => {
    it('todo', () => {
        const test = Crypto.hexToBase64("49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d");
        test.should.eql("SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t");
    });
    it('todo2', () => {
        const test = Crypto.fixedHexXor("686974207468652062756c6c277320657965","1c0111001f010100061a024b53535009181c")
        test.should.eql("746865206b696420646f6e277420706c6179".toUpperCase());
    });
    it('todo3', () => {
        const hex = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";
        const test = Crypto.singleByteXorCipher(hex, 88);
        test.should.eql("Cooking MC's like a pound of bacon");
        
    });
    it('english scoring', () => {
        const hex = "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736";
        let arr: string[] = []
        for (let i = 0; i < 255; i++) {
            arr.push(Crypto.singleByteXorCipher(hex, i));
        }
        const test = CUtils.englishScoring(arr);
        test.should.eql("Cooking MC's like a pound of bacon");
    });
/*
    it('todo4', () => {
        let responses: string[] = [];
        CUtils.TO_TEST.forEach(hex=>{
        let arr: string[] = [];
        for (let i = 0; i < 255; i++) {
            arr.push(Crypto.singleByteXorCipher(hex, i));
        }
        responses.push(CUtils.englishScoring(arr));
        })
        const test = CUtils.englishScoring(responses);
        test.should.eql("Now that the party is jumping\n");
    });*/

    it('todo5', () => {
        const str = "Burning 'em, if you ain't quick and nimble I go crazy when I hear a cymbal";
        const res ="0b3637272a2b2e63622c2e69692a23693a2a3c6324202d623d63343c2a26226324272765272a282b2f20430a652e2c652a3124333a653e2b2027630c692b20283165286326302e27282f";
        
        const key = "ICE";
        const test = Crypto.repeatingKeyXor(str,key);
        //test.should.eql(res.toUpperCase());
       

    });
});