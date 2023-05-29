import React, { useState } from 'react'
import FlashBox from "./styles"

const Flashbox = ({ data, flips, handleFlip }) => {
    return (
        <div>
            <FlashBox sx={{
                width: { xs: "100%", sm: "80%", md: "50%" },
                left: { sm: "10vh", md: "0" },
            }}>
                <div className={`card ${flips[data._id] ? 'flip' : ""}`} onClick={() => handleFlip(data._id)} onKeyDown={() => handleFlip(data._id)} role="button" tabIndex={0}>
                    {flips[data._id] ? (
                        <div className="back">{data.answer}</div>
                    ) : (
                        <div className="front"><p className="p-flashcard-question">{data.question}?</p></div>
                    )}
                </div>
            </FlashBox>

        </div>
    )
}

export default Flashbox