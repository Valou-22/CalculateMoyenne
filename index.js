let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");

function sum(table) {
  return table.reduce(function (acc, valeur) {
    return acc + valeur;
  }, 0);
}

function CalculMoyenne() {
  notes = input1.value.split(" ");
  if (notes.length > 1) {
    notes = notes.map(function (nombre) {
      return parseInt(nombre.trim(), 10);
    });
    sum_note = sum(notes);
    moyenne = sum_note / notes.length;
    let text = document.querySelector("p.reponse1");
    text.textContent = "Votre moyenne est de " + moyenne;
    text.classList.toggle("show");
  } else {
    alert("Veuillez rentrez vos notes !");
  }
}

function CalculMoyenne2() {
  list_notes = [];
  list_notes_max = [];
  let cote = document.getElementById("input3").value;
  notes = input2.value.split(" ");
  if (notes.length > 1) {
    notes.forEach(function (fraction) {
      let elements = fraction.split("/");
      var current_note = parseFloat(elements[0], 10);
      var max_note = parseFloat(elements[1], 10);
      list_notes.push(current_note);
      list_notes_max.push(max_note);
    });
    moyenne = (sum(list_notes) / sum(list_notes_max)) * cote;
    let text = document.querySelector("p.reponse2");
    text.textContent = "Votre moyenne est de " + moyenne;
    text.classList.toggle("show");
  } else {
    alert("Veuillez rentrez vos notes !");
  }
}

button1.addEventListener("click", () => {
  CalculMoyenne();
});

button2.addEventListener("click", () => {
  CalculMoyenne2();
});
