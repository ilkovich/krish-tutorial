var TreeScanner = function(tree) {
    this.tree   = tree;
};

TreeScanner.prototype = {
    breadthFirstSearch: function() {
        /**
         * Implement a recursive function that returns a string of all the titles separated by a
         * pipe (e.g. item 1|item 2|item 3)
         * in BREADTH first order.
         * http://upload.wikimedia.org/wikipedia/commons/3/33/Breadth-first-tree.svg
         **/
    },
    depthFirstSearch: function() {
        /**
         * Implement a recursive function that returns a string of all the titles separated by a
         * pipe (e.g. item 1|item 2|item 3)
         * in DEPTH first order.
         * http://en.wikipedia.org/wiki/Depth-first_search#/media/File:Depth-first-tree.svg 
         **/
    }, 
    filterSearch: function(filter) {
        /**
         * Return an array of the titles of nodes in the tree with type === filter (Everything that isn't a folder)
         * In any order you like. This function should be recursive also. 
         **/
    }
};

module.exports = TreeScanner;
