


// 01. new
// 02. instanceof
// 03. Object.create
// 04. Object.assign
// 05. filter
// 06. reduce
// 06. flat
// 07. call
// 08. apply
// 09. bind
// 10. debounce
// 11. throttle
// 12. deepclone
// 13. promise
// 14. promise.resolve //
// 15. promise.reject
// 16. promise.all
// 17. promise.race
// 18. promise.catch
// 19. async
// 20. 继承
// 21. compose
// 22. currying









// 01. new
function MyNew (Fn, ...args) {
  let obj = Object.create(Fn.prototype)
  let res = Fn.call(obj, ...args)
  return typeof res === 'object'? res : obj
}

// 02. instanceof
function MyInstanceof (left, right) {
  let l = Object.getPrototypeOf(left), r = r.prototype
  while(l === null) {
    if (l === r) return true
    l = Object.getPrototypeOf(l)
  }
  return false
} 


// 03. Object.create

function create (prototype, properties) {
  if (typeof prototype !== 'function' && typeof prototype !== 'object' && typeof prototype !== null) {
    throw new Error()
  }
  let obj = {}
  Object.setPrototypeOf(obj, prototype)
  Object.defineProperties(obj, properties)
  return obj
}

// 04. object.assign
function assign (target, ...args) {
  if (typeof target === undefined || typeof target === null) throw new Error()

  const targetObj = Object(target)
  Object.getOwnPropertyNames(target).forEach(i => {
    Object.defineProperties(targetObj, Object.getOwnPropertyDescriptor(target, i))
  })
  for (let i = 0; i < args.length; i++) {
    // if (Object.getOwnPropertyDescriptor(target, ))
    Object.defineProperties(targetObj, args[i])
  }
}

//  for...in  说明能遍历自己对象上的的可枚举属性和还遍历了原型上可枚举属性
// Object.keys() 只能遍历自己的对象上的可枚举的属性，不能遍历自己原型上可枚举的属性

// Object.getOwnPropertyNames() 它遍历自身对象的所有属性，包括可枚举不可枚举，但是原型上的属性是无法遍历的

// 不可枚举 Reflect.ownKeys()获取对象自身所有的属性键名，包括Symbol类型属性
// Object.getOwnPropertySymbols()获取对象自身Symbol类型属性


// 04. filter
Array.prototype.myFilter = function (fn, context) {
  if (typeof fn !== 'function') throw new Error()
  let arr = this, res = []
  let len = arr.length
  for (let i = 0; i< len; i++) {
    const result = fn.call(context, arr[i], i, arr)
    result && res.push(arr[i])
  }
  return res
}

// 05. reduce
// [].reduce((arr, cur, i, all) => {}, init)
Array.prototype.myReduce = function (fn, init) {
  let arr = this
  let i = init === undefined ? 1 : 0
  let res = init === undefined ? init : arr[0]
  for (; i < arr.length; i++) {
    temp = fn.call(this, res, arr[i], i, arr)
  }
  return res
}


// 06. flat
function flat (arr) {
  return arr.reduce((arr, cur) => [...arr, Array.isArray(cur) ? flat(cur) : cur], [])
}



// 07. call
Function.prototype.MyCall = function (context, ...args) {
  if (typeof this !== 'function') throw new Error('must be a function')
  context = context || window
  context.fn = this
  let res = context.fn(...args)
  delete context.fn
  return res
}


// 08. apply
Function.prototype.MyApplly = function (context, ...args) {

}

// 09. bind
Function.prototype.myBind = function (context, ...arg1) {
  let that = this
  return function (...arg2) {
    context = context || window
    context.fn = that
    let res = context.fn(...arg1, ...arg2)
    delete context.fn
    return res
  }
}


// 10. debounce 防抖  最后一次n

function debounce (fn, wait) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    } else {
      fn.call(this, ...args)
    }
    timer = setTimeout(() => {
      clearTimeout(timer)
    }, wait)
  }
}


// 11. 节流 
function throttle (fn, wait) {
  let timer 
  return function (...args) {
    if (timer) return
    timer = setTimeout(() => {
      fn.call(this, ...args)
    }, wait)
  }
}

