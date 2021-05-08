let itemList = document.querySelector(".item-list");

function createItem(title){

    if(title === null || title === ""){
        return;
    }

    // Create list item
    let listItem = document.createElement("ul")

    // Create contents of list item
    let titleLabel = document.createElement("li");
    titleLabel.innerText = title;

    let doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.addEventListener("click", function(e){
        titleLabel.classList.toggle("completed-item");
    });

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", function(e) {
        listItem.parentNode.removeChild(listItem);
    });

    // Append children to list item
    listItem.appendChild(titleLabel);
    listItem.appendChild(doneBtn);
    listItem.appendChild(removeBtn);

    // Append list item to document
    itemList.appendChild(listItem);
    inputField.value = "";
}

function addPressed(){
    createItem(inputField.value);
}

let inputField = document.getElementsByClassName("input-field")[0];
let addButton = document.getElementsByClassName("add-btn")[0];
addButton.addEventListener("click", addPressed);


