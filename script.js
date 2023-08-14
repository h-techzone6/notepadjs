const notesContainerEl = document.querySelector(".notesContainer");
const createBtnEl = document.querySelector(".createBtn");

// When we click on the create button it creates a note in the notesContainer
createBtnEl.addEventListener("click",()=>{
    const noteEl = document.createElement("div");
    const pEl = document.createElement("p");
    const imgEl = document.createElement("img");
    noteEl.className = "note";
    imgEl.src = "https://imgs.search.brave.com/7r6lObkf9eo9V9-rsN-TyrAeCPnXTD2UCWlbBcQatSo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3RyYXNoLWNh/bi1wbmctZnJlZS1p/Y29ucy1wbmctdHJh/c2hjYW4tZnVybml0/dXJlLWljb24tcG5n/LTM4Ni5wbmc";
    pEl.setAttribute("contenteditable","true")
    noteEl.appendChild(pEl);
    noteEl.appendChild(imgEl);
    notesContainerEl.appendChild(noteEl);
})

notesContainerEl.addEventListener("click",(event)=>{
// when we click on the delete img it deletes the entire note.
    if(event.target.tagName==="IMG"){
        event.target.parentElement.remove();
        updateNotesStorage();
    }
// when we click on p note and enter any key then it automatically stored in the localStorage.
    else if(event.target.tagName==="P"){
        noteEls = document.querySelectorAll(".note");
        noteEls.forEach(element => {
            element.onkeyup = function(){
                updateNotesStorage();
            }
        });
    }
})

// To prevent from the enter key button
document.addEventListener("keydown",(event)=>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

// it shows all the notes which are in the local storage
function showNotes(){
    notesContainerEl.innerHTML = localStorage.getItem("notes");
}

// It updates the local storage 
function updateNotesStorage(){
    localStorage.setItem("notes",notesContainerEl.innerHTML);
    }

// By default it ca
showNotes();
