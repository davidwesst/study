/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    // return
    let head;
    
    // input edge cases
    if(!list1 && !list2) {
        head = null;
    }
    else if(!list1 && list2) {
        head = list2;
    }
    else if(list1 && !list2) {
        head = list1;
    }
    else {
        // merge list2 into list
        // find insert location for current node
        head = list1;
        
        let curr = list2;
        let prev;
        while(curr) {
            if(curr.val < head.val) {
                // set new head
                let temp = curr.next;
                curr.next = head;
                head = curr;
                curr = temp;    // move along in list2
            }
            else {
                // insert into tail
                prev = head;
                while(prev) {
                    if(!prev.next) {
                        // if at the end...append to tail
                        prev.next = curr;
                        prev = null;
                        curr = null;
                    }
                    else if (curr.val <= prev.next.val) {
                        let temp = curr.next;
                        curr.next = prev.next;
                        prev.next = curr;
                        curr = temp;
                        prev = null;    // exit tail search loop
                    }
                    else {
                        prev = prev.next
                    }
                }
            }
        }
    }
    
    return head;
};