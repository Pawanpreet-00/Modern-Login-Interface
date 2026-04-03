const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
input.addEventListener("focus", () => {
input.style.borderColor = "#667eea";
});

input.addEventListener("blur", () => {
input.style.borderColor = "#ddd";
});
});