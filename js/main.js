document.addEventListener("DOMContentLoaded", function(){

var navFirstChild = document.querySelector("li:first-child");
var hiddenElement = document.querySelector(".hidden");
var hiddenElementSecond = document.querySelector(".name-chair");
var hiddenElementSecond2 = document.querySelector(".name-chair2");
console.log(navFirstChild);
console.log(hiddenElement);

function visible() {

hiddenElement.classList.remove("hidden");

}

function notvisible() {

hiddenElement.classList.add("hidden");

}

navFirstChild.addEventListener("mouseover", visible);
navFirstChild.addEventListener("mouseout", notvisible);

var parents = document.querySelector(".first-photo");
var firstChild = this.querySelector(".name-chair");
var parents2 = document.querySelector(".second-photo");
var secondChild = this.querySelector(".name-chair2");

function mouseOverParent(){
  firstChild.style.visibility="hidden";
}
function mouseOutParent(){
  firstChild.style.visibility="visible";
}

  parents.addEventListener("mouseover", mouseOverParent);

  parents.addEventListener("mouseout", mouseOutParent);

  function mouseOverParent1(){
    secondChild.style.visibility="hidden";
  }
  function mouseOutParent1(){
    secondChild.style.visibility="visible";
  }

    parents2.addEventListener("mouseover", mouseOverParent1);

    parents2.addEventListener("mouseout", mouseOutParent1);


// ------------------------slajder--------------------------------

var next = document.querySelector('#right-arrow');
 var prev = document.querySelector('#left-arrow');

 var slid = document.querySelectorAll('.chair_main > ul li');

 var index = 0;

 slid[index].classList.add('visible');

 function Next(){
  slid[index].className = '';
  if (index == slid.length-1){
    index = 0;
  } else {
    index++;
  }
  slid[index].className = 'visible';
}

function Prev(){
  slid[index].className = '';
  if (index == 0) {
    index = slid.length-1;
  } else {
    index--;
  }
  slid[index].className = 'visible';
}

next.addEventListener('click', Next);
prev.addEventListener('click', Prev);



});
