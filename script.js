// ==========================
// Task 6 — Counter
// ==========================

let count = 0;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
    counter.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});


// ==========================
// Task 7 — Live Text Preview
// ==========================

const textInput = document.getElementById("textInput");
const preview = document.getElementById("preview");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");

textInput.addEventListener("input", function () {
    if (textInput.value === "") {
        preview.textContent = "Your text will appear here";
    } else {
        preview.textContent = textInput.value;
    }

    charCount.textContent = textInput.value.length;
});

clearBtn.addEventListener("click", function () {
    textInput.value = "";
    preview.textContent = "Your text will appear here";
    charCount.textContent = "0";
    textInput.focus();
});


// ==========================
// Task 8 — Change an Image
// ==========================

const imageSelect = document.getElementById("imageSelect");
const mainImage = document.getElementById("mainImage");
const imageCaption = document.getElementById("imageCaption");

imageSelect.addEventListener("change", function () {

    if (imageSelect.value === "lipstick") {
        mainImage.src = "images/lipstick.jpg";
        mainImage.alt = "A dior lipstick";
        imageCaption.textContent = "Dior Lipstick";
    }

    else if (imageSelect.value === "mascara") {
        mainImage.src = "images/mascara.jpg";
        mainImage.alt = "Black mascara";
        imageCaption.textContent = "Black Mascara";
    }

    else if (imageSelect.value === "sponge") {
        mainImage.src = "images/sponge.jpg";
        mainImage.alt = "A makeup sponge";
        imageCaption.textContent = "Makeup Sponge";
    }
});


// ==========================
// Task 9 — Keyboard Events
// ==========================

const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const enterResult = document.getElementById("enterResult");

keyboardInput.addEventListener("keydown", function (event) {

    keyStatus.textContent = event.key;

    if (event.key === "Enter") {
        event.preventDefault();
        enterResult.textContent = "Your text: " + keyboardInput.value;
    }

    if (event.key === "Escape") {
        keyboardInput.value = "";
        enterResult.textContent = "";
        keyStatus.textContent = "None";
    }
});


// ==========================
// Task 10 — Mouse and Focus
// ==========================

const focusCard = document.getElementById("focusCard");
const instruction = document.getElementById("instruction");

focusCard.addEventListener("mouseenter", function () {
    focusCard.classList.add("highlight");
    instruction.textContent = "Mouse is over the card.";
});

focusCard.addEventListener("mouseleave", function () {
    focusCard.classList.remove("highlight");
    instruction.textContent = "Hover over the card or use Tab to focus it.";
});

focusCard.addEventListener("focus", function () {
    focusCard.classList.add("highlight");
    instruction.textContent = "Card is focused with the keyboard.";
});

focusCard.addEventListener("blur", function () {
    focusCard.classList.remove("highlight");
    instruction.textContent = "Hover over the card or use Tab to focus it.";
});