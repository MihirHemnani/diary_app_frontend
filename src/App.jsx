import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Resgister from './pages/Register'
import Error404 from './pages/Error404'
import DairyPost from './pages/DairyPost'
import CreatePost from './pages/CreatePost'
// import Navbar from './pages/Navbar'

const App = () => {


    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Resgister />} />
                <Route path='/api/posts/:id' element={<DairyPost />} />
                <Route path='/createpost' element={<CreatePost />} />
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