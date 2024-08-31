function readygo() {

    if (localStorage.deleteBackground == "false") {
        document.getElementById("Body").style.backgroundImage = "url(assets/unnamed" + Math.floor(Math.random() * 5) + ".jpg)";
    }
    else {
        document.getElementById("Body").style.backgroundColor = "#10151D";
    }

    let swup = document.getElementById("swup");
    swup.style.display = "none";
    let body = document.getElementById("Body");
    body.style.height = "100%";

    // let div1 = document.getElementById("div1");
    // div1.style.display = "";
    // // div1.style.animation = "div1_show 0.5s";
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