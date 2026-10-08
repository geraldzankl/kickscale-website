"use strict";
const menu = document.querySelector(".menu");
const nav = document.getElementById("nav");
const german = document.documentElement.lang === "de";
const openLabel = german ? "Navigation öffnen" : "Open navigation";
const closeLabel = german ? "Navigation schließen" : "Close navigation";
function closeMenu() {
  nav.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", openLabel);
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  nav.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? closeLabel : openLabel);
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia("(min-width: 1001px)").addEventListener("change", closeMenu);
const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(selected) {
  tabs.forEach((tab) => {
    const active = tab === selected;
    tab.setAttribute("aria-selected", String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute("aria-controls")).hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => selectTab(tab));
  tab.addEventListener("keydown", (event) => {
    let next;
    if (event.key === "ArrowRight") next = tabs[(index + 1) % tabs.length];
    if (event.key === "ArrowLeft")
      next = tabs[(index + tabs.length - 1) % tabs.length];
    if (event.key === "Home") next = tabs[0];
    if (event.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      event.preventDefault();
      selectTab(next);
      next.focus();
    }
  });
});
document.getElementById("year").textContent = String(new Date().getFullYear());
