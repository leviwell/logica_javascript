//tentativa de resolver o exemplo

const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
  const veiculo = frm.inVeiculo.value;
  const entrada = Number(frm.inPreco.value * 0.5);
  const parcela = entrada / 12;

  resp1.innerText = `Promoção ${veiculo}`;
  resp2.innerText = `Entrada de R$ ${entrada.toFixed(2)}
  \n + 12x de R$ ${parcela.toFixed(2)}`;

  e.preventDefault();
});
//deu errado :(
//att: deu certo :)
