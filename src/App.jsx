import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Resgister from './pages/Register'
import Error404 from './pages/Error404'
import DairyPost from './pages/DairyPost'
import CreatePost from './pages/CreatePost'
import PasswordReset from './pages/PasswordReset'
import PasswordResetLink from './pages/PasswordResetLink'
import PasswordOTP from './pages/PasswordOTP'
// import { EditPost } from './pages/EditPost'
// import Navbar from './pages/Navbar'

const App = () => {
    const {user} = useAuthContext();

    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={user ? <Home /> : <Navigate to='/api/login'/>} />
                <Route path="/api/login" element={!user ? <Login /> : <Navigate to='/'/>} />
                <Route path="/api/register" element={!user ? <Resgister /> : <Navigate to='/'/> } />
                <Route path='/api/posts/:id' element={user ? <DairyPost /> : <Navigate to='/api/login'/>} />
                <Route path='/api/createpost' element={user ? <CreatePost /> : <Navigate to='/api/login'/>} />
                <Route path='/api/password_reset_link' element={!user ? <PasswordResetLink /> : <Navigate to='/'/>} />
                <Route path='/api/password_otp/:id/:token' element={!user ? <PasswordOTP /> : <Navigate to='/'/>} />
                <Route path='/api/password_reset/:id/:token' element={!user ? <PasswordReset /> : <Navigate to='/'/>} />
                {/* <Route path='/api/editpost/:id' element={user ? <EditPost /> : <Navigate to='/api/login'/>} /> */}
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