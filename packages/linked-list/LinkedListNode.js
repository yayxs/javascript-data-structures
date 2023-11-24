export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value // 节点存储的数据
    this.next = next // 指向下一个节点的指针 默认 是 null
  }
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
