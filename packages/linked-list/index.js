import Node from './LinkedListNode'
export default class LinkedList {
  constructor() {
    this.head = null // 链表的头节点，默认是null
    this.size = 0 // 链表的长度 默认是0
  }
  // 链表末尾添加节点
  append(data) {
    const newNode = new Node(data)
    if (!this.head) {
      // 如果链表为空
      this.head = newNode // 将新节点设置为头节点
    } else {
      // 从头结点开始遍历
      let current = this.head //
      while (current.next) {
        current = current.next // 移动到链表的末尾
      }

      current.next = newNode // 将新节点添加到链表的末尾
    }
    this.size++ // 链表的长度加1
  }
  // 在指定位置插入节点
  insertAt(data, index) {
    if (index < 0 || index > this.size) {
      return false // 检查插入位置是否合法
    }
    const newNode = new Node(data)
    let current = this.head
    let prev = null
    let currentIndex = 0
    if ((index = 0)) {
      // 如果是在头部插入
      newNode.next = this.head // 新节点指向源头节点
      this.head = newNode // 头结点变为新节点
    } else {
      while (currentIndex < index) {
        prev = current
        current = current.next
        currentIndex++
      }
      newNode.next = current // 新节点指向当前节点
      prev.next = newNode // 前一个节点指向新节点
    }
    this.size++
    return true
  }
  // 指定位置删除节点
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null // 检查删除的位置是否合法
    }
    let current = this.head
    let prev = null
    let currentIndex = 0
    if (index === 0) {
      // 如果删除头节点
      this.head = current.next
    } else {
      while (currentIndex < index) {
        prev = current
        current = current.next
        currentIndex++
      }
      prev.next = current.next
    }
    this.size--
    return current.data // 返回删除的节点
  }
  // 打印链表
  printList() {
    let current = this.head
    let list = ''
    while (current) {
      list += current.data + ' ' // 将节点数据拼接为字符串
      current = current.next // 移动到下一节点
    }
  }
}
