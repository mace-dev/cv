/*MENU DROP DOWN */
let menuOpen = true; // Set the initial state to open

function toggleMenu() {
  const menu = document.getElementById("menu");
  const closedIcon = document.getElementById("closed-icon");
  const openIcon = document.getElementById("open-icon");

  if (menuOpen) {
    menu.style.display = "none"; // Hide the menu
    closedIcon.style.display = "inline"; // Show the closed icon
    openIcon.style.display = "none"; // Hide the open icon
    menuOpen = false; // Update the state to closed
  } else {
    menu.style.display = "block"; // Show the menu
    closedIcon.style.display = "none"; // Hide the closed icon
    openIcon.style.display = "inline"; // Show the open icon
    menuOpen = true; // Update the state to open
  }
}

// Call toggleMenu() initially to open the menu on page load
toggleMenu();


