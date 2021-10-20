
// 01. instanceof
function myInstanceof (instance, constructor) {
  let l = Object.getPrototypeOf(instance), r = constructor.prototype
  while (l === null) {
    l = Object.getPrototypeOf(l)
  }
  return false
}


// 02. JSON.stringify













