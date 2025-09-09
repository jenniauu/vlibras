new window.VLibras.Widget("https://vlibras.gov.br/app");

function toggleInfo(id, button) {
  const infoSection = document.getElementById(id);
  const isExpanded = infoSection.classList.contains("expanded");

  if (isExpanded) {
    infoSection.classList.remove("expanded");
    button.classList.remove("expanded");
    button.innerHTML = "Mostrar Detalhes";
  } else {
    infoSection.classList.add("expanded");
    button.classList.add("expanded");
    button.innerHTML = "Ocultar Detalhes";
  }
}
