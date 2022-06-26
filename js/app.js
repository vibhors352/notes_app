shownotes();
let addbtn = document.getElementById("addBtn");
addbtn.addEventListener("click", function (e) {
  let addtxt = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else notesobj = JSON.parse(notes);

  notesobj.push(addtxt.value);
  localStorage.setItem("notes", JSON.stringify(notesobj));
  addtxt.value = "";
  console.log(notesobj);
  shownotes();
});

function shownotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else notesobj = JSON.parse(notes);
  let html = "";
  notesobj.forEach(function (element, index) {
    html += `<div class="notecard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" onclick="deletenode(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
  });
  let noteselm = document.getElementById("notes");
  if (notesobj.length != 0) {
    noteselm.innerHTML = html;
  } else noteselm.innerHTML = `<h2>Nothing to show yet!!!</h2>`;
}

function deletenode(index) {
  console.log("deleting");
  let notes = localStorage.getItem("notes");
  if (notes == null) notesobj = [];
  else notesobj = JSON.parse(notes);

  notesobj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesobj));

  shownotes();
}

let search = document.getElementById("searchtxt");
search.addEventListener("input", function () {
  let inputval = search.value.toLowerCase();
  let notecards = document.getElementsByClassName("notecard");
  Array.from(notecards).forEach(function (element) {
    let cardtxt = element.getElementsByTagName("p")[0].innerText;

    if (cardtxt.includes(inputval)) {
      element.style.display = "block";
    } else element.style.display = "none";
  });
});
