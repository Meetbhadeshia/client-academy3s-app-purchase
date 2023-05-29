import { useState } from "react"
import loginContext from "./loginContext"

const LoginState = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [displayName, setDisplayName] = useState("")
    return (
        <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn, displayName, setDisplayName }}>
            {props.children}
        </loginContext.Provider>
    )
}

export default LoginState;