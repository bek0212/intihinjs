var sele = document.querySelector(".select");
var q1 = document.querySelector(".tanlash");
var q2 = document.querySelector(".qalin");
var q3 = document.querySelector(".ortacha");
var q4 = document.querySelector(".yuqa");
var btnq5 = document.querySelector(".but__list1");
function select() {
  if (sele.value == 1) {
    btnq5.textContent = "";
  } else if (sele.value == 2) {
    btnq5.textContent = "Qalin";
  } else if (sele.value == 3) {
    btnq5.textContent = "Ortacha";
  } else if (sele.value == 4) {
    btnq5.textContent = "Yuqa";
  }
}

//////////////////////

var kl1 = document.querySelector(".block__box__item1");
var kl2 = document.querySelector(".block__box__item2");
var kl3 = document.querySelector(".block__box__item3");

var elButhon = document.querySelector(".but__list2");

kl1.addEventListener("click", function () {
  elButhon.textContent = "25cm";
});
kl2.addEventListener("click", function () {
  elButhon.textContent = "30cm";
});
kl3.addEventListener("click", function () {
  elButhon.textContent = "35cm";
});

//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////

var none = document.querySelector(".none");

var add = document.querySelector(".koshilish");
//////////
var sim1 = document.querySelector(".sim1");
////////////////////////
var elLbtn = document.querySelector(".ooi");
var elLbtn2 = document.querySelector(".ooi2");
var elLbtn3 = document.querySelector(".ooi3");
var elLbtn4 = document.querySelector(".ooi4");
var elLbtn5 = document.querySelector(".ooi5");
var elLbtn6 = document.querySelector(".ooi5");

elLbtn.addEventListener("click", function () {
  if (elLbtn.checked == true) {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.innerHTML = "+ Pomidor";
    newLI.classList.add("loling");
    add.appendChild(newLI);
  } else {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.textContent = "+ Pomidor";
    newLI.classList.add("loling");
    add.remove(newLI);
  }
});
function eee() {
  if (elLbtn2.checked == true) {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.textContent = "+Kurka goshti";
    newLI.classList.add("loling");
    add.appendChild(newLI);
  } else {
    none.classList.add("none1");
    var newLI1 = document.createElement("li");
    newLI1.textContent = "+ Kurka goshti";
    newLI1.classList.add("loling");
    add.remove(newLI1);
  }
}
function ee3() {
  if (elLbtn3.checked == true) {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.textContent = "+Zaytun";
    newLI.classList.add("loling");
    add.appendChild(newLI);
  } else {
    none.classList.add("none1");
    var newLI1 = document.createElement("li");
    newLI1.textContent = "+ Zaytun";
    newLI1.classList.add("loling");
    add.remove(newLI1);
  }
}
function ee4() {
  if (elLbtn4.checked == true) {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.textContent = "+Tuzlangan bodiring";
    newLI.classList.add("loling");
    add.appendChild(newLI);
  } else {
    none.classList.add("none1");
    var newLI1 = document.createElement("li");
    newLI1.textContent = "+ Tuzlangan bodiring";
    newLI1.classList.add("loling");
    add.remove(newLI1);
  }
}
function ee5() {
  if (elLbtn5.checked == true) {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.textContent = "+Qoziqorin";
    newLI.classList.add("loling");
    add.appendChild(newLI);
  } else {
    none.classList.add("none1");
    var newLI1 = document.createElement("li");
    newLI1.textContent = "+ Qoziqorin";
    newLI1.classList.add("loling");
    add.remove(newLI1);
  }
}
function ee6() {
  if (elLbtn6.checked == true) {
    none.classList.add("none1");
    var newLI = document.createElement("li");
    newLI.textContent = "+ Qazi";
    newLI.classList.add("loling");
    add.appendChild(newLI);
  } else {
    none.classList.add("none1");
    var newLI1 = document.createElement("li");
    newLI1.textContent = "+ Qazi";
    newLI1.classList.add("loling");
    add.remove(newLI1);
  }
}
/////////////////////////////////////////////////////////////////

var card4__list = document.querySelector(".box3__list");
var card444__list = document.querySelector(".box3__list");
var inp44 = document.querySelector(".inp44");
var inp444 = document.querySelector(".inp444");

var nonee = document.querySelector(".boxnone");

function card4() {
  if (inp44.checked == true) {
    var addcard4 = document.createElement("li");
    addcard4.textContent = "+ Achiq";
    nonee.classList.add("nonee");
    addcard4.classList.add("size");
    card4__list.appendChild(addcard4);
  } else if (inp44.checked == false) {
    card4__list.remove(addcard4);
  }
}
function card44() {
  if (inp444.checked == true) {
    var addcard44 = document.createElement("li");
    addcard44.textContent = "+ Pishloq";
    nonee.classList.add("nonee");
    addcard44.classList.add("size1");
    card444__list.appendChild(addcard44);
  } else if (inp444.checked == false) {
    var addcard44 = document.createElement("li");
    addcard44.textContent = "+ Pishloq";
    addcard44.classList.add("size1");
    card444__list.remove(addcard44);
  }
}

var genbtn = document.querySelector(".general__btn");

genbtn.addEventListener("click", function () {
  var obj = {
    Qoshimchalar: card444__list.textContent,
    Ustiga: add.textContent,
    Kattaligi: elButhon.textContent,
    NoniQandayBolsin: btnq5.textContent,
  };
  var arr = [];

  arr.push(obj);
  console.log(arr);
});


