let a:number[]=[1,2,3,4]
// let b:string[]=[1,2,3,4]
let b:(number | string)[]=[1,2,3,4]
let c:Array<string>=['1']
let d:Array<string|number>=['1']
let obj  ={a,b,c,d}
export default obj