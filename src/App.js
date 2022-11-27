// // import logo from './logo.svg';
// // import { useEffect, useState } from 'react';
// // import './App.css';
// import {Routes,Route,Link, Outlet} from 'react-router-dom'
// import Weather from './components/weather'
// import {Board} from './components/board'
// function App() {
//   return (
//     <>
//     <nav className="hello" >
//       <ul>
//         <li><Link to='./'>Home</Link></li>
//         <li><Link to='./board'>board</Link></li>
//         <li>bye</li>
//       </ul>
//     </nav>
//     <div>
//       <Routes>
//         <Route path="/" element={<Heading/>}>
//           <Route path='/post' element={<Post/>} />
//         </Route>
//         <Route path='/board' element={<Board/>}/>
//         <Route path='/weather' element={<Weather/>}/>
//       </Routes>
//     </div>
//     </>
//   )
// }
// const Heading=()=>{
//   return(
//     <>
//     <nav className="hello" >
//       <ul>
//         <li><Link to='./'>Home</Link></li>
//         <li><Link to='./board'>board</Link></li>
//         <li>bye</li>
//       </ul>
//     </nav>
//     <Outlet/>
//     </>
//   )
// }
// const Post =()=>{
//   return(
//     <>
//     <div>This is a fookin post</div></>
//   )
// }
// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './Routes/About'
import Home from './Routes/Home'
import Root from './Routes/Root';
import NewPost from "./Routes/newPost";
import './App.css'
export default function App(){
    const router=createBrowserRouter([{
        path:'/',
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Home/>

            },{
                path:'/about',
                element:<About/>
            },{
                path:'/new',
                element:<NewPost/>
            }
        ]
    }])
    return (
        <RouterProvider router={router}/>
    )
}