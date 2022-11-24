import React from 'react'
import {HashRouter,Routes,Route} from 'react-router-dom'
import Home from '../views/home'
import Me from '../views/me'
export default function RouteApp() {
  return (
    <div>


        <HashRouter>

            <Routes>


                <Route path='/' element={<Home/>} ></Route>
                {/* 这个咋不起作用了？、 */}
                <Route path='/me' element={<Me/>} ></Route>
                <Route path='/home' element={<Home/>}></Route>
                
            </Routes>
       
            

           
        </HashRouter>
    </div>
  )
}
