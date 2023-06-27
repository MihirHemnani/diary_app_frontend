import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext'


const UserDetails = () => {
    const { user } = useAuthContext()
    return (
        <>
            <div style={{ justifyContent: 'center' }}>
                <h1>Username: ${user.username}</h1>
                <h1>Email id: ${user.email}</h1>
            </div>
        </>
    )
}

export default UserDetails