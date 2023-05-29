import { useState } from "react"
import loginContext from "./authContext"

const LoginState = (props) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [localLogIn, setLocalLogIn] = useState(false);
    return (
        <loginContext.Provider value={{ loggedIn, setLoggedIn, localLogIn, setLocalLogIn }}>
            {props.children}
        </loginContext.Provider>
    )
}

export default LoginState;