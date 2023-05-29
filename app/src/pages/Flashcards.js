import { Helmet } from 'react-helmet-async';
import { Button, Container, Typography, CircularProgress } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from "axios"
// @mui
import { styled } from '@mui/material/styles';
//
import Flashbox from "../components/flashbox/index"
import { StickyHeadTable as Table } from "../components/table/index"
// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    },
}));

const columns = [
    { id: 'index', label: 'Sr. No', minWidth: 100, format: (value) => value.toLocaleString('en-US'), },
    { id: 'question', label: 'Questions', align: 'left', minWidth: 200 },
    { id: 'answer', label: 'Answers', align: 'center', minWidth: 100 },
];

// ----------------------------------------------------------------------

export default function Flashcards({ checked }) {
    let index = 1 // eslint-disable-line no-const-assign
    const [data, setData] = useState([])
    const [flips, setFlips] = useState({})
    const [tableFlips, setTableFlips] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0)
    const [loader, setLoader] = useState(false)

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex === (data.length - 1)) {
            setCurrentIndex(data.length - 1)
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handleFlip = id => {
        setFlips({ ...flips, [id]: !flips[id] });
    };

    const handleTableFlip = id => {
        console.log(tableFlips)
        setTableFlips({ ...tableFlips, [id]: !tableFlips[id] });
    };

    const fetchData = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/fetchquestions`)
            setData(response.data.map(item => ({ ...item, index: index++ })))  // eslint-disable-line no-plusplus
            // for up all the question's initial flipped state into false, in the variable tableFlips
            setTableFlips(Array.from({ length: response.data.length }, (_, index) => ({ index: index + 1, flipped: false })));
            setLoader(true)
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div style={{ width: { md: '57vw' } }}>
            {loader ? (
                <>
                    <Helmet>
                        <title> Academy3s: Flashcards </title>
                    </Helmet>

                    <Container>
                        <Typography variant="h4" sx={{ mb: 5 }}>
                            Flashcards
                        </Typography>

                        {
                            checked ?
                                <Table key={1} columns={columns} rows={data} tableFlips={tableFlips} handleTableFlip={handleTableFlip} />
                                :
                                <>
                                    <div>
                                        <>
                                            {/* xs: "100%", sm: "80%", md: "50%" */}
                                            <Flashbox data={data[currentIndex]} flips={flips} handleFlip={handleFlip} />
                                            <Container sx={{ mt: 2, ml: { xs: "25%", sm: "35%", md: "15%" } }}>
                                                < Button variant="contained" onClick={handlePrev}>
                                                    Prev
                                                </Button>
                                                < Button sx={{ ml: 2 }} variant="contained" onClick={handleNext}>
                                                    Next
                                                </Button>
                                            </Container>
                                        </>
                                    </div>
                                </>
                        }
                    </Container>
                </>
            ) :
                <CircularProgress sx={{ position: "absolute", left: "50%", top: "50%" }} />}
        </div>
    );
}
