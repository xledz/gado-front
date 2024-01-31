import React from 'react';
import PageWrapper from '../components/PageWrapper';
import {
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

const RegNutricao = () => {
  const [nutricao, setNutricao] = React.useState({
    produto: '',
    preco: '',
    peso: '',
    medida: '',
  });

  async function handleSubmit() {
    event.preventDefault();
    await fetch('http://localhost:8080/nutricao/cadastrar/racao', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nutricao),
    }).then((response) =>
      console.log(response.status + ' cadastrada com sucesso')
    );
  }

  return (
    <>
      <PageWrapper>
        <Container maxWidth="sm" sx={{ marginLeft: 0 }}>
          <Typography variant="h5" mb={2}>
            Cadastro de Nutrição
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack direction="row" spacing={2}>
              <TextField
                id="produto"
                label="Produto"
                value={nutricao.produto}
                variant="outlined"
                onChange={({ target }) =>
                  setNutricao((obj) => ({ ...obj, produto: target.value }))
                }
              />
              <TextField
                id="preco"
                label="Preço"
                value={nutricao.preco}
                variant="outlined"
                onChange={({ target }) =>
                  setNutricao((obj) => ({ ...obj, preco: target.value }))
                }
              />
              <Stack direction="row" alignItems="top">
                <TextField
                  id="peso"
                  label="Peso"
                  value={nutricao.peso}
                  variant="outlined"
                  sx={{ maxWidth: 145 }}
                  onChange={({ target }) =>
                    setNutricao((obj) => ({ ...obj, peso: target.value }))
                  }
                />
                <FormControl
                  sx={{ ml: 0.5, minWidth: 100 }}
                  style={{ marginTop: '0' }}
                >
                  <InputLabel>Medida</InputLabel>
                  <Select
                    id="medida-nutricao"
                    value={nutricao.medida}
                    label="Medida"
                    onChange={({ target }) =>
                      setNutricao((obj) => ({ ...obj, medida: target.value }))
                    }
                  >
                    <MenuItem value={'kg'}>Kg</MenuItem>
                    <MenuItem value={'g'}>g</MenuItem>
                  </Select>
                </FormControl>
              </Stack>
            </Stack>
            <Button
              sx={{ marginTop: '20px' }}
              type="submit"
              variant="contained"
            >
              Cadastrar
            </Button>
          </form>
        </Container>
      </PageWrapper>
    </>
  );
};

export default RegNutricao;
