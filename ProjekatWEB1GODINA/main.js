let imeer = document.getElementById("erorime");
let sifraer = document.getElementById("erorsifra");
let brojer = document.getElementById("erorbroj");
let forma = document.getElementById("forma");
let logo = document.getElementById("jslogo");



function fokuseng(){
let engleski=document.querySelector('.engleski')
console.log(engleski)
engleski.style.transform="scale(1.1)"
}
function fokusnem(){
  let nemacki=document.querySelector('.nemacki')
  console.log(engleski)
  nemacki.style.transform="scale(1.1)"
  }

  function fokusarap(){
    let arapski=document.querySelector('.arapski1')
    console.log(engleski)
    arapski.style.transform="scale(1.1)"
    }

function valueodselect(){
  let cenajezika1=document.getElementById('cenajezika')
  let cenajezika=document.getElementById('cenajezika').value
  let izborjezika=document.getElementById('izborjezika').value
  let izborjezika1=document.getElementById('izborjezika')
  var text = cenajezika1.options[cenajezika1.selectedIndex].text;
  var text1 = izborjezika1.options[izborjezika1.selectedIndex].text;
  console.log(text1)
  let kurscena=document.getElementById('kurscena')
  kurscena.innerHTML=`Izabrali ste <br>"${text}" kurs  za <strong style="color:black;">${text1}</strong> koji kosta <strong style="color:black;">${cenajezika}</strong> `

  console.log(cenajezika)
}
function valueodselect1(){
  let cenajezika1=document.getElementById('cenajezika')
  let cenajezika=document.getElementById('cenajezika').value
  let izborjezika=document.getElementById('izborjezika').value
  let izborjezika1=document.getElementById('izborjezika')
  var text = cenajezika1.options[cenajezika1.selectedIndex].text;
  var text1 = izborjezika1.options[izborjezika1.selectedIndex].text;
  console.log(text1)
  let kurscena=document.getElementById('kurscena')
  kurscena.innerHTML=`Izabrali ste <br>"${text}" kurs  za <strong style="color:black;">${text1}</strong> koji kosta <strong style="color:black;">${cenajezika}</strong> `

  console.log(cenajezika)
}

logo.addEventListener("mouseover", (e) => {
  e.preventDefault();

  let randomBoja = Math.floor(Math.random() * 16777215).toString(16);
  logo.style.color = "#" + randomBoja;
  console.log(logo.value);
});

function Validacijaime() {
  let ime = document.getElementById("ime").value;

  if (ime.length == 0) {
    imeer.innerHTML = "Unesi ime!";
    return false;
  }
  if (!ime.match("^[a-zA-Z ]+$")) {
    imeer.innerHTML = "Koristi slova!";
    return false;
  }
  imeer.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function Validacijasifra() {
  let sifra = document.getElementById("sifra").value;

  if (sifra.length == 0) {
    sifraer.innerHTML = "Unesi sifru!";
    return false;
  }

  if (sifra.length < 6) {
    sifraer.innerHTML = "Kratka sifra!";
    return false;
  }
  sifraer.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function Validacijabroja() {
  let broj = document.getElementById("broj").value;

  if (broj.length == 0) {
    brojer.innerHTML = "Unesi broj!";
    return false;
  }
  if (broj.length != 9) {
    brojer.innerHTML = " Broj mora da ima 9 cifara!";
    return false;
  }
  brojer.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

//9
