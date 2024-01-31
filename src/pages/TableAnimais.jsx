import React from 'react';
import PageWrapper from '../components/PageWrapper';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import useFetch from '../hooks/useFetch';

const TableAnimais = () => {
  const [rows, setRows] = React.useState([{}]);

  const { data, loading, error } = useFetch(
    'http://localhost:8080/animal/buscar'
  );

  React.useEffect(() => {
    if (loading === false) setRows(data);
  }, [data]);

  return (
    <>
      <PageWrapper>
        <Typography mb={3} variant="h5">
          Tabela de Animais
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Brinco</TableCell>
                <TableCell>Sexo</TableCell>
                <TableCell>Peso</TableCell>
                <TableCell>Data de Entrada</TableCell>
                <TableCell>Data de Saída</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows[0] &&
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.codigoBrinco}</TableCell>
                    <TableCell>{row.sexo}</TableCell>
                    <TableCell>{row.pesoAtual}</TableCell>
                    <TableCell>{row.dataEntrada}</TableCell>
                    <TableCell>{row.dataSaida}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageWrapper>
    </>
  );
};

export default TableAnimais;
