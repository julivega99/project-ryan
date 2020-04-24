function openText(name, color) {
  if (color == 'one'){
    document.getElementById("message").style.backgroundColor = "#f0a6ca";
  } 
  else {
    document.getElementById("message").style.backgroundColor = "#fde2ef";
    document.getElementById("message").style.color = "#000";
    document.getElementById("closebtn").style.color = "#000";
  }

  document.getElementById("overlay").style.height = "100%";
  document.getElementById("overlay").style.zIndex = "20";
  document.getElementById("message").style.display = "flex";
  document.body.style.overflow = "hidden";

  switch (name) {
    case 'elena' :
      elena();

    case 'juli' :
      juli();
  }
}

function closeNav() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("overlay").style.zIndex = "0";
  document.getElementById("message").style.display = "none";
  document.body.style.overflow = "auto";

  document.getElementById("closebtn").style.color = "#F8F8F8";
  document.getElementById("message").style.color = "#F8F8F8";

}

function elena() {
  console.log('elena');
}

function juli()  {
  console.log('juli');
}