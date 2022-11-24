// function test (a:string,b:string):void{
function test (a:string,b:string,c?:number):string{
   return '123'
}

let a:string =test('1','3',6)
console.log(a)


// 

interface Ifn{
    (a:string,b:string,c?:number):string
}

let fn2:Ifn = function(a:string,b:string,c?:number):string{
return 'jekk'
}

fn2('a','b')

interface In{
    name:string,
    id:number,
    getId?:(a:number)=>string
}


let obj3:In = {
    name:'1',
    id:0,
}

console.log(obj3)
export default test