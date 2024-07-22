// src/components/Dashboard.js

import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { veiculos } from "../data/mockData";

const DashboardContainer = styled(Container)`
  padding-top: 20px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Link to="/veiculo/novo">
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px" }}
        >
          Adicionar Veículo
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Veículo</TableCell>
              <TableCell>Quilometragem</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {veiculos.map((veiculo) => (
              <TableRow key={veiculo.id}>
                <TableCell>
                  {veiculo.modelo} - {veiculo.placa}
                </TableCell>
                <TableCell>{veiculo.quilometragem} km</TableCell>
                <TableCell>{veiculo.status}</TableCell>
                <TableCell>
                  <Link to={`/veiculo/${veiculo.id}`}>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginRight: "10px" }}
                    >
                      Detalhes
                    </Button>
                  </Link>
                  <Link to="/manutencao">
                    <Button
                      variant="contained"
                      color="secondary"
                      style={{ marginRight: "10px" }}
                    >
                      Manutenção
                    </Button>
                  </Link>
                  <Link to="/avaria">
                    <Button variant="contained" color="error">
                      Registrar Avaria
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DashboardContainer>
  );
};

export default Dashboard;
