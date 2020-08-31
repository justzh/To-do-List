// Helper functions
const toggleInput = () => {
    const input = document.getElementById("myInput");
    if (input.style.visibility === "hidden") {
        input.style.visibility = "visible";
    } else {
        input.style.visibility = "hidden";
    }
}

// Document elements
const enter = document.getElementById("myInput");
const list = document.querySelector("ul");

// Event listeners
enter.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        let inputValue = enter.value;
        let li = document.createElement("li");
        let text = document.createTextNode(inputValue);

        li.appendChild(text);

        if (inputValue !== "") {
            document.getElementById("myUL").appendChild(li);
        }

        enter.value = "";

        let span = document.createElement("span");
        let closeButton = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(closeButton);
        li.appendChild(span);

        span.onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }

        enter.style.visibility = "hidden";
    }
})

list.addEventListener("click", function (event) {
    if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
    }
})