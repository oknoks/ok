fetch("https://raw.githack.com/oknoks/ok/refs/heads/main/header-nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("header-nav").innerHTML = data;
  })
  .catch((error) => console.error("Error fetching header nav:", error));

fetch("https://raw.githack.com/oknoks/ok/refs/heads/main/footer-nav.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("footer-nav").innerHTML = data;
  })
  .catch((error) => console.error("Error:", error));

function loadContent(page) {
  fetch(`https://raw.githack.com/oknoks/ok/refs/heads/main/${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("content").innerHTML = data;
    })
    .catch((error) => console.error(`Error loading ${page}:`, error));
}
