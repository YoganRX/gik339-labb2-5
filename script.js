console.log("Scriptet kan laddas in");

const checkbox = document.querySelector("#divStyle");

const textFields = document.getElementsByClassName("textfield");

const button = document.getElementById("btnRemove");

const divElement = document.getElementsByTagName("div");

function handleInput(e) {
    console.log(e.target);

    const inputName = e.target.name;

    if (inputName === "content") {
        divElement.innerHTML = e.target.value;
    }
}