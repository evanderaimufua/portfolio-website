/* Logic for icon and opening */
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/*Logic for create gradient circles*/
function createCircle() {
  const circleContainer = document.getElementById("circles-container");
  const circle = document.createElement("div");
  circle.classList.add("circle");
  const diameter = Math.floor(Math.random() * 151) + 50;
  const bottomPosition = window.innerHeight;

  // Ensure circle stays within viewport width
  const maxLeftPosition = window.innerWidth - diameter;
  const leftPosition = Math.random() * maxLeftPosition;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.background = "radial-gradient(circle, #80c080, #98ff98)";
  circle.style.left = `${leftPosition}px`;
  circle.style.bottom = `${bottomPosition}px`;

  circleContainer.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
}

setInterval(createCircle, 1000);
