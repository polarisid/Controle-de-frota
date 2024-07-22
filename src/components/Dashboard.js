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
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const DashboardContainer = styled(Container)`
  padding-top: 20px;
`;

const Dashboard = () => {
  const handleGenerateReport = () => {
    const doc = new jsPDF();
    doc.text("Relatório de Quilometragem e Status dos Veículos", 10, 10);

    // Configuração da tabela
    const tableColumn = ["Modelo", "Placa", "Quilometragem (km)", "Status"];
    const tableRows = [];

    veiculos.forEach((veiculo) => {
      const veiculoData = [
        veiculo.modelo,
        veiculo.placa,
        veiculo.quilometragem,
        veiculo.status,
      ];
      tableRows.push(veiculoData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("relatorio_veiculos.pdf");
  };

  return (
    <DashboardContainer>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Link to="/veiculo/novo">
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: "20px", marginRight: "10px" }}
        >
          Adicionar Veículo
        </Button>
      </Link>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleGenerateReport}
        style={{ marginBottom: "20px" }}
      >
        Gerar Relatório de Quilometragem e Status
      </Button>
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
