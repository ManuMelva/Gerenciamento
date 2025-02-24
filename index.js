// index.js

function greet(name) {
    if (!name) {
      return "Olá! Por favor, informe um nome.";
    }
    return `Olá, ${name}! Seja bem-vindo(a) ao nosso software.`;
  }
  
  console.log("Versão 1.2");
  console.log(greet(""));
  