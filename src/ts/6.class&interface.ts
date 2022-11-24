interface Ifn{
    getName:()=>string,
}

function init(obj:Ifn){
  obj.getName()
}


class A{
    b=90
    getName(){
        return 'aa'
    }
}
init(new A())

let a = {}
export default a