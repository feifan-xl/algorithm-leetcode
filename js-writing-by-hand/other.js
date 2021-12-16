

// 01. tree -list
const list = arr => {
  let result = []
  while (arr.length > 0) {
    const node = arr.shift()
    const children = node.children
    if (children.length && children.length > 0) {
      arr = [...children, ...arr]
    }
    delete node.children
    result.push(node)
  }
  return result
}


// 02. list - tree


const tree = list => {
  let result = [], map = {}

  list.forEach( i => {
    const { id, pid } = i
    if (!map[id]) {
      map[id] = {
        children: []
      }
    }
    map[id] = {
      ...i,
      children: map[id].children
    }
    const item = map[id]
    if (pid === 0) {
      result.push(item)
    } else {
      if (!map[pid]) {

      }
      map[pid].children.push(item)
    }
  })
  return result
}








