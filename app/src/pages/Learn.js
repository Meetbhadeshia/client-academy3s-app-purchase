import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import AnyFileViewer from '../components/any-file-viewer/index';

export default function Learn() {
  return (
    <>
      <Helmet>
        <title> Academy3s: Learn </title>
      </Helmet>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Learning Material
        </Typography>
        {/* <AnyFileViewer /> */}
      </Container>
    </>
  );
}
