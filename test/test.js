/*global describe,it */
var assert      = require('assert')
  , factorial   = require('../part1/factorial')
  , sumOfDigits = require('../part2/sumOfDigits') 
  , min         = require('../part3/min')
  , TreeScanner = require('../part4/treeScanner.js')
  , tree1       = require('./tree1')
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

describe('part4', function() {
    it('output tree breadth first', function() {
        var ts = new TreeScanner(tree1);
        assert.equal(ts.breadthFirstSearch(), 
            [ 
                'Tree', 
                'item 1',
                'item 2',
                'item 3',
                'item 4',
                'item 5',
                'item 6',
                'item 1-1',
                'item 1-2',
                'item 5-1',
                'item 5-2',
                'item 6-1',
                'item 6-2',
                'item 6-3',
                'item 6-4',
                'item 5-1a',
                'item 5-1b',
                'item 6-2a',
            ].join('|'));
    });

    it('output tree depthFirstSearch', function() {
        var ts = new TreeScanner(tree1);
        assert.equal(ts.depthFirstSearch(), [ 
            'Tree', 
            'item 1',
            'item 1-1',
            'item 1-2',
            'item 2',
            'item 3',
            'item 4',
            'item 5',
            'item 5-1',
            'item 5-1a',
            'item 5-1b',
            'item 5-2',
            'item 6',
            'item 6-1',
            'item 6-2',
            'item 6-2a',
            'item 6-3',
            'item 6-4',
        ].join('|'));
    });

    it('filters tree by folders', function() {
        var ts = new TreeScanner(tree1);
        assert.deepEqual(ts.filterSearch(1), [
           'Tree',
           'item 1',
           'item 5',
           'item 5-1',
           'item 6',
           'item 6-2',
           'item 6-4',
        ]);
        assert.deepEqual(ts.filterSearch(2), [
            'item 2',
            'item 3'
        ]);
        assert.deepEqual(ts.filterSearch(3), [
            'item 1-1',
            'item 1-2',
            'item 4',
            'item 5-1a',
            'item 5-1b',
            'item 5-2',
            'item 6-1',
            'item 6-2a',
            'item 6-3',
        ]);
    });
});
