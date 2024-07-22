// src/components/ChecklistDiario.js

import React, { useState, useRef } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  MenuItem,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import styled from "styled-components";
import { veiculos, motoristas } from "../data/mockData";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import SignatureCanvas from "react-signature-canvas";

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const SignatureBox = styled(Box)`
  border: 1px solid #000;
  margin-top: 20px;
  width: 100%;
  height: 150px;
`;

const ChecklistDiario = () => {
  const [veiculoId, setVeiculoId] = useState("");
  const [data, setData] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [motoristaId, setMotoristaId] = useState("");
  const [quilometragem, setQuilometragem] = useState("");
  const [status, setStatus] = useState("");
  const [tabIndex, setTabIndex] = useState(0);
  const [itensVerificados, setItensVerificados] = useState({
    farois: false,
    freios: false,
    pneus: false,
    oleo: false,
    agua: false,
  });
  const sigCanvas = useRef({});

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleItemChange = (event) => {
    setItensVerificados({
      ...itensVerificados,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const assinatura = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    // Aqui você adicionaria o código para salvar os dados
    console.log({
      veiculoId,
      data,
      observacoes,
      motoristaId,
      quilometragem,
      status,
      itensVerificados,
      assinatura,
    });
  };

  const handleGeneratePDF = () => {
    const assinatura = sigCanvas.current
      .getTrimmedCanvas()
      .toDataURL("image/png");
    const doc = new jsPDF();

    doc.text("Checklist Diário", 10, 10);
    doc.text(`Data: ${data}`, 10, 20);
    doc.text(
      `Veículo: ${veiculos.find((v) => v.id === parseInt(veiculoId))?.modelo}`,
      10,
      30
    );
    doc.text(
      `Motorista: ${
        motoristas.find((m) => m.id === parseInt(motoristaId))?.nome
      }`,
      10,
      40
    );
    doc.text(`Quilometragem: ${quilometragem} km`, 10, 50);
    doc.text(`Status: ${status}`, 10, 60);

    const tableColumn = ["Item", "Verificado"];
    const tableRows = Object.keys(itensVerificados).map((item) => [
      item.charAt(0).toUpperCase() + item.slice(1),
      itensVerificados[item] ? "Sim" : "Não",
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 70,
    });

    doc.text(
      `Observações: ${observacoes}`,
      10,
      doc.autoTable.previous.finalY + 10
    );
    doc.text("Assinatura:", 10, doc.autoTable.previous.finalY + 20);
    doc.addImage(
      assinatura,
      "PNG",
      10,
      doc.autoTable.previous.finalY + 30,
      50,
      20
    );
    doc.save("checklist_diario.pdf");
  };

  const handleClear = () => {
    sigCanvas.current.clear();
  };

  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Checklist Diário
      </Typography>
      <Tabs value={tabIndex} onChange={handleTabChange}>
        <Tab label="Detalhes" />
        <Tab label="Itens de Verificação" />
      </Tabs>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        {tabIndex === 0 && (
          <>
            <TextField
              label="Veículo"
              variant="outlined"
              margin="normal"
              select
              fullWidth
              value={veiculoId}
              onChange={(e) => setVeiculoId(e.target.value)}
            >
              <MenuItem value="">Selecione um veículo</MenuItem>
              {veiculos.map((veiculo) => (
                <MenuItem key={veiculo.id} value={veiculo.id}>
                  {veiculo.modelo} - {veiculo.placa}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Data"
              variant="outlined"
              margin="normal"
              type="date"
              fullWidth
              value={data}
              onChange={(e) => setData(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              label="Observações"
              variant="outlined"
              margin="normal"
              fullWidth
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
            />
            <TextField
              label="Motorista"
              variant="outlined"
              margin="normal"
              select
              fullWidth
              value={motoristaId}
              onChange={(e) => setMotoristaId(e.target.value)}
            >
              <MenuItem value="">Selecione um motorista</MenuItem>
              {motoristas.map((motorista) => (
                <MenuItem key={motorista.id} value={motorista.id}>
                  {motorista.nome}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Quilometragem"
              variant="outlined"
              margin="normal"
              type="number"
              fullWidth
              value={quilometragem}
              onChange={(e) => setQuilometragem(e.target.value)}
            />
            <TextField
              label="Status"
              variant="outlined"
              margin="normal"
              select
              fullWidth
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="">Selecione o status</MenuItem>
              <MenuItem value="Operacional">Operacional</MenuItem>
              <MenuItem value="Parado">Parado</MenuItem>
            </TextField>
            <Typography variant="h6" gutterBottom>
              Assinatura
            </Typography>
            <SignatureBox>
              <SignatureCanvas
                ref={sigCanvas}
                canvasProps={{
                  width: 500,
                  height: 150,
                  className: "sigCanvas",
                }}
              />
            </SignatureBox>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "10px" }}
              onClick={handleClear}
            >
              Limpar Assinatura
            </Button>
          </>
        )}
        {tabIndex === 1 && (
          <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={itensVerificados.farois}
                  onChange={handleItemChange}
                  name="farois"
                />
              }
              label="Faróis"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={itensVerificados.freios}
                  onChange={handleItemChange}
                  name="freios"
                />
              }
              label="Freios"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={itensVerificados.pneus}
                  onChange={handleItemChange}
                  name="pneus"
                />
              }
              label="Pneus"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={itensVerificados.oleo}
                  onChange={handleItemChange}
                  name="oleo"
                />
              }
              label="Óleo"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={itensVerificados.agua}
                  onChange={handleItemChange}
                  name="agua"
                />
              }
              label="Água"
            />
          </>
        )}
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Salvar
        </Button>
        <Button
          type="button"
          variant="contained"
          color="secondary"
          fullWidth
          style={{ marginTop: "10px" }}
          onClick={handleGeneratePDF}
        >
          Gerar PDF
        </Button>
      </form>
    </FormContainer>
  );
};

export default ChecklistDiario;
