// src/components/VeiculoDetalhes.js

import React from "react";
import { useParams } from "react-router-dom";
import { veiculos, historico, checklists, motoristas } from "../data/mockData";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import styled from "styled-components";

const DetailsContainer = styled(Container)`
  padding-top: 20px;
`;

const VeiculoDetalhes = () => {
  const { id } = useParams();
  const veiculo = veiculos.find((v) => v.id === parseInt(id));
  const veiculoHistorico = historico.filter((h) => h.veiculo_id === veiculo.id);
  const veiculoChecklists = checklists.filter(
    (c) => c.veiculo_id === veiculo.id
  );

  const getMotoristaNome = (motoristaId) => {
    const motorista = motoristas.find((m) => m.id === motoristaId);
    return motorista ? motorista.nome : "Desconhecido";
  };

  return (
    <DetailsContainer>
      <Typography variant="h4" gutterBottom>
        Detalhes do Veículo
      </Typography>
      <Box>
        <Typography variant="h6">Informações do Veículo</Typography>
        <Typography>Placa: {veiculo.placa}</Typography>
        <Typography>Modelo: {veiculo.modelo}</Typography>
        <Typography>Ano: {veiculo.ano}</Typography>
        <Typography>Quilometragem: {veiculo.quilometragem}</Typography>
        <Typography>Status: {veiculo.status}</Typography>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Histórico de Eventos</Typography>
        <List>
          {veiculoHistorico.map((entry) => (
            <ListItem key={entry.id}>
              <ListItemText
                primary={`${entry.evento}: ${entry.detalhes}`}
                secondary={`Data: ${new Date(
                  entry.data_evento
                ).toLocaleDateString()}`}
              />
            </ListItem>
          ))}
        </List>
      </Box>

      <Box mt={4}>
        <Typography variant="h6">Histórico de Checklists</Typography>
        <List>
          {veiculoChecklists.map((entry) => (
            <ListItem key={entry.id}>
              <ListItemText
                primary={`Data: ${new Date(entry.data).toLocaleDateString()}`}
                secondary={
                  <>
                    <Typography>
                      Verificado: {entry.verificado ? "Sim" : "Não"}
                    </Typography>
                    <Typography>Observações: {entry.observacoes}</Typography>
                    <Typography>
                      Motorista: {getMotoristaNome(entry.motorista_id)}
                    </Typography>
                    <Typography>
                      Quilometragem: {entry.quilometragem}
                    </Typography>
                    <Typography>Status: {entry.status}</Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </DetailsContainer>
  );
};

export default VeiculoDetalhes;
