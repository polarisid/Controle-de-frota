// src/components/VeiculoForm.js

import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box } from "@mui/material";
import styled from "styled-components";

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const VeiculoForm = () => {
  const [placa, setPlaca] = useState("");
  const [modelo, setModelo] = useState("");
  const [ano, setAno] = useState("");
  const [quilometragem, setQuilometragem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria o código para salvar os dados
    console.log({ placa, modelo, ano, quilometragem });
  };

  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Veículo
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Placa"
          variant="outlined"
          margin="normal"
          fullWidth
          value={placa}
          onChange={(e) => setPlaca(e.target.value)}
        />
        <TextField
          label="Modelo"
          variant="outlined"
          margin="normal"
          fullWidth
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
        <TextField
          label="Ano"
          variant="outlined"
          margin="normal"
          type="number"
          fullWidth
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />
        <TextField
          label="Quilometragem"
          variant="outlined"
          margin="normal"
          type="number"
          fullWidth
          value={quilometragem}
          onChange={(e) => setQuilometragem(e.target.value)}
        />
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

export default VeiculoForm;
