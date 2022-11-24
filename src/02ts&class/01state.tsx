
import React,{ Component } from "react";

interface Istate {
    num:number
}
//extends Component<props类型,state类型>
export default class App extends Component<any,Istate>{
    state={
        num:0
        // num:'k'
    }
    input = React.createRef<HTMLInputElement>()


   render(){
    return (
        <div>
            <input type="text" ref={this.input} />
            <button onClick={
               ()=>{
                console.log(
                    (this.input.current as HTMLInputElement).value)
               }
            }>ADD</button>
        </div>
    )
   }
    
}