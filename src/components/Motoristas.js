// src/components/Motoristas.js

import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";
import { motoristas } from "../data/mockData";

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const Motoristas = () => {
  const [nome, setNome] = useState("");
  const [cnh, setCnh] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria o código para salvar os dados
    console.log({ nome, cnh });
  };

  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Gerenciamento de Motoristas
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <TextField
          label="Nome"
          variant="outlined"
          margin="normal"
          fullWidth
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <TextField
          label="CNH"
          variant="outlined"
          margin="normal"
          fullWidth
          value={cnh}
          onChange={(e) => setCnh(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ marginTop: "20px" }}
        >
          Adicionar Motorista
        </Button>
      </form>

      <Box mt={4} width="100%">
        <Typography variant="h6">Lista de Motoristas</Typography>
        <List>
          {motoristas.map((motorista) => (
            <ListItem key={motorista.id}>
              <ListItemText
                primary={motorista.nome}
                secondary={`CNH: ${motorista.cnh}`}
              />
              <Button
                variant="contained"
                color="secondary"
                style={{ marginRight: "10px" }}
              >
                Editar
              </Button>
              <Button variant="contained" color="error">
                Excluir
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </FormContainer>
  );
};

export default Motoristas;
