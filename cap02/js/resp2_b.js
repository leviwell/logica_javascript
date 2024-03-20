const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const valor = Number(frm.inValor.value);
  const tempo = Number(frm.inTempo.value);

  const tempo2 = Math.ceil(tempo / 15);
  const pagar = tempo2 * valor;

  resp.innerText = `Valor a Pagar R$ ${pagar.toFixed(2)}`;

  e.preventDefault();
});
