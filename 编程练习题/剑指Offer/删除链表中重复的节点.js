// 题目描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。
// 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5

function ListNode(x) {
  this.val = x
  this.next = null
}
function deleteDuplication(pHead) {
  if (!pHead) {
    return null
  }
  var tempHead = new ListNode(-1)
  tempHead.next = pHead
  var preNode = tempHead //前节点
  var curr1 = preNode.next //当前节点
  var curr2 = curr1.next //后节点
  while (curr1) {
    // 节点不重复或者到了最后一个
    if (!curr2 || curr2.val !== curr1.val) {
      if (curr1.next !== curr2) {
        // 节点到了最后一个
        clear(curr1, curr2)
        preNode.next = curr2
      } else {
        preNode = curr1
      }
      curr1 = curr2
      if (curr2) {
        curr2 = curr2.next
      }
    } else {
      //出现了重复的节点
      curr2 = curr2.next
    }
  }
  return tempHead.next

  function clear(node, stop) {
    var temp
    while (node !== stop) {
      temp = node.next
      node.next = null
      node = temp
    }
  }
}
module.exports = {
  deleteDuplication: deleteDuplication
}
