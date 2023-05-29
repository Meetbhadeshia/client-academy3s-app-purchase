import { useState } from "react"
import sideBarContext from "./sideBarContext"

const SidebarState = (props) => {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    return (
        <sideBarContext.Provider value={{ sideBarOpen, setSideBarOpen }}>
            {props.children}
        </sideBarContext.Provider>
    )
}

export default SidebarState;