/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    // contains references to new nodes
    let nodeMap = new Map();
    
    // generate map key from node
    function generateKey(node) {
        if(!node) {
            return null;
        }
        else {
            let val, nextVal, randomVal;
            val = node.val;
            nextVal = (!node.next) ? "null" : node.next.val;
            randomVal = (!node.random) ? "null" : node.random.val;

            return `${val}${nextVal}${randomVal}`;   
        }
    }
    
    // copy a node
    function copy(node) {
        if(!node) {
            return null;
        }
        else {
            let key = generateKey(node);
            if(nodeMap.has(key) === true) {
                // if found, return the created object
                return nodeMap.get(key);
            }
            else {
                // create new entry
                let nextCopy = copy(node.next);
                let randomCopy = copy(node.random);
                let nodeCopy = new Node(node.val, nextCopy, randomCopy);
                nodeMap.set(key, nodeCopy);
            }
        }
    }
    
    // return
    let copyHead = copy(head);
    return copyHead;
};