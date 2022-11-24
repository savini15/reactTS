
import React,{ Component } from "react";

interface Istate {
    num:number
}
//extends Component<props类型,state类型>
export default class App extends Component<any,Istate>{
    state={
        num:0
    }
    input = React.createRef<HTMLInputElement>()


   render(){
    return (
        <div>
          
          <Child name="123"></Child>
        </div>
    )
   }
    
}

interface Iprops{
    name:string
}
class Child extends Component<Iprops,any>{
    state={
        num:0
    }
    input = React.createRef<HTMLInputElement>()


   render(){
    return (
        <div>
          child====
          {this.props.name}
       
        </div>
    )
   }
    
}