// 双生词

let n = 2

function ListNode(val) {
  this.val = val
  this.pre = null
  this.next = null
}

for (let i = 0; i < n; i++) {
  let row = parseInt(prompt())
  let res = 'Sad'

  let s1 = String(prompt())
  let s2 = String(prompt())

  let ashead1 = null
  let as1 = s1.split('').map(item => {
    return new ListNode(item)
  })
  ashead1 = as1[0]
  as1[as1.length - 1].next = ashead1

  let preNode1 = as1[as1.length - 1]
  as1.forEach((item, index) => {
    if (index < as1.length - 1) item.next = as1[index + 1]
    item.pre = preNode1
    preNode1 = item
  })

  let ashead2 = null
  let as2 = s2.split('').map(item => {
    return new ListNode(item)
  })
  ashead2 = as2[0]
  as2[as2.length - 1].next = ashead2

  let preNode2 = as2[as2.length - 1]
  as2.forEach((item, index) => {
    if (index < as2.length - 1) item.next = as2[index + 1]
    item.pre = preNode2
    preNode2 = item
  })

  let start = null
  let head = ashead2
  while (head) {
    if (ashead1.val === head.val) {
      start = head
      break;
    }
    head = head.next
  }

  console.log(head,ashead1)

  let nn = 1
  let flag1 = true
  while (start && ashead1 && nn <as1.length) {
    if (start.val !== ashead1.val) {
      flag1 = false
    }
    start = start.next
    ashead1 = ashead1.next
    nn++
    console.log(nn)
  }

  nn = 1
  let flag2 = true
  while (start && ashead1 && nn < as1.length) {
    if (start.val !== ashead1.val ) {
      flag2 = false
    }
    start = start.pre
    ashead1 = ashead1.next
    nn++
  }

  if(flag1 || flag2) res='Yeah'
  
  console.log(res)
}