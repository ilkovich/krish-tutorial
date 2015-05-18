/*global describe,it */
var assert      = require('assert')
  , factorial   = require('../part1/factorial')
  , sumOfDigits = require('../part2/sumOfDigits') 
  , min         = require('../part3/min')
;

describe('part1', function() {
    it('should calculate factorials', function() {
        assert.throws(function() { factorial('asfd'); }, Error);
        assert.equal(factorial(3), 6, '3! should equal 6');
        assert.equal(factorial(-1), 1, '-1! should equal 1');
        assert.equal(factorial(5), 120, '5! shoudl equal 120');
    });
});

describe('part2', function() {
    it('sums up all numbers', function() {
        assert.equal(sumOfDigits(234), 9, '234 should equal 9');
        assert.equal(sumOfDigits(-12), 3, '-12 should equal 3');
        assert.equal(sumOfDigits(12), 3, '12 should equal 3');
        assert.equal(sumOfDigits(39), 12, '39 should equal 12');
    });
});

describe('part3', function() {
    it('find min value in array', function() {
        assert.throws(function() { min(234); }, Error, '234 should equal 9');
        assert.equal(min([-12, 1, 5, -15]), -15, 'should be -15');
        assert.equal(min([12]), 12, 'should be 12');
        assert.equal(min([]), null, 'should be null');
        assert.equal(min(['asdf', 12, 234, 10, null]), null, 'should be 10');
    });
});
