import React, { useState, useContext } from 'react'
import sideBarContext from '../../context/sideBarContext';
import Learn from "../../pages/Learn"
import Nav from './nav/index';

const LearningMaterial = () => {
    const a = useContext(sideBarContext)
    return (
        <div>
            <Learn />
            <Nav openSidebarNav={a.sideBarOpen} onCloseSideNav={() => a.setSideBarOpen(false)} anchor={"right"} />
        </div>
    )
}

export default LearningMaterial;