// src/components/Login.js

import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Container, Typography, Box } from "@mui/material";
import styled from "styled-components";

const FormContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/auth/login", {
        email,
        senha,
      });
      localStorage.setItem("token", response.data.token);
      console.log("Usuário logado:", response.data);
    } catch (error) {
      console.error("Erro ao fazer login:", error.response.data);
    }
  };

  return (
    <FormContainer maxWidth="sm">
      <StyledBox>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Senha"
            variant="outlined"
            margin="normal"
            type="password"
            fullWidth
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </form>
      </StyledBox>
    </FormContainer>
  );
};

export default Login;
