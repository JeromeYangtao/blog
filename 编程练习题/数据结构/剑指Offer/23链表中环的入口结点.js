// 题目描述
// 一个链表中包含环，请找出该链表的环的入口结点。

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  if (!pHead) {
    return null
  }
  var meeting = meetingNode(pHead)
  if (!meeting) {
    return null
  }
  var nodeLoop = 1
  var node1 = meeting
  // 计算换的节点数
  while (node1.next != meeting) {
    node1 = node1.next
    nodeLoop++
  }
  node1 = pHead
  // 双指针，快的指针比慢的指针快环的节点数步
  for (var i = 0; i < nodeLoop; i++) {
    node1 = node1.next
  }
  var node2 = pHead
  while (node1 != node2) {
    node1 = node1.next
    node2 = node2.next
  }
  return node1
  // 找出相遇的节点，快的指针走两步，慢的走一步
  function meetingNode(node) {
    if (!node || !node.next) {
      return null
    }
    var slow = node.next
    var fast = slow.next
    while (fast && slow) {
      if (fast === slow) {
        return fast
      }
      slow = slow.next
      fast = fast.next
      if (fast) {
        fast = fast.next
      }
    }
    return null
  }
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop
}
