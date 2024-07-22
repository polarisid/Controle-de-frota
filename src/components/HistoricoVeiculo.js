// src/components/HistoricoVeiculo.js

import React from "react";
import { useParams } from "react-router-dom";
import { historico, motoristas, checklists, veiculos } from "../data/mockData";

const HistoricoVeiculo = () => {
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
    <div>
      <h1>Histórico do Veículo</h1>
      <h2>Informações do Veículo</h2>
      <p>Placa: {veiculo.placa}</p>
      <p>Modelo: {veiculo.modelo}</p>
      <p>Ano: {veiculo.ano}</p>
      <p>Quilometragem: {veiculo.quilometragem}</p>
      <p>Status: {veiculo.status}</p>

      <h2>Eventos</h2>
      <ul>
        {veiculoHistorico.map((entry) => (
          <li key={entry.id}>
            <strong>{entry.evento}:</strong> {entry.detalhes} <br />
            <em>Data:</em> {new Date(entry.data_evento).toLocaleDateString()}
          </li>
        ))}
      </ul>
      <h2>Checklists Diários</h2>
      <ul>
        {veiculoChecklists.map((entry) => (
          <li key={entry.id}>
            <strong>Data:</strong> {new Date(entry.data).toLocaleDateString()}{" "}
            <br />
            <strong>Verificado:</strong> {entry.verificado ? "Sim" : "Não"}{" "}
            <br />
            <strong>Observações:</strong> {entry.observacoes} <br />
            <strong>Motorista:</strong> {getMotoristaNome(entry.motorista_id)}{" "}
            <br />
            <strong>Quilometragem:</strong> {entry.quilometragem} <br />
            <strong>Status:</strong> {entry.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoricoVeiculo;
