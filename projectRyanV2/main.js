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
}

function closeNav() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("shouldersBody").style.display = "none";
  document.getElementById("torsoBody").style.display = "none";
  document.getElementById("glutesBody").style.display = "none";
  document.getElementById("kneesBody").style.display = "none";

}