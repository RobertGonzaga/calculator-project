const tela = document.getElementById("tela");
const buttons = document.querySelectorAll(".buttons > div");
buttons.forEach((btn) => {
  btn.addEventListener("click", function () {
    tela.innerText = btn.dataset.number;
  });
});
