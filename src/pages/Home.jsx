import Typography from '@mui/material/Typography';
import PageWrapper from '../components/PageWrapper';
import { Container } from '@mui/material';

const Home = () => {
  return (
    <>
      <PageWrapper>
        <Container maxWidth="md">
          <Typography variant="h2" style={{ marginBottom: '20px' }}>
            Essa é a homepage
          </Typography>
          <Typography variant="p">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            nobis nisi iusto reiciendis necessitatibus aspernatur quasi nam
            sequi inventore laudantium. Sit numquam, molestiae adipisci nobis
            nulla laboriosam temporibus ipsam placeat.
          </Typography>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Home;
