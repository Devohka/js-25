// 1
// const btnOn = document.querySelector("[data-action]");
// const btnOff = document.querySelector(`button[data-action="close-modal"]`);

// function openModal() {
//     document.body.classList.add("show-modal");
// };

// btnOn.addEventListener("click", openModal);

// 2
// btnOff.addEventListener("click", closeModal);
// function closeModal() {
//     document.body.classList.remove("show-modal");
// };

// 3
// const colorRed = document.querySelector("[data-red]");
// const colorWhite = document.querySelector("[data-white]");
// const colorGreen = document.querySelector("[data-green]");

// colorGreen.addEventListener("click", () => {
//     document.body.style.backgroundColor = "green";
// });
// colorRed.addEventListener("click", () => {
//     document.body.style.backgroundColor = "red";
// });
// colorWhite.addEventListener("click", () => {
//     document.body.style.backgroundColor = "white";
// });

// 4
const inputEl = document.querySelector("[data-input]");
const outputEl = document.querySelector("[data-output]");
const inputLength = document.querySelector("[data-length]");

inputEl.addEventListener("input", (e) => {
    outputEl.textContent = e.currentTarget.value;
});

inputLength.addEventListener("blur", () => {
    if (inputEl.value === inputLength.dataset.length) {
    inputLength.classList.add("valid");
} else {
    inputLength.classList.add("invalid");
};
});

// 5
const inputFontSize = document.querySelector("[data-fontSize]");
const spanText = document.querySelector("[data-text]");

inputFontSize.addEventListener("input", () => {
    spanText.style.FontSize = `${input.value}px`;
});