
// interface

interface Obj {
    a:string,
    b:number,
    id:string,
    name?:string,
    [propName:string]:any //剩余的属性不设置类型
}

let obj:Obj ={
    // a:122
    a:'22',
    b:9,
    id:'hh',
    name1:1

}

export default obj