/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    // merge l1 into l2
    // return head of merged list
    function mergeLists(source, dest) {
        
        // check starting inputs
        if(!source && !dest) {
            return null;
        }
        else if(!source && dest) {
            return dest;
        }
        else if(source && !dest) {
            return source;
        }

        

        let head = dest;
        let curr = source;
        let temp, prev, check;
        
        while(curr) {
            // insert node
            if(curr.val <= head.val) {
                // insert in front, doesn't matter if they are equal
                temp = curr.next;
                curr.next = head;
                head = curr;

                curr = temp;
            }
            else {
                // find the the next value to insert in-front of


                if(head.next) {
                    prev = head;
                    check = head.next;
                    
                    while(check.val <= curr.val) {
                        if(check.next) {
                            prev = check;
                            check = check.next;
                        }
                        else {
                            // hit end of list, so append source node to tail of list
                            check.next = curr;
                            curr = null // exit outer loop
                            break;  // exit inner loop
                        }
                    }

                    // if continuing, insert and move along
                    if(curr) {
                        temp = curr.next; // save rest of source node list
                        prev.next = curr; // insert
                        curr.next = check;
                        curr = temp; // move to "next" node on source node list
                    }
                }
                else {
                    head.next = curr;
                    curr = null; 
                }
            }
        }
        
        
        return head;
    }
    
    let head = (lists[0]) ? lists[0] : null;
    // go through all lists and merge one by one
    if(lists.length > 0) {
        for(let i=1; i<lists.length; i++) {
            head = mergeLists(head, lists[i]);
        }
    }
    
    return head;
};