import { BrowserRouter, Routes , Route } from "react-router-dom"
import Findcoder from "./Components/Findcoder"
import Explore from "./Components/Explore"
import Challenge from "./Components/Challenge"
import Hire from "./Components/Hire"
import Dev from "./Components/Dev"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Findcoder/>
            <Routes>
                <Route element={<Explore/>} path="/comp1"/>
                <Route element={<Hire/>} path="/comp2"/>
                <Route element={<Dev/>} path="/comp3"/>
                <Route element={<Challenge/>} path="/comp4"/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App




// import React from "react"
// import { BrowserRouter , Routes , Route } from "react-router-dom"
// import HomeCrud from "./Crud/HomeCrud"
// import CreateUser from "./Crud/CreateUser"
// import User from "./Crud/User"
// import Edituser from "./Crud/Edituser"

// const App = () =>{
//     return(
//         <div>
//         <BrowserRouter>
//             <HomeCrud/>
//             <Routes>
//                 <Route element={<CreateUser/>} path="/CreateUser"/>
//                 <Route element={<User/>} path="/User"/>
//                 <Route element={<Edituser/>} path="/edit/:abc"/>
//             </Routes>
//         </BrowserRouter>
//         </div>
//     )
// }

// export default App

// import Tax from "./Components/Tax"
// import Email from"./Components/Email"
// const App=()=>{
//     return(
//         <div>
//            {/* <Tax/> */}
//            <Email/>
//         </div>
//     )
// }
// export default App