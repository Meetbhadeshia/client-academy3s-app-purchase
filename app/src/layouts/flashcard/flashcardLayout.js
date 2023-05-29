import React, { useState, useContext } from 'react'
import sideBarContext from '../../context/sideBarContext';
import Flashcards from "../../pages/Flashcards"
import Nav from './nav/index';

const FlashcardLayout = () => {
    const [checked, setChecked] = useState(false);
    const handleSwitch = (event) => {
        setChecked(event.target.checked);
    };
    const a = useContext(sideBarContext)
    return (
        <div>
            <Flashcards checked={checked} />
            <Nav openSidebarNav={a.sideBarOpen} onCloseSideNav={() => a.setSideBarOpen(false)} checked={checked} handleSwitch={handleSwitch} anchor={"right"} />
        </div>
    )
}

export default FlashcardLayout