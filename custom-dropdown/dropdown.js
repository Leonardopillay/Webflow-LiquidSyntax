// dropdown.js

const dropdown = document.getElementById("customDropdown");
const toggle = document.getElementById("dropdownToggle");
const menu = dropdown.querySelector(".dropdown-menu");
const options = menu.querySelectorAll("li");
const selectedDisplay = document.getElementById("selectedValue");

let currentIndex = -1;

function openMenu() {
  menu.setAttribute("aria-hidden", "false");
  toggle.setAttribute("aria-expanded", "true");
  menu.focus();
}

function closeMenu() {
  menu.setAttribute("aria-hidden", "true");
  toggle.setAttribute("aria-expanded", "false");
  currentIndex = -1;
}

function updateSelection(index) {
  const option = options[index];
  if (!option) return;

  const value = option.dataset.value;
  toggle.textContent = option.textContent;
  selectedDisplay.textContent = `Selected: ${option.textContent}`;
  closeMenu();
}

toggle.addEventListener("click", () => {
  const isOpen = menu.getAttribute("aria-hidden") === "false";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

options.forEach((option, index) => {
  option.addEventListener("click", () => {
    updateSelection(index);
  });

  option.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      updateSelection(index);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      currentIndex = (index + 1) % options.length;
      options[currentIndex].focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      currentIndex = (index - 1 + options.length) % options.length;
      options[currentIndex].focus();
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeMenu();
      toggle.focus();
    }
  });
});
