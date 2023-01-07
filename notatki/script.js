function createNote(title, text,color,pin,date) {
  var note = {
    title: title,
    text: text,
    color:color,
    pin:pin,
    date:date
  };
  localStorage.setItem(title, JSON.stringify(note));
}

var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var title = document.querySelector('#title').value;
  var text = document.querySelector('#text').value;
  var color = document.querySelector('#color').value;
  var pin = document.querySelector('#pin');
  var date = document.querySelector('#date').value;
  createNote(title, text,color,pin.checked,date);
  form.reset();
});

let btn = document.getElementById('showNotes');
btn.addEventListener('click',getAllElements);

function getAllElements(){
  var table = document.createElement("table");
  var headerRow = document.createElement("tr");
  headerRow.innerHTML = "<th>Title</th><th>Text</th><th>Color</th><th>PIN</th><th>Date</th>";
  table.appendChild(headerRow);
    var keys = Object.values(localStorage);
    for(var i =0;i<keys.length;i++){
      var key = keys[i];
      var data = JSON.parse(key);
      if(data.pin===true){
        var title = data.title;
        var text = data.text;
        var color = data.color;
        var pin = data.pin;
        var date = data.date;
        var dataRow = document.createElement("tr");
        dataRow.innerHTML = "<td>" + title + "</td><td>" + text+ "</td><td>" + color+ "</td><td>" + pin+ "</td><td>" + date+ "</td>";
        table.appendChild(dataRow);
        document.body.appendChild(table);
      }
    }
    for(var i =0;i<keys.length;i++){
      var key = keys[i];
      var data = JSON.parse(key);
      if(data.pin===false){
        var title = data.title;
        var text = data.text;
        var color = data.color;
        var pin = data.pin;
        var date = data.date;
        var dataRow = document.createElement("tr");
        dataRow.innerHTML = "<td>" + title + "</td><td>" + text+ "</td><td>" + color+ "</td><td>" + pin+ "</td><td>" + date+ "</td>";
        table.appendChild(dataRow);
        document.body.appendChild(table);
      }
    }
}

function getNote(title) {

  var note = localStorage.getItem(title);
  return JSON.parse(note);
}

let btnDelete = document.getElementById('deleteNotes');
btnDelete.addEventListener('click',deleteNote);

function deleteNote() {
  var titleDelete = document.getElementById('titleDelete').value;
  localStorage.removeItem(titleDelete);
}

function editNote(title, text, color, pin, date) {
  var note = getNote(title);
  note.text = text;
  note.color = color;
  note.pin = pin;
  note.date = date;
  createNote(title, text, color, pin, date);
}

 var editForm = document.querySelector('#edit-form');
  editForm.addEventListener('submit', function(event) {
    event.preventDefault();

    var title = document.querySelector('#edit-title').value;
    var text = document.querySelector('#edit-text').value;
    var color = document.querySelector('#edit-color').value;
    var pin = document.querySelector('#edit-pin').checked;
    var date = document.querySelector('#edit-date').value;

    editNote(title, text, color, pin, date);
    editForm.reset();
  });
/*
TO DO
-PRZYCISK DO EDYTOWANIA NOTATEK
-ZMIANA KOLORU CZCIONKI ZA POMOCĄ COLOR*/
