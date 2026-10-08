"use strict";
const storyTools = document.querySelector(".story-tools");
const storySearch = document.getElementById("story-search");
const storyFilters = [...document.querySelectorAll("[data-filter]")];
const storyCards = [...document.querySelectorAll(".story-card")];
let storyCategory = "all";
function filterStories() {
  const query = storySearch.value.trim().toLocaleLowerCase();
  let count = 0;
  storyCards.forEach((card) => {
    const visible =
      (storyCategory === "all" || card.dataset.category === storyCategory) &&
      card.textContent.toLocaleLowerCase().includes(query);
    card.hidden = !visible;
    if (visible) count++;
  });
  storyFilters.forEach((button) =>
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.filter === storyCategory),
    ),
  );
  document.getElementById("story-count").textContent =
    `${count} ${count === 1 ? "story" : "stories"}`;
  document.getElementById("story-empty").hidden = count !== 0;
}
storySearch.addEventListener("input", filterStories);
storyFilters.forEach((button) =>
  button.addEventListener("click", () => {
    storyCategory = button.dataset.filter;
    filterStories();
  }),
);
storyTools.hidden = false;
filterStories();
