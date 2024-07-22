// src/App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  CssBaseline,
  Container,
} from "@mui/material";
import Dashboard from "./components/Dashboard";
import VeiculoDetalhes from "./components/VeiculoDetalhes";
import ManutencaoForm from "./components/ManutencaoForm";
import AvariaForm from "./components/AvariaForm";
import Motoristas from "./components/Motoristas";
import ChecklistDiario from "./components/ChecklistDiario";
import HistoricoVeiculo from "./components/HistoricoVeiculo";
import VeiculoForm from "./components/VeiculoForm";
import Register from "./components/Register";
import Login from "./components/Login";
import theme from "./theme";
import styled from "styled-components";

const NavButton = styled(Button)`
  color: white !important;
  margin-right: 10px !important;
`;

const ContentContainer = styled(Container)`
  margin-top: 80px;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Gerenciamento de Frota
            </Typography>
            <NavButton component={Link} to="/">
              Dashboard
            </NavButton>
            <NavButton component={Link} to="/manutencao">
              Manutenção
            </NavButton>
            <NavButton component={Link} to="/avaria">
              Avaria
            </NavButton>
            <NavButton component={Link} to="/motoristas">
              Motoristas
            </NavButton>
            <NavButton component={Link} to="/checklist">
              Checklist
            </NavButton>
            <NavButton component={Link} to="/veiculo/novo">
              Cadastro Veículo
            </NavButton>
            <NavButton component={Link} to="/register">
              Registro
            </NavButton>
            <NavButton component={Link} to="/login">
              Login
            </NavButton>
          </Toolbar>
        </AppBar>
        <ContentContainer>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/veiculo/novo" element={<VeiculoForm />} />
            <Route path="/veiculo/:id" element={<VeiculoDetalhes />} />
            <Route path="/manutencao" element={<ManutencaoForm />} />
            <Route path="/avaria" element={<AvariaForm />} />
            <Route path="/motoristas" element={<Motoristas />} />
            <Route path="/checklist" element={<ChecklistDiario />} />
            <Route path="/historico/:id" element={<HistoricoVeiculo />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ContentContainer>
      </Router>
    </ThemeProvider>
  );
};

export default App;
