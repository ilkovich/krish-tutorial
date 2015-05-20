var TreeScanner = function(tree) {
    this.tree   = tree;
}
  , FOLDER   = 1
  , IMAGE    = 2
  , DOCUMENT = 3
;

TreeScanner.prototype = {
    breadthFirstSearch: function(queue, state) {
        /**
         * Implement a recursive function that returns a string of all the titles separated by a
         * pipe (e.g. item 1|item 2|item 3)
         * in BREADTH first order.
         * http://upload.wikimedia.org/wikipedia/commons/3/33/Breadth-first-tree.svg
         **/
         var node;

         if(queue && !queue.length) {
             return state;
         }

         if(!queue) {
             queue = [];
             node = this.tree.root;
             state = node.title;
         } else {
             node = queue.shift();
             state+= ('|' + node.title);
         }

         if(node.type === 1 && node.children.length) 
            queue.splice.apply(queue, [queue.length, 0].concat(node.children)); 

         return this.breadthFirstSearch(queue, state);
    },
    depthFirstSearch: function(node, state) {
        /**
        * Implement a recursive function that returns a string of all the titles separated by a
        * pipe (e.g. item 1|item 2|item 3)
        * in DEPTH first order.
        * http://en.wikipedia.org/wiki/Depth-first_search#/media/File:Depth-first-tree.svg 
        **/

        if(!node) { 
            node = this.tree.root;
            state = node.title;
        } else {
            state += ('|'+node.title);
        }

        if(node.type === 1 && node.children.length) {
            for(var i=0; i<node.children.length; i++) {
                state = this.depthFirstSearch(node.children[i], state);
            }
        }

        return state;
    }, 
    filterSearch: function(filter, node, state) {
        /**
         * Return an array of the titles of nodes in the tree with type === filter (Everything that isn't a folder)
         * In any order you like. This function should be recursive also. 
         **/
        if(!node) { 
            node  = this.tree.root;
            state = [];
        } 

        if(node.type === filter) {
            state.push(node.title);
        }

        if(node.type === 1 && node.children.length) {
            for(var i=0; i<node.children.length; i++) {
                this.filterSearch(filter, node.children[i], state);
            }
        }

        return state;
    }
};

module.exports = TreeScanner;
