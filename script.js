console.log("Scriptet kan laddas in");

// UPPGIFT 4 ---------------------------------------------------

// Hämtar ID via querySelector
const checkbox = document.querySelector("#divStyle");

// Hämtar alla textfält med klassen "textfield"
const textFields = document.getElementsByClassName("textfield");

// Hämtar ID via getElementbyID
const button = document.getElementById("btnRemove");

// Hämtar första div-taggen i DOM-trädet
const divElement = document.getElementsByTagName("div")[0];

// UPPGIFT 5 ---------------------------------------------------

function handleInput(e) {
    console.log(e.target);

    // Hämtar name-attributet och sparar i variabeln "inputName"
    const inputName = e.target.name;

    // Om name-attributet är "content" uppdateras värdet
    if (inputName === "content") {
        divElement.innerHTML = e.target.value;
    }
}

// UPPGIFT 6 ---------------------------------------------------

// Eventlyssnare till checkbox
checkbox.addEventListener("change", function() {
    // Hämtar värdet från första textfältet och sparas i variabeln "colorValue"
    const colorValue = textFields[0].value;

    // Ändrar bakgrundfärgen på div-elementet
    divElement.style.backgroundColor = colorValue;
});

// Eventlyssnare till alla textfält
for (let i = 0; i < textFields.length; i++) {
    // Eventet uppdateras direkt något skrivs
    textFields[i].addEventListener("input", handleInput);
}

// Eventlyssnare till knappen
button.addEventListener("click", function() {
    // Tar bort div-elementet
    divElement.remove();
})