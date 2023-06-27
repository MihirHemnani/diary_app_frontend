import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'
import Navbar from './Navbar'
import Footer from './Footer'

const UserDetails = () => {
    const { user } = useAuthContext()
    return (
        <>
            <Navbar />
            <div className="min-vh-100" style={{ position: "relative", marginTop: '8rem' }}>
                <div className="card-body" style={{ maxWidth: "50rem", textDecoration: "none", margin: 'auto', marginTop: "2rem", textAlign: "justify" }}>
                    <h2 className="card-title mb-3" style={{ color: 'grey', textAlign: "center" }}><strong>User Information</strong></h2>
                </div>

                <table className="table" style={{ width: '80%', margin: 'auto', textAlign: 'center', background: 'black', color: 'white' }}>
                    {/* <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{user.user.username}</td>
                        </tr>
                        <tr>
                            <td>Email id</td>
                            <td>{user.user.email}</td>
                        </tr>
                    </tbody>
                </table>
            </div >
            <Footer />
        </>
    )
}

export default UserDetails