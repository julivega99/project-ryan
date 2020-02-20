function openShoulders() {
  document.getElementById("overlay").style.height = "calc(83.3333% - 12px)";
  document.getElementById("shouldersBody").style.display = "flex";
}

function openTorso() {
  document.getElementById("overlay").style.height = "calc(83.3333% - 12px)";
  document.getElementById("torsoBody").style.display = "flex";
}

function openGlutes() {
  document.getElementById("overlay").style.height = "calc(83.3333% - 12px)";
  document.getElementById("glutesBody").style.display = "flex";
}

function openKnees() {
  document.getElementById("overlay").style.height = "calc(83.3333% - 12px)";
  document.getElementById("kneesBody").style.display = "flex";
  document.getElementById("closebtn").style.color = "#000000";

  document.myForm.style.display = "block";
  document.getElementById("thanks").style.display = "none";
}

function closeNav() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("shouldersBody").style.display = "none";
  document.getElementById("torsoBody").style.display = "none";
  document.getElementById("glutesBody").style.display = "none";
  document.getElementById("kneesBody").style.display = "none";

  document.getElementById("closebtn").style.color = "#F8F8F8";

}


// Form Handlers

var rad = document.myForm.yes_no;
var prev = null;
for (var i = 0; i < rad.length; i++) {
    rad[i].addEventListener('change', function() {
      if (this.value == "yes") {
          showOneMore();
        }
      if (this.value == "no") {
          hideOneMore();
        }
    });
}
function showOneMore() {
  document.getElementById("oneMore").style.display = "block";
}

function hideOneMore() {
  // figure out how to clear input
  document.getElementById("oneMore").style.display = "none";
}

function submitForm() {
  event.preventDefault();
  var guestName = document.myForm.fullName.value;
  var guestEmail = document.myForm.email.value;
  var plusName = "n/a";
  var plusEmail = "n/a";
  if (document.myForm.yes_no.value == "yes") {
    plusName = document.myForm.plusName.value;
    plusEmail = document.myForm.plusEmail.value;
  }

  document.myForm.reset();
  document.myForm.style.display = "none";
  document.getElementById("thanks").style.display = "block";
  console.log(guestName + " " + guestEmail + " " + plusName + " " + plusEmail);
}




