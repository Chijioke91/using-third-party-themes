function toggleNavbar(collapseID) {
  document.getElementById(collapseID).classList.toggle('hidden');
  document.getElementById(collapseID).classList.toggle('block');
}

// add date to page
document.getElementById('date').innerText = new Date().getFullYear();
