
let timeout;
function debounce(func, delay) {
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}


let searchInput = document.querySelector("#search");

searchInput.addEventListener("input", debounce(function(event) {
  console.log("Searching for:", event.target.value);
}, 500)); // This will only trigger after 500ms of inactivity


