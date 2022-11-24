export default class A{
    private a:[]=[]// 子类也不能访问
    public b:string='67'//公开
    protected c:number = 7  //自己和 子类 extends 
    test(a:string){
    //   this.c =8
    }
}

let a = new A()
// let b = a.number  无法访问
//let b = a.c  //无法访问

class C extends A{
  test1(){
    console.log(this.c,this.b)
  }
}



