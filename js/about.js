function readygo() {

  if (localStorage.deleteBackground == "false") {
    document.getElementById("Body").style.backgroundImage = "url(../assets/unnamed" + Math.floor(Math.random() * 5) + ".webp)";
  }
  else {
      document.getElementById("Body").style.backgroundColor = "#10151D";
  }


  // let div1 = document.getElementById("div1");
  // div1.style.display = "none";
  let swup = document.getElementById("swup");
  swup.style.display = "none";
  let body = document.getElementById("Body");
  body.style.height = "100%";

  // let div1 = document.getElementById("div1");
  // div1.style.display = "";
  // div1.style.animation = "div1_show 0.5s";
  // div1.style.backdropFilter = "blur(25px)";

  // var List_Bigdiv = document.getElementById("List_Bigdiv");
  // List_Bigdiv.style.transform = "none";
  // List_Bigdiv.style.display = "none";

  // let Menu_ = document.getElementById("Menu_");
  // Menu_.style.backgroundImage = "url(assets/Menu_.png)";
  // Menu_img = "Menu_";
}

// function Menuopen_close() {
//     let Menu_ = document.getElementById("Menu_");
//     let List_Bigdiv = document.getElementById("List_Bigdiv");
//     let List_Mainpart = document.getElementById("List_Mainpart");
//     let List_Bigger_Mainpart = document.getElementById("List_Bigger_Mainpart");
//     if (Menu_img == "Menu_" ) {
//         Menu_img = "Queue_";
//         List_Bigdiv.style.display = "";
//         Menu_.style.backgroundImage = "url(assets/Close_.png)";
//         List_Bigdiv.style.animation = "FadeIn_List_Bigdiv 0.3s";
//         List_Mainpart.style.animation = "FadeIn_List_Mainpart 0.3s";
//         List_Bigger_Mainpart.style.animation = "FadeIn_List_Bigger_Mainpart 0.3s";
//         setTimeout(function (){
//             Menu_img =  "Close_";
//         }, 300);
//     }
//     else if (Menu_img == "Close_" ) {
//         Menu_img = "Queue_";
//         Menu_.style.backgroundImage = "url(assets/Menu_.png)";
//         List_Bigdiv.style.animation = "FadeOut_List_Bigdiv 0.3s";
//         List_Mainpart.style.animation = "FadeOut_List_Mainpart 0.3s";
//         List_Bigger_Mainpart.style.animation = "FadeOut_List_Bigger_Mainpart 0.3s";
//         setTimeout(function (){
//             List_Bigdiv.style.display = "none";
//             Menu_img = "Menu_";
//         }, 300);
//     }
// }

// function Pages_Changed(page) {
//     let div1 = document.getElementById("div1");
//     let List_Bigdiv = document.getElementById("List_Bigdiv");
//     div1.style.animation = "div1_hide 0.5s";
//     setTimeout(function (){
//         div1.style.display = "none";
//         List_Bigdiv.style.display = "none";
//     }, 500);
// }

var zoomElement = "";

function imgclose() {
    document.getElementById("imgpopup").style.opacity = 0;
    document.getElementById("imgmainimg").style.scale = "50%";

    setTimeout(function (){
        // document.getElementById("imgpopup").hide();

        document.getElementById("imgpopup").style.display = "none";
        document.getElementById("Body").style.overflow = "scroll";
        document.getElementById("Body").style.scrollbarWidth = "0";
        

        zoomElement = "";

    }, 200);

}

let imgcrnt;

function imgshow(img, imgtitle, dllink) {
  document.getElementById("imgpopup").style.display = "block";
  // document.getElementById("imgpopup").show();

  document.getElementById("imgpopup").style.opacity = 1;
  document.getElementById("aimgmainimg").style.left = "50%";
  document.getElementById("aimgmainimg").style.top = "50%";

  document.getElementById("imgtitle").textContent = imgtitle;
  // console.log(document.getElementById("imgtitle").textContent);



  document.getElementById("imgmainimg").src = img;
  document.getElementById("Body").style.overflow = "hidden";

  zoomElement = document.getElementById("imgmainimg");


  mousedragElement(document.getElementById("aimgmainimg"));

  touchdrag(document.getElementById("aimgmainimg"));

  imgcrnt = dllink;

  $("#zoom_in").on("click", (e) => {
    e.preventDefault();
    if (zoomElement != "") {
      zoomElement.style.scale = `${(zoom += 0.3)}`;
    }
  });

  $("#zoom_out").on("click", (e) => {
    e.preventDefault();
    if (zoomElement != "" && zoom >= 0.5) {
      zoomElement.style.scale = `${(zoom -= 0.3)}`;
    }
  });

}

function downloadimg() {
  document.location.href = imgcrnt;
}

// var zoomElement = document.getElementById("aimgmainimg");
var zoom = 1;

const ZOOM_SPEED = 0.3;

document.addEventListener("wheel", function (e) {
  if (zoomElement != "") {
    if (e.deltaY < 0) {
      zoomElement.style.scale = `${(zoom += ZOOM_SPEED)}`;
    } else if (e.deltaY > 0 && zoom >= 0.5) {
      zoomElement.style.scale = `${(zoom -= ZOOM_SPEED)}`;
    }
  }
});



// Make the DIV element draggable:



function mousedragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;

  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    document.getElementById("imgmainimg").style.cursor = "grabbing";

  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:

    if (elmnt.style.left != (elmnt.offsetLeft - pos1)) {
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    if (elmnt.style.top != (elmnt.offsetTop - pos2)) {
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    }

  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.getElementById("imgmainimg").style.cursor = "grab";
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function touchdrag(element) {
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  // For touch drag
  $(element).on('touchstart', function (e) {

    e.preventDefault();


    isDragging = true;
    let touch = e.originalEvent.touches[0];
    offsetX = touch.clientX - $(element).position().left - element.clientWidth/2;
    offsetY = touch.clientY - $(element).position().top - element.clientHeight/2;

    // console.log( touch.clientX );
    // console.log( touch.clientY );
    // console.log( $(element).position().left );
    // console.log( $(element).position().top );


  });

  $(element).on('touchmove', function (e) {

    if (isDragging) {
      let touch = e.originalEvent.touches[0];
      $(element).css({
          left: touch.clientX - offsetX + 'px',
          top: touch.clientY - offsetY + 'px'

      });
    }
  }).on('touchend', function () {
      isDragging = false;
  });
}






// function touchdragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").ontouchstart = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.ontouchstart = dragMouseDown;

//   }

//   function dragMouseDown() {
//     touch.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = touch.clientX;
//     pos4 = touch.clientY;
//     document.ontouchend = closeDragElement;

//     // call a function whenever the cursor moves:
//     document.ontouchmove = elementDrag;

//   }

//   function elementDrag(touch) {
//     touch = touch || window.event;
//     // e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - touch.clientX;
//     pos2 = pos4 - touch.clientY;
//     pos3 = touch.clientX;
//     pos4 = touch.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.ontouchend = null;
//     document.ontouchmove = null;
//   }
// }