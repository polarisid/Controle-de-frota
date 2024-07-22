// src/components/ManutencaoForm.js

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

const ManutencaoForm = () => {
  const [veiculoId, setVeiculoId] = useState("");
  const [data, setData] = useState("");
  const [tipo, setTipo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [pecas, setPecas] = useState([{ nome: "", quantidade: 1 }]);

  const adicionarPeca = () => {
    setPecas([...pecas, { nome: "", quantidade: 1 }]);
  };

  const handlePecaChange = (index, field, value) => {
    const newPecas = pecas.map((peca, idx) =>
      idx === index ? { ...peca, [field]: value } : peca
    );
    setPecas(newPecas);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você adicionaria o código para salvar os dados
    console.log({ veiculoId, data, tipo, descricao, pecas });
  };

  return (
    <FormContainer maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Cadastro de Manutenção
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
          label="Tipo"
          variant="outlined"
          margin="normal"
          fullWidth
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
        />
        <TextField
          label="Descrição"
          variant="outlined"
          margin="normal"
          fullWidth
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
        <Box mt={2}>
          <Typography variant="h6">Peças</Typography>
          {pecas.map((peca, index) => (
            <Box key={index} display="flex" alignItems="center" mt={1}>
              <TextField
                label="Nome da peça"
                variant="outlined"
                margin="normal"
                fullWidth
                value={peca.nome}
                onChange={(e) =>
                  handlePecaChange(index, "nome", e.target.value)
                }
                style={{ marginRight: "10px" }}
              />
              <TextField
                label="Quantidade"
                variant="outlined"
                margin="normal"
                type="number"
                fullWidth
                value={peca.quantidade}
                onChange={(e) =>
                  handlePecaChange(index, "quantidade", e.target.value)
                }
              />
            </Box>
          ))}
          <Button
            type="button"
            variant="contained"
            color="primary"
            onClick={adicionarPeca}
            style={{ marginTop: "10px" }}
          >
            Adicionar Peça
          </Button>
        </Box>
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

export default ManutencaoForm;
