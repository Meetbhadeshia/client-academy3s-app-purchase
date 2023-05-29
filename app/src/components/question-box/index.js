import React, { useState, useEffect } from 'react';
import { Box, Button, FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import "./styles.css";

const QuestionBox = ({ question, optionA, optionB, optionC, optionD, answer, index, setScore, page }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [disabled, setDisabled] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [viewAnswer, setViewAnswer] = useState(false) // for view button of answer

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value)
    };

    const UniversalFunction = () => {
        console.log(clicked)
        if (clicked) { // if any option clicked
            setDisabled(true)
            if (selectedOption === answer) {
                setScore(score => score + 1) // increase score because correct answer
            }
        }
    }

    useEffect(() => {
        UniversalFunction()
    }, [clicked, selectedOption, viewAnswer])

    useEffect(() => {
        setSelectedOption('');
        setDisabled(false);
        setClicked(false);
        setViewAnswer(false);
    }, [page])

    return (
        <div>
            <Box>
                <Typography variant="h5">{index}) {question}</Typography>
                <RadioGroup value={selectedOption} onChange={handleOptionChange} sx={{ padding: '10px 0', gap: '3px' }}>
                    <FormControlLabel
                        control={<Radio sx={{ color: selectedOption === optionA ? (optionA === answer ? 'white !important' : '') : '' }} />}
                        disabled={disabled}
                        value={optionA}
                        className={
                            selectedOption === optionA
                                ? (optionA === answer ? 'correct-answer' : 'false-answer')
                                : clicked ? (optionA === answer ? 'correct-answer' : '') : ''}
                        label={optionA}
                        sx={{
                            width: { xs: '100%', sm: '35%', md: '50%' }, borderRadius: '30px',
                            cursor: clicked ? 'auto' : 'default',
                            "& .Mui-disabled": {
                                color: selectedOption === optionA ? (optionA === answer ? 'white !important' : 'white !important')
                                    : clicked ? (optionA === answer ? 'white !important' : '') : ''
                            },
                        }}
                        onClick={() => setClicked(true)}
                    />

                    <FormControlLabel
                        control={<Radio sx={{ color: selectedOption === optionB ? ((optionB === answer) ? 'white !important' : '') : '' }} />}
                        disabled={disabled}
                        value={optionB}
                        className={
                            selectedOption === optionB
                                ? (optionB === answer ? 'correct-answer' : 'false-answer')
                                : clicked ? (optionB === answer ? 'correct-answer' : '') : ''}
                        label={optionB}
                        sx={{
                            width: { xs: '100%', sm: '35%', md: '50%' }, borderRadius: '30px',
                            cursor: clicked ? 'auto' : 'default',
                            "& .Mui-disabled": {
                                color: selectedOption === optionB ? (optionB === answer ? 'white !important' : 'white !important')
                                    : clicked ? (optionB === answer ? 'white !important' : '') : ''
                            },
                        }}
                        onClick={() => setClicked(true)}
                    />

                    <FormControlLabel
                        control={<Radio sx={{ color: selectedOption === optionC ? ((optionC === answer) ? 'white !important' : '') : '' }} />}
                        disabled={disabled}
                        value={optionC}
                        className={selectedOption === optionC
                            ? (optionC === answer ? 'correct-answer' : 'false-answer')
                            : clicked ? (optionC === answer ? 'correct-answer' : '') : ''}
                        label={optionC}
                        sx={{
                            width: { xs: '100%', sm: '35%', md: '50%' }, borderRadius: '30px',
                            cursor: clicked ? 'auto' : 'default',
                            "& .Mui-disabled": {
                                color: selectedOption === optionC ? (optionC === answer ? 'white !important' : 'white !important')
                                    : clicked ? (optionC === answer ? 'white !important' : '') : ''
                            },
                        }}
                        onClick={() => setClicked(true)}
                    />

                    <FormControlLabel
                        control={<Radio sx={{ color: selectedOption === optionD ? ((optionD === answer) ? 'white !important' : '') : '' }} />}
                        disabled={disabled}
                        value={optionD}
                        className={selectedOption === optionD
                            ? (optionD === answer ? 'correct-answer' : 'false-answer')
                            : clicked ? (optionD === answer ? 'correct-answer' : '') : ''}
                        label={optionD}
                        sx={{
                            width: { xs: '100%', sm: '35%', md: '50%' }, borderRadius: '30px',
                            cursor: clicked ? 'auto' : 'default',
                            "& .Mui-disabled": {
                                color: selectedOption === optionD ? (optionD === answer ? 'white !important' : 'white !important')
                                    : clicked ? (optionD === answer ? 'white !important' : '') : ''
                            },
                        }}
                        onClick={() => setClicked(true)}
                    />
                </RadioGroup>
                {viewAnswer ?
                    <Box sx={{ padding: '15px' }}>
                        <Typography variant="subtitle1"><span style={{ color: 'green' }}>Answer:</span> {answer}</Typography>
                    </Box> : ''
                }
                <Box className="Buttons-below-questions" onClick={() => setViewAnswer(!viewAnswer)}>
                    <Button variant="contained">Answer</Button>
                </Box>
            </Box>
        </div>
    );
};

export default QuestionBox;