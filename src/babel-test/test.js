const name = 'test'

let p1 = new Promise()

let fn1 = ()=>{
    return p1
}

export async function fun2() {
    await fun1()
}

window.a = 123
console.log(window.a)