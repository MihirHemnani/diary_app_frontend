import { useState } from 'react'
import { useAuthContext } from './useAuthContext'

////////////////
// why state
// to know whether user is login or not
/////////////////

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const { dispatch } = useAuthContext();

    const login = async (email, password) => {
        // console.log(email + password)
        // console.log(JSON.stringify({ email, password }))
        try {
            setLoading(true);
            const response = await fetch(`https://dairy-post-api.onrender.com/api/user/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const json = await response.json();
            if (!response.ok) {
                setLoading(false)
                setError(json.error)
            } else {
                localStorage.setItem('dairy_user', JSON.stringify(json))
                dispatch({ type: "LOGIN", payload: json })
                console.log(json)
                setLoading(false);
            }

        } catch (err) {
            console.log(err);
        }
    }

    return {
        login, error, loading
    }
}