import { useState, useEffect, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import { Box, Button, Container, Modal, TablePagination, Typography } from '@mui/material';
import Countdown from 'react-countdown';
import { useNavigate } from 'react-router-dom';
import QuestionBox from '../components/question-box';

export default function MockTest() {
  const data = [{
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": "'Risk transfer' is mainly concerned with recovery from an unforeseeable loss event occurrence. The main tool of a transfer plan is which of the following?",
    "optionA": "widespread CCTV system that can detect loss events before they happen.",
    "optionB": "Elaborate alarm systems that alert personnel about the existence of a threat.",
    "optionC": "Adequate levels of insurance to cover costs of recovery if a loss event occurred.",
    "optionD": " Extensive fire suppression systems to minimize the potential catastrophic damage.",
    "answer": "widespread CCTV system that can detect loss events before they happen.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },
  {
    "question": " The standard we will be held to as a security officer in a civil lawsuit is known as",
    "optionA": "a responsibility standard.",
    "optionB": "a reliability standard.",
    "optionC": "a reasonable and necessary standard.",
    "optionD": " a respectful standard.",
    "answer": "a reliability standard.",
    "multiSelect": false,
    "courseName": "IFCO-CPO",
    "moduleIndex": 1
  },]

  const navigate = useNavigate()

  const [score, setScore] = useState(0)

  // modal logic starts
  const [startCountdown, setStartCountdown] = useState(false);
  const [open, setOpen] = useState(false) // for modal's open and close handling
  const [examEnd, setExamEnd] = useState(false)

  const handleOpen = () => setOpen(true); // for modal open
  const handleClose = () => setOpen(false); // for modal close

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const startCoundownFunction = () => {
    setOpen(false)
    setStartCountdown(true)
  }

  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <span>
        {hours} Hours : {minutes} Minutes : {seconds} Seconds
      </span>
    );
  }; // for hours, minutes and seconds

  useEffect(() => {
    handleOpen()
  }, [examEnd])

  // modal logic ends

  // pagination logic 
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  // pagination logic end

  return (
    <>
      <Helmet>
        <title> Academy3s: Mock Test </title>
      </Helmet>

      {/* modal to show information startin before test */}
      <Modal
        keepMounted
        open={open}
        // onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          {examEnd ?
            (<>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Time's up!
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Exam has ended. Thank you for your participation.
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                Score: {score}
              </Typography>
              <Button variant="contained" onClick={startCoundownFunction} sx={{ marginTop: "20px" }}>Restart</Button>
              <Button variant="contained" onClick={() => navigate("/dashboard/learn")} sx={{ marginLeft: "20px", marginTop: "20px" }}>Learn</Button>
            </>) :
            (<>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                Necessary Information before the mock test starts
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                1) Don't open new tabs after exam starts
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                2) Never cheat in exam
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                3) Start exam after preparing well
              </Typography>
              <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                4) Don't open book while giving exam
              </Typography>
              <Button variant="contained" onClick={startCoundownFunction} sx={{ marginTop: "20px" }}>Start</Button>
            </>)}
        </Box>
      </Modal>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Mock Test
        </Typography>
        {startCountdown &&
          <Countdown date={Date.now() + (3000)} onComplete={() => setExamEnd(true)} renderer={renderer} />}
        <Typography variant="subtitle1">Score: {score}</Typography>
      </Container>
      <Container>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((question, i) => {
              return (
                <Fragment key={i}>
                  <Box className="questions-box" sx={{ margin: '20px 0' }}>
                    <QuestionBox
                      question={question.question}
                      optionA={question.optionA}
                      optionB={question.optionB}
                      optionC={question.optionC}
                      optionD={question.optionD}
                      answer={question.answer}
                      index={i + 1}
                      setScore={setScore}
                      page={page}
                    />
                  </Box>
                  <hr style={{ width: '70%' }} />
                </Fragment>
              );
            })}
        </Box>
      </Container>
      <TablePagination
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );

}
