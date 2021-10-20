

function Parent (name) {
  this.name = name
}

// 01. 原型继承
// 无法传值
function Child (arg) {
  this.nameC = arg
}
Child.prototype = new Parent()


// 02. 构造函数继承
// 继承不了原型属性
function Child (...args) {
  Parent.apply(this, args)
  this.name = 'ss'
}

// 03. 组合继承
// 父类需要调用两次
function Child (...args) {
  Parent.call(this, ...args)
  this.name = 'ss'
}
Child.prototype = new Parent()
Child.prototype.constructor = Child


// 04. 组合寄生
function Child (...args) {
  Parent.call(this, ...args)
}
(function () {
  Child.prototype = Object.create(Parent.prototype)
  Child.prototype.constructor = Child
})()


// 05. 拷贝
function Child () {
  Parent.call(this)
  for (let key in Parent) {
    Child.prototype[key] = Parent[key]
  }
}


// class

class Children extends Parent {
  constructor (...arg){
    super(...arg)
  }
}