// index.js

function greet(name) {
    if (!name) {
      return "Olá! Por favor, informe um nome.";
    }
    return `Olá, ${name}! Seja bem-vindo(a) ao nosso software.`;
  }
  
  function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString("pt-BR");
  }
  
  console.log("Versão com nova funcionalidade");
  console.log(greet("João"));
  console.log("Data/hora atual:", getCurrentDateTime());
  