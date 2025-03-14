document.getElementById("noteForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const noteInput = document.getElementById("noteInput");
    const noteText = noteInput.value;
    if (noteText) {
        const li = document.createElement("li");
        li.textContent = noteText;

        //modificar
        const editButton = document.createElement("button");
        editButton.textContent ="Modificar";
        editButton.onclick = function() {
            const newNote = prompt("Modificar nota:", noteText);
            if (newNote) {
                li.firstChild.textContent = newNote;
            }
        }

        //apagar
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Apagar";
        deleteButton.onclick = function() {
            li.remove();
        }

        li.appendChild(editButton);
        li.appendChild(deleteButton);
        
        document.getElementById("notesList").appendChild(li);
        noteInput.value = " ";
    }
})
