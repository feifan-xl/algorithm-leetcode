
// 01. 
class Person {
    taskQueue = []
    constructor (name) {
        this.name = name
        this.taskQueue.push(() => this.sayHi())
        this.runTaskQueue()
    }

    nextTask () {
        if (this.taskQueue.length > 0) {
            const task = this.taskQueue.shift()
            if (typeof task === 'function') {
                task()
                this.nextTask()
            }
            if (typeof task === 'number') {
                setTimeout(() => this.nextTask, )
            }
        }
    }

    runTaskQueue () {
        setTimeout(() => this.nextTask())
    }
    
    sayHi () {
        console.log(`hi  this is ${this.name}`)
        return this
    }

    eat (something) {
        console.log(something)
        return this
    }

    sleep (time) {
        this.taskQueue.push(time)
    }

    sleepFirst(time) {

    }
}



// 02.

const timeout = (ms) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

const ajax1 = () =>
  timeout(2000).then(() => {
    console.log("1");
    return 1;
  });

const ajax2 = () =>
  timeout(1000).then(() => {
    console.log("2");
    return 2;
  });
  
const ajax3 = () =>
  timeout(2000).then(() => {
    console.log("3");
    return 3;
  });

mergePromise = (ajaxArray) => {

  // 1,2,3 done [1,2,3] 此处写代码 请写出ES6、ES3 2中解法

};
mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log("done");
  console.log(data); // data 为[1,2,3]
});
// 执行结果为：1 2 3 done [1,2,3]

// 02-01 es6
mergePromise = ajaxArray => {
    return (async function () {
        let ret = []
        let idx = 0 
        let len = ajaxArray.length
        while (idx < len) {
            let data = await ajaxArray[idx]()
            ret.push(data)
            idx++
        }
        return ret
    })()
}