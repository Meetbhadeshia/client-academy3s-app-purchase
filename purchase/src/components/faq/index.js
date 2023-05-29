import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function FAQ() {
    const FAQuestions = [
        {
            question: 'What is MUI?',
            answer: "MUI (Material-UI) is a popular React UI framework based on Google's Material Design principles. It provides a set of customizable and reusable React components that can be used to build beautiful and responsive user interfaces."
        },
        {
            question: 'How do I install MUI?',
            answer: "You can install MUI by running the following command in your terminal: npm install @mui/material @emotion/react @emotion/styled"
        },
        {
            question: 'How do I install MUI?',
            answer: "You can install MUI by running the following command in your terminal: npm install @mui/material @emotion/react @emotion/styled"
        },
        {
            question: 'How do I install MUI?',
            answer: "You can install MUI by running the following command in your terminal: npm install @mui/material @emotion/react @emotion/styled"
        },
    ]
    return (
        <div>
            {FAQuestions.map((singleFAQ, index) => {
                return (
                    <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`faq-${index}`} id={`faq-${index}-header`}>
                            <Typography variant="h6">{singleFAQ.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1">
                                {singleFAQ.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                );
            })}

            {/* <Accordion sx={{ marginTop: '.2px !important' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="faq-2" id="faq-2-header">
                    <Typography variant="h6">{FAQuestion.question}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body1">
                        {FAQuestion.answer}
                    </Typography>
                </AccordionDetails>
            </Accordion> */}
            {/* add more Accordion components for additional FAQs */}
        </div>
    );
}

export default FAQ;