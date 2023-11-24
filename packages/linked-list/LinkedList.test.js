import { describe, it, expect } from 'vitest'
import LinkedList from './index'
describe('LinkedList', () => {
  it('创建空的链表', () => {
    const linkedList = new LinkedList()
    expect(linkedList.printList()).toBe('')
  })
})
