import React, { Component } from "react";
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import 'fontsource-roboto';

import { Container, Typography } from "@material-ui/core"
class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center" >Formulário de cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length != 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos." }
  } else {
    let add = 0;
    let rev = undefined;

    for (let i = 0; i < 9; i++)
      add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
      return false;
    add = 0;
    for (let i = 0; i < 10; i++)
      add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
      rev = 0;
    if (rev == parseInt(cpf.charAt(10)) &&
    cpf !== "00000000000" &&
    cpf !== "11111111111" &&
    cpf !== "22222222222" &&
    cpf !== "33333333333" &&
    cpf !== "44444444444" &&
    cpf !== "55555555555" &&
    cpf !== "66666666666" &&
    cpf !== "77777777777" &&
    cpf !== "88888888888" &&
    cpf !== "99999999999") {
      console.log('valido');
      return { valido: true, texto: "" }
    } else {
      console.log('Invalido');
      return { valido: false, texto: "CPF Inválido." }
    }
  }
}

export default App;
