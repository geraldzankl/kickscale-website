"use strict";
const tools = document.querySelector(".document-tools");
const search = document.getElementById("document-search");
const filters = [...document.querySelectorAll("[data-filter]")];
const documents = [
  ...document.querySelectorAll(".document-list .document-link"),
];
let category = "all";
function updateDocuments() {
  const query = search.value.trim().toLocaleLowerCase("de");
  let count = 0;
  documents.forEach((document) => {
    const visible =
      (category === "all" || document.dataset.category === category) &&
      document.textContent.toLocaleLowerCase("de").includes(query);
    document.hidden = !visible;
    if (visible) count++;
  });
  document.getElementById("document-count").textContent =
    `${count} ${count === 1 ? "Dokument" : "Dokumente"}`;
  document.getElementById("document-empty").hidden = count !== 0;
  filters.forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.filter === category),
    ),
  );
}
filters.forEach((button) =>
  button.addEventListener("click", () => {
    category = button.dataset.filter;
    updateDocuments();
  }),
);
search.addEventListener("input", updateDocuments);
document.querySelectorAll("[data-choose-filter]").forEach((link) =>
  link.addEventListener("click", () => {
    category = link.dataset.chooseFilter;
    search.value = "";
    updateDocuments();
  }),
);
tools.hidden = false;
updateDocuments();
