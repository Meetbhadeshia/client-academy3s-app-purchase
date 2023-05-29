import { Helmet } from 'react-helmet-async';
import { Container, Stack, Typography } from '@mui/material';

export default function RealTest() {
    return (
        <>
            <Helmet>
                <title> Academy3s: Real Test </title>
            </Helmet>

            <Container>
                <Typography variant="h4" sx={{ mb: 5 }}>
                    Real Test
                </Typography>
            </Container>
        </>
    );
}