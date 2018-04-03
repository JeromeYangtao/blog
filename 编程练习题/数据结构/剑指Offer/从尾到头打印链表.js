// 题目描述
// 输入一个链表，从尾到头打印链表每个节点的值。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
  // write code here
  if (!head) {
    return []
  }
  let tempArr = []
  while (head) {
    tempArr.push(head.val)
    head = head.next
  }
  return tempArr.reverse()
}
module.exports = {
  printListFromTailToHead: printListFromTailToHead
}
