const idade = document.querySelector("#idade");
const valorIdade = document.querySelector("#valorIdade");
const peso = document.querySelector("#peso");
const valorPeso = document.querySelector("#valorPeso");
const altura = document.querySelector("#altura");
const valorAltura = document.querySelector("#valorAltura");
const btn = document.querySelector("#btn");
const res = document.querySelector("#resultado");
const form = document.querySelector("form");
const linksInternos = document.querySelectorAll('a[href^="#"]');
let res2 = document.querySelector(".resultado2");

linksInternos.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    linksInternos.forEach((link) => {
      link.classList.add("genero");
      link.classList.remove("ativo");
    });
    link.classList.replace("genero", "ativo");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

valorIdade.textContent = idade.value + " anos";
valorPeso.textContent = peso.value + " kg";
valorAltura.textContent = altura.value + " m";

idade.addEventListener("input", () => {
  valorIdade.textContent = idade.value + " anos";
});

peso.addEventListener("input", () => {
  valorPeso.textContent = peso.value + " kg";
});

altura.addEventListener("input", () => {
  valorAltura.textContent = altura.value + " m";
});

btn.addEventListener("click", () => {
  function animacao() {
    res.classList.add("ativo1");
  }

  animacao();

  if (idade.value == 0 || peso.value == 0 || altura.value == 0) {
    res.textContent =
      "Selecione o Sexo e arrastando para o lado, Idade, Peso e Altura";
  } else {
    let alturaDecimal = parseFloat(altura.value);
    let resultado = peso.value / Math.pow(alturaDecimal, 2);
    res.innerHTML = resultado.toFixed(2);

    if (resultado < 16) {
      res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está com Magreza Grau III`;
    } else if (resultado >= 16.0 && resultado <= 16.9) {
      res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está com Magreza Grau II`;
    } else if (resultado >= 17.0 && resultado <= 18.4) {
      res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está com Magreza Grau I`;
    } else if (resultado >= 18.5 && resultado <= 24.9) {
      return (res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você tem um peso Adequado`);
    } else if (resultado > 24.9 && resultado <= 29.9) {
      return (res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está Pré-Obeso`);
    } else if (resultado > 29.9 && resultado <= 34.9) {
      return (res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está com obesidade Grau I`);
    } else if (resultado > 34.9 && resultado <= 39.9) {
      return (res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está com obesidade Grau II`);
    } else {
      return (res.innerHTML = `Seu IMC é: ${resultado.toFixed(
        2
      )} então você está com obesidade Grau III ou Mórbida`);
    }
  }
});
