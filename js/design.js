
// 01. factory
const multiply = x => num => x * num
const double = multiply(2)



// 02. single
class Single {
    constructor () {}
}
Single.getInstance = (function () {
    let instance
    return function () {
        if (instance) {
            instance = new Single()
        }
        return instance
    }
})()

