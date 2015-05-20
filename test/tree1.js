var FOLDER = 1
  , IMAGE  = 2
  , DOCUMENT = 3
  , tree = {
    root: {
        title: 'Tree',
        type: FOLDER,
        children: [{ 
            title: 'item 1',
            type: FOLDER,
            children: [{
                title: 'item 1-1',
                type: DOCUMENT
            }, {
                title: 'item 1-2',
                type: DOCUMENT
            }]
        },{ 
            title: 'item 2',
            type: IMAGE
        },{ 
            title: 'item 3',
            type: IMAGE
        },{ 
            title: 'item 4',
            type: DOCUMENT
        },{ 
            title: 'item 5', 
            type: FOLDER,
            children: [{
                title: 'item 5-1',
                type: FOLDER,
                children: [{
                    title: 'item 5-1a',
                    type: DOCUMENT,
                }, {
                    title: 'item 5-1b',
                    type: DOCUMENT
                }]
            }, {
                title: 'item 5-2',
                type: DOCUMENT
            }]
        },{ 
            title: 'item 6',
            type: FOLDER,
            children: [{
                title: 'item 6-1',
                type: DOCUMENT
            }, {
                title: 'item 6-2',
                type: FOLDER,
                children: [{
                    title: 'item 6-2a',
                    type: DOCUMENT
                }]
            }, {
                title: 'item 6-3',
                type: DOCUMENT
            }, {
                title: 'item 6-4',
                type: FOLDER,
                children: []
            }]
        }]
    }
};

module.exports = tree;
