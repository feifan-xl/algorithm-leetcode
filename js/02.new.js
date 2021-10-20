
function MyNew (target, ...args) {
  let obj = {}
  obj.prototype = target.prototype
  let res = obj.call(obj, ...args)
  return typeof res === 'object' ? res : obj
}
