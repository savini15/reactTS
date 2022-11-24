import React, { useState,useRef } from 'react'

export default function App() {
  const [name,setName] =useState('hello')
  const [list,setList] =useState<string[]>(['sss'])
  const input = useRef<HTMLInputElement>(null)
  return (
    <div>
      <button onClick={()=>{
        // setName(122)

        console.log(input.current?.value)
        setList([...list,'kkk'])
      }
      }>add </button>
      <hr></hr>

      <input  ref={input} />
      <span>{name}</span>

      {
        list.map(i=> <li key={i}>{i}</li>)
      }

      <Child2 name='chisnmane'></Child2>
      <Child3 name='chisnmane'></Child3>
      </div>
  
  )
}


interface Iprops {
  name:string,
  cd?:()=>number
  cd2?:()=>void
}


function Child2(props:Iprops) {
  return (
    <div>{props.name}</div>
  )
}


let Child3:React.FC<Iprops>= (props)=>{
  return (

    <div>child3----</div>
  )
}
