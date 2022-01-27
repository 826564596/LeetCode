/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let b = a = {};
    while (l1 || l2) {
        // 求和
        let sum = (l1 && l1.val || 0) + (l2 && l2.val || 0) + (a.val || 0);
        // 取模
        let flag = parseInt(sum / 10);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
        // 取余
        a.val = sum % 10;
        // 判断是否需要进位（新增链表节点）（试试不带 if 条件跑一遍就明白了）
        if (l1 || l2 || flag) {
           a.next = { val: flag }
        }
        a = a.next;
    }
    return b;