function throttle (fn, wait) {
  let prev = 0
  return function (...args) {
    let now = +new Date()
    if (now - prev > wait * 1000) {
      fn.apply(this, args)
      prev= now
    }
  }
}



// 12. deepclone

function deepclone (obj) {
  let type = Object.prototype.toString.call(obj)
  if (type !== '[object Object]' && type !== '[object Array]') return obj
  let target = type === '[object Array]' ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnproperty(key)) {
      target[key] = deepclone(obj[key])
    }
  }
  return target
}


// 13. Promise

function MyPromise (fn) {
  let that = this
  this.status = 'pending'
  this.resolveCall = []
  this.rejectCall = []
  
  function resolve (value) {
    console.log(11)
    that.status = 'resolved'
    that.value = value
  }

  function reject (e) {
    this.value = e
    this.status = 'rejected'
    this.rejectCall.forEach(fn => fn())
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}
MyPromise.prototype.then = function (resolve, reject) {
  switch (this.status) {
    case 'resolved':
      console.log(1)
      this.call.push(resolve(that.value))
      break;
    case 'rejected':
      reject(that.value)
      break;
  }
}

a = new MyPromise((res, rej) => {
  setTimeout(() => {
    debugger
    res(5)
  }, 1000)
})

a.then((res) => {
  console.log(res);
})



// 14. Promise.resolve

Promise.prototype.resolve = function (value) {
  if (value instanceof Promise) return value
  if (typeof value === 'object' || typeof value === 'function') {
    try {
      //  promise 接收 thenable对象 (具有 then方法的对象)
      let then = value.then
      if (typeof then === 'function') {
          return new Promise(then.bind(value));
      }
    } catch (e) {

    }
  }
  return new Promise((resolve) => resolve(value))
}


// 15. Promise.reject


Promise.prototype.reject = function (e) {
  return new Promise((res, rej) => rej(e))
}





// 16. promise.all()

Promise.prototype.all = function (promises) {
  const value = [], count = 0
  return new Promise((reject, resolve) => {
    promises.forEach((item, i) => {
      Promise.resolve(item).then(res => {
        value[i] = res
        count++
        if (count === promises.length) {
          reject(value)
        }
      }, e => {
        resolve(e)
      })
    })
  })
}



// 17. promise.race
Promise.prototype.race = function (promises) {
  return new Promise((reject, resolve) => {
    promises.forEach(i => {
      Promise.resolve(i).then(res => {
        resolve(res)
      }, e => reject(e))
    })
  })
}


// 18. promise.catch



// 19. async

function run (genF) {
  return new Promise((resolve, reject) => {
    const gen = genF()
    function step (nextF) {
      let next
      try {
        next = nextF()
      } catch (e) {
        reject(e)
      }
      if (next.done) return resolve(next.value)
      Promise.resolve(next.value).then(res => {
        step(() => gen.next(res))
      }, e => step(() => {gen.throw(e)}))
    }
    step(() => gen.next(undefined))

  })
}


// 20. 继承
function Parent () {
  this.name = 'P'
}
// 原型
function Child () {}
Child.prototype = new Parent()
Child.prototype.constructor = Child

// 构造
function Child () {
  Parent.call()
}





// 21. compose
function compose (...fns) {
  return fns.reduce((a, b) => (...args) => b(a(...args)))
}


// 22. curry
// simple
function curry (fn, ...arg1) {
  return function (...arg2) {
    return fn.call(fn, ...arg1, arg2)
  }
}
// normal
function curry (fn, args = []) {
  return function (...arg1) {
    let newArg = [...args, ...arg1]
    if (newArg.length === fn.length) {
      return fn.apply(this, newArg)
    } else {
      return curry.apply(this, fn, newArg)
    }
  }
}
// add
function add (...arg1) {
  let args = [...arg1]
  const _add = (...arg2) => {
    args = [...args, ...arg2]
    return _add
  }
  _add.toString = function () {
    args.reduce((a , b) => a + b)
  }
  return _add
}
