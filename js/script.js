function showSpecs0() {
    const x = document.getElementById("specs0");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs1() {
    const x = document.getElementById("specs1");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs2() {
    const x = document.getElementById("specs2");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs3() {
    const x = document.getElementById("specs3");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs4() {
    const x = document.getElementById("specs4");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs5() {
    const x = document.getElementById("specs5");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs6() {
    const x = document.getElementById("specs6");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs7() {
    const x = document.getElementById("specs7");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs0() {
    const x = document.getElementById("specs0");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs8() {
    const x = document.getElementById("specs8");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs9() {
    const x = document.getElementById("specs9");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs10() {
    const x = document.getElementById("specs10");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}
function showSpecs11() {
    const x = document.getElementById("specs11");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
    }
}


filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter-button");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}