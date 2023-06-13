import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Resgister from './pages/Register'
import Error404 from './pages/Error404'
// import Navbar from './pages/Navbar'

const App = () => {


    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Resgister />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </Router>
        
        </>
    );
}

export default App





// Wrong way
// const App = () => {
//     return (
//         <>
//             {/* Wrong way */}
//             {/* <Layout /> */}


            
//         </>
//     )
// }