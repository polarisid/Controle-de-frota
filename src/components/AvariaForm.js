// src/components/AvariaForm.js

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import styled from "styled-components";
import { veiculos } from "../data/mockData";

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const AvariaForm = () => {
  const [veiculoId, setVeiculoId] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estado, setEstado] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria o código para salvar os dados
    console.log({ veiculoId, data, descricao, estado });
  };

  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Registro de Avaria
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          // label="Veículo"
          variant="outlined"
          margin="normal"
          select
          fullWidth
          value={veiculoId}
          onChange={(e) => setVeiculoId(e.target.value)}
          SelectProps={{
            native: true,
          }}
        >
          <option value="">Selecione um veículo</option>
          {veiculos.map((veiculo) => (
            <option key={veiculo.id} value={veiculo.id}>
              {veiculo.modelo} - {veiculo.placa}
            </option>
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
          label="Descrição"
          variant="outlined"
          margin="normal"
          fullWidth
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField
          // label="Estado do Veículo"
          variant="outlined"
          margin="normal"
          select
          fullWidth
          value={estado}
          onChange={(e) => setEstado(e.target.value)}
          SelectProps={{
            native: true,
          }}
        >
          <option value="">Selecione o estado</option>
          <option value="Operacional">Operacional</option>
          <option value="Parado">Parado</option>
        </TextField>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Salvar
        </Button>
      </form>
    </FormContainer>
  );
};

export default AvariaForm;
