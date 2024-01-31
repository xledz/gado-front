import {
  Box,
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
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import PageWrapper from '../components/PageWrapper';
import React from 'react';

const RegAnimais = () => {
  const [animal, setAnimal] = React.useState({
    codigoBrinco: '',
    pesoAtual: '',
    sexo: '',
    dataEntrada: '',
    dataSaida: '',
  });

  async function handleSubmit(event) {
    event.preventDefault();

    await fetch('http://localhost:8080/animal/cadastrar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(animal),
    }).then((response) =>
      console.log(response.status + ' cadastrado com sucesso')
    );
  }

  return (
    <>
      <PageWrapper>
        <Container maxWidth="sm" style={{ marginLeft: 0 }}>
          <Typography variant="h5" mb={2}>
            Cadastro de animal
          </Typography>

          <form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              <Stack direction="row" spacing={2}>
                <TextField
                  id="codigo-brinco"
                  fullWidth={true}
                  label="Código do brinco"
                  variant="outlined"
                  onChange={({ target }) =>
                    setAnimal((obj) => ({ ...obj, codigoBrinco: target.value }))
                  }
                />

                <FormControl sx={{ m: 1, minWidth: 110 }}>
                  <InputLabel>Sexo</InputLabel>
                  <Select
                    id="sexo-animal"
                    value={animal.sexo}
                    label="sexo"
                    onChange={({ target }) =>
                      setAnimal((obj) => ({ ...obj, sexo: target.value }))
                    }
                  >
                    <MenuItem value={'M'}>Macho</MenuItem>
                    <MenuItem value={'F'}>Fêmea</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack direction="row" spacing={4}>
                  <Box>
                    <InputLabel>Data de entrada</InputLabel>
                    <DatePicker
                      id="data-entrada"
                      onChange={(date) =>
                        setAnimal((obj) => ({
                          ...obj,
                          dataEntrada: `${date.$y}-${
                            date.$M + 1 < 10 ? '0' + (date.$M + 1) : date.$M + 1
                          }-${date.$D < 10 ? '0' + date.$D : date.$D}`,
                        }))
                      }
                    />
                  </Box>
                  <Box>
                    <InputLabel>Data de saída</InputLabel>
                    <DatePicker
                      id="data-saida"
                      onChange={(date) =>
                        setAnimal((obj) => ({
                          ...obj,
                          dataSaida: `${date.$y}-${
                            date.$M + 1 < 10 ? '0' + (date.$M + 1) : date.$M + 1
                          }-${date.$D < 10 ? '0' + date.$D : date.$D}`,
                        }))
                      }
                    />
                  </Box>
                </Stack>
              </LocalizationProvider>

              <TextField
                id="peso-atual"
                label="Peso atual"
                variant="outlined"
                onChange={({ target }) =>
                  setAnimal((obj) => ({ ...obj, pesoAtual: target.value }))
                }
              />
              <Button type="submit" variant="contained" ml="auto">
                Cadastrar
              </Button>
            </Stack>
          </form>
        </Container>
      </PageWrapper>
    </>
  );
};

export default RegAnimais;
