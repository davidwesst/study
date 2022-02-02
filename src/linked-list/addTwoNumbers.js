/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let carryOver = false;
    
    let curr1 = l1;
    let curr2 = l2;
    let head = new ListNode(0, null);
    let result = head;
    
    while(curr1 !== null && curr2 !== null) {
        // add values
        let currTotal = 0;
        if(curr1 !== null) {
            currTotal += curr1.val;
        }
        if(curr2 !== null) {
            currTotal += curr2.val;
        }
        
        // check carryover
        if(currTotal > 9) {
            carryOver = true;
            currTotal = currTotal % 10;
        }
        
        // set result
        result.val = currTotal;
        
        
        // move along the list
        if(curr1) {
            curr1 = curr1.next;
        }
        if(curr2) {
            curr2 = curr2.next;
        }
        if(curr1 || curr2) {
            result.next = ListNode(0, null);
        }
    }
    
    return head;
};