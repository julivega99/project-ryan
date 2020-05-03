function openText(name, color) {
  if (color == 'one'){
    document.getElementById("message").style.backgroundColor = "#f0a6ca";
    document.getElementById("overTop").style.backgroundColor = "#f0a6ca";
  } 
  else {
    document.getElementById("message").style.backgroundColor = "#fde2ef";
    document.getElementById("overTop").style.backgroundColor = "#fde2ef";
    document.getElementById("message").style.color = "#000";
    document.getElementById("closebtn").style.color = "#000";
  }

  document.getElementById("overlay").style.height = "100%";
  document.getElementById("overlay").style.zIndex = "20";
  document.getElementById("message").style.display = "flex";
  document.body.style.overflow = "hidden";

  switch (name) {
    case 'elena' :
      document.getElementById("elena").style.display="flex";
      break;
    case 'mc' :
       document.getElementById("mc").style.display="flex";
       break;
    case 'frankie' :
       document.getElementById("frankie").style.display="flex";
       break;
    case 'will' :
      document.getElementById("will").style.display="flex";
      break;
    case 'eva':
       document.getElementById("eva").style.display="flex";
       break;
    case 'scar':
       document.getElementById("scar").style.display="flex";
       break;
    case 'casey':
       document.getElementById("casey").style.display="flex";
    case 'michael':
       document.getElementById("michael").style.display="flex";
    // case 'jon':
    //   document.getElementById("jon").style.display="flex";
    // case 'emilia':
    //   document.getElementById("emilia").style.display="flex";
    // case 'mary':
    //   document.getElementById("mary").style.display="flex";
    // case 'michael':
    //   document.getElementById("michael").style.display="flex";
    // case 'ace':
    //   document.getElementById("ace").style.display="flex";
    // case 'casey':
    //   document.getElementById("casey").style.display="flex";
  }
}

function closeNav() {
  document.getElementById("overlay").style.height = "0%";
  document.getElementById("overlay").style.zIndex = "0";
  document.getElementById("message").style.display = "none";
  document.body.style.overflow = "auto";

  document.getElementById("closebtn").style.color = "#F8F8F8";
  document.getElementById("message").style.color = "#F8F8F8";

  // close all messages + images
  document.getElementById("elena").style.display="none";
  document.getElementById("mc").style.display="none";
  document.getElementById("frankie").style.display="none";
  document.getElementById("will").style.display="none";
  document.getElementById("eva").style.display="none";
  document.getElementById("scar").style.display="none";
  document.getElementById("casey").style.display="none";
  document.getElementById("michael").style.display="none";
  // document.getElementById("jon").style.display="none";
  // document.getElementById("emilia").style.display="none";
  // document.getElementById("mary").style.display="none";
  // document.getElementById("michael").style.display="none";
  // document.getElementById("ace").style.display="none";
  // document.getElementById("casey").style.display="none";

}
