// src/data/mockData.js

export const veiculos = [
  {
    id: 1,
    placa: "SHS4G09",
    modelo: "FIORINO",
    ano: 2020,
    quilometragem: 15000,
    status: "Operacional",
  },
  {
    id: 2,
    placa: "SHQ3I28",
    modelo: "JUMPY",
    ano: 2019,
    quilometragem: 25000,
    status: "Parado",
  },
  {
    id: 3,
    placa: "SHQ3I27",
    modelo: "JUMPY",
    ano: 2018,
    quilometragem: 35000,
    status: "Operacional",
  },
];

export const motoristas = [
  { id: 1, nome: "João Silva", cnh: "123456789" },
  { id: 2, nome: "Maria Santos", cnh: "987654321" },
];

export const historico = [
  {
    id: 1,
    veiculo_id: 1,
    evento: "Manutenção",
    data_evento: "2023-07-15",
    detalhes: "Troca de óleo e filtro",
  },
  {
    id: 2,
    veiculo_id: 1,
    evento: "Troca de Peça",
    data_evento: "2023-08-10",
    detalhes: "Troca de pastilhas de freio",
  },
  {
    id: 3,
    veiculo_id: 2,
    evento: "Avaria",
    data_evento: "2023-09-05",
    detalhes: "Falha no motor",
  },
];

export const checklists = [
  {
    id: 1,
    veiculo_id: 1,
    data: "2023-07-15",
    verificado: true,
    observacoes: "Tudo OK",
    motorista_id: 1,
    quilometragem: 15000,
    status: "Operacional",
  },
  {
    id: 2,
    veiculo_id: 2,
    data: "2023-07-16",
    verificado: false,
    observacoes: "Farol quebrado",
    motorista_id: 2,
    quilometragem: 25000,
    status: "Parado",
  },
];
