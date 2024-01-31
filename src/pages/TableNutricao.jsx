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

const TableNutricao = () => {
  const [rows, setRows] = React.useState([{}]);

  const { data, loading, error } = useFetch(
    'http://localhost:8080/nutricao/buscar/racao'
  );

  React.useEffect(() => {
    if (loading === false) setRows(data);
  }, [data]);

  return (
    <>
      <PageWrapper>
        <Typography mb={3} variant="h5">
          Tabela de Nutrição
        </Typography>

        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Produto</TableCell>
                <TableCell>Preço</TableCell>
                <TableCell>Peso</TableCell>
                <TableCell>Medida</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows &&
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.produto}</TableCell>
                    <TableCell>{row.preco}</TableCell>
                    <TableCell>{row.peso}</TableCell>
                    <TableCell>{row.medida}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </PageWrapper>
    </>
  );
};

export default TableNutricao;
