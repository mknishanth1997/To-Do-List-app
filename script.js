const userInputBox = document.querySelector("input");
const addButton = document.querySelector(".button");
const contentArea = document.querySelector(".list-box");
addButton.addEventListener("click", addListItem);

function addListItem () 
{
    const userInputtedText = userInputBox.value;
    userInputBox.value = "";

    if (userInputtedText === "")
        {
            alert("It's Empty");
        }
    else
        {
                // Element Creation
    const masterDiv = document.createElement("div");
    const subDiv = document.createElement("div");
    const para = document.createElement("p");
    const completedButton = document.createElement("button");
    const removeButton = document.createElement("button");

    // Adding the content

    completedButton.textContent = "✔";
    removeButton.textContent = "✘";
    para.textContent = userInputtedText;

    // Appending the Nodes

    // appending two buttons into the sub-div
    subDiv.appendChild(completedButton);
    subDiv.appendChild(removeButton);
    // appending para to the master-div
    masterDiv.appendChild(para);
    // appending sub-div to the master-div
    masterDiv.appendChild(subDiv);
    // appending the master-div to the contentArea 
    contentArea.appendChild(masterDiv);
    // Adding class to the master-div
    masterDiv.classList.add("listitem");

    // remove button function 

    removeButton.addEventListener("click", () =>
    {
        masterDiv.remove();
    });

    // Completed button function 
    let isStrikeThrough = false; // Corrected spelling (isStrikeThrough)
    completedButton.addEventListener("click", () => {
      if (isStrikeThrough) { // Use '===' for strict comparison
        para.style.textDecoration = "none";
        isStrikeThrough = false;
      } else {
        para.style.textDecoration = "line-through";
        isStrikeThrough = true;
      }
    });
    
        }
userInputBox.focus();

}