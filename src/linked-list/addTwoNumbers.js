/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    function reverse(node) {
        let head = node;
        let prev = null;
        
        while(head) {
            // set the next
            let temp = head.next;
            head.next = prev;
            
            // update and move
            prev = head;
            head = temp;
        }
        
        return prev;
    }
    
    // reverse the inputs
    let revl1 = reverse(l1);
    let revl2 = reverse(l2);
    let carryover = false;
       
    // do the addition
    let answerHead;
    let answer;
    while(revl1 || revl2 || carryover) {
        // add a new digit to the answer
        if(!answer) {
            answer = new ListNode(0, null);
            answerHead = answer;
        }
        else {
            answer.next = new ListNode(0, null);
            answer = answer.next;
        }
        
        // add the digits that we have
        if(revl1 && revl2) {
            answer.val = revl1.val + revl2.val;
        }
        else if(!revl1 && revl2) {
            answer.val += revl2.val;
        }
        else if(!revl2 && revl1) {
            answer.val += revl1.val;
        }
        
        // handle carryover
        if(carryover) {
            answer.val += 1;
            carryover = false;
        }
        
        // set carryover
        if(answer.val >= 10) {
            carryover = true;
            answer.val = answer.val % 10;
        }
        
        // move to next digit
        if(revl1) {
            revl1 = revl1.next;
        }
        if(revl2) {
            revl2 = revl2.next;
        }
    }
    
    // reverse the answer
    return reverse(answerHead);
};