function ready() {

    if (localStorage.Signname == null) {
        localStorage.Signname = "";
    }
    if (localStorage.Password == null) {
        localStorage.Password = "";
    }
    if (localStorage.deleteBackground == null) {
        localStorage.deleteBackground = false;
    }
    if (localStorage.removeAnim == null) {
        localStorage.removeAnim = false;
    }
    if (localStorage.removeBlur == null) {
        localStorage.removeBlur = false;
    }
    if (localStorage.enableScrollbar == null) {
        localStorage.enableScrollbar = false;
    }
    if (localStorage.blurLevel == null) {
        localStorage.blurLevel = "50";
    }


    if (localStorage.deleteBackground == "false") {
        document.getElementById("Body").style.backgroundImage = "url(assets/unnamed" + Math.floor(Math.random() * 5) + ".jpg)";
    }
    else {
        document.getElementById("Body").style.backgroundColor = "#10151D";


        document.getElementById("List_Mainpart").style.border = "1px solid #2E3C51";
        document.getElementById("Del_Cache").style.borderLeft = "1px solid #2E3C51";
        document.getElementById("Del_Cache").style.borderRight = "1px solid #2E3C51";
        document.getElementById("Proj_Config").style.border = "1px solid #2E3C51";




    }


    let div1 = document.getElementById("div1");
    // div1.style.display = "";
    // div1.style.animation = "div1_show 0.5s";
    // div1.style.backdropFilter = "blur(25px)";

    var List_Bigdiv = document.getElementById("List_Bigdiv");
    List_Bigdiv.style.transform = "none";
    // List_Bigdiv.style.display = "none";

    // let Menu_ = document.getElementById("Menu_");
    // Menu_.style.backgroundImage = "url(assets/Menu_.png)";
    // Menu_img = "Menu_";

    document.getElementById("is_autolog").checked = localStorage.is_autolog == "true";

    is_blur();
    is_Border();


    if (localStorage.enableScrollbar == "true") {
        let html = document.getElementsByTagName("html");
        for (i = 0; i < html.length; i++) {
            html[i].style.scrollbarWidth = "thin";
        }
    }
    
}

// function Menuopen_close() {

//     let Menu_ = document.getElementById("Menu_");
//     let List_Bigdiv = document.getElementById("List_Bigdiv");
//     let List_Mainpart = document.getElementById("List_Mainpart");
//     let List_Bigger_Mainpart = document.getElementById("List_Bigger_Mainpart");
//     if (Menu_img == "Menu_" ) {
//         Menu_img = "Queue_";
//         List_Bigdiv.style.display = "block";
//         Menu_.style.backgroundImage = "url(assets/Close_.png)";

//         // document.getElementById("Body").style.overflowY = "hidden";

//         if (localStorage.removeAnim == "false") {
//             List_Bigdiv.style.animation = "FadeIn_List_Bigdiv 0.3s";
//             List_Mainpart.style.animation = "FadeIn_List_Mainpart 0.3s";
//             List_Bigger_Mainpart.style.animation = "FadeIn_List_Bigger_Mainpart 0.3s";

//             setTimeout(function (){
//                 Menu_img =  "Close_";
//             }, 300);
//         }
//         else {
//             List_Bigdiv.style.opacity = 1;
//             List_Mainpart.style.scale = "100%";
//             List_Bigger_Mainpart.style.top = "255px"; 
//             List_Bigger_Mainpart.style.right = "-67px";

//             Menu_img =  "Close_";
//         }

//     }
//     else if (Menu_img == "Close_" ) {
//         Menu_img = "Queue_";
//         Menu_.style.backgroundImage = "url(assets/Menu_.png)";

//         // document.getElementById("Body").style.overflowY = "visible";



//         if (localStorage.removeAnim == "false") {
//             List_Bigdiv.style.animation = "FadeOut_List_Bigdiv 0.3s";
//             List_Mainpart.style.animation = "FadeOut_List_Mainpart 0.3s";
//             List_Bigger_Mainpart.style.animation = "FadeOut_List_Bigger_Mainpart 0.3s";

//             setTimeout(function (){
//                 List_Bigdiv.style.display = "none";
//                 Menu_img = "Menu_";
//             }, 300);
//         }
//         else {
//             List_Bigdiv.style.opacity = 0;
//             List_Mainpart.style.scale = "40%";
//             List_Bigger_Mainpart.style.top = "135px";
//             List_Bigger_Mainpart.style.right = "-138px";

//             List_Bigdiv.style.display = "none";
//             Menu_img = "Menu_";
//         }

//         setTimeout(function (){
//             is_blur();
//             is_Border();
//         }, 1000);
//     }
// }

// function Pages_Changed(page) {
//     let div1 = document.getElementById("div1");
//     let List_Bigdiv = document.getElementById("List_Bigdiv");
//     div1.style.animation = "div1_hide 0.5s";
//     setTimeout(function (){
//         div1.style.display = "none";
//         List_Bigdiv.style.display = "none";
//         // if (page == 1) {
//         //     document.location.href = "http://127.0.0.1:5500/html/projects.html";
//         // } 
//     }, 500);
// }

function is_autolog_changed() {
    localStorage.is_autolog = document.getElementById("is_autolog").checked == true;
    // console.log(localStorage.is_autolog);

}

function is_blur() {
    if (localStorage.removeBlur == "true") {
        for (i = 0; i < document.getElementsByClassName("div1").length; i++) {
            document.getElementsByClassName("div1")[i].style.removeProperty("backdrop-filter");
        }
    }
    else {
        for (i = 0; i < document.getElementsByClassName("div1").length; i++) {
            document.getElementsByClassName("div1")[i].style.setProperty("backdrop-filter", "blur(" + localStorage.blurLevel + "px)");
        }
    }
}

function is_Border() {
    if (localStorage.deleteBackground == "false") {
        for (i = 0; i < document.getElementsByClassName("div1").length; i++) {
            document.getElementsByClassName("div1")[i].style.setProperty("border", "0");
        }
    }
    else {
        for (i = 0; i < document.getElementsByClassName("div1").length; i++) {
            document.getElementsByClassName("div1")[i].style.setProperty("border-top", "1px solid #2E3C51");
            document.getElementsByClassName("div1")[i].style.setProperty("border-bottom", "1px solid #2E3C51");

        }
        for (i = 0; i < document.getElementsByClassName("c1").length; i++) {
            document.getElementsByClassName("c1")[i].style.setProperty("border-top", "1px solid #2E3C51");
            document.getElementsByClassName("c1")[i].style.setProperty("border-bottom", "1px solid #2E3C51");

        }
        for (i = 0; i < document.getElementsByClassName("c2").length; i++) {
            document.getElementsByClassName("c2")[i].style.setProperty("border-top", "1px solid #2E3C51");
            document.getElementsByClassName("c2")[i].style.setProperty("border-bottom", "1px solid #2E3C51");

        }
        for (i = 0; i < document.getElementsByClassName("c3").length; i++) {
            document.getElementsByClassName("c3")[i].style.setProperty("border-top", "1px solid #2E3C51");
            document.getElementsByClassName("c3")[i].style.setProperty("border-bottom", "1px solid #2E3C51");

        }
        for (i = 0; i < document.getElementsByClassName("c1border").length; i++) {
            document.getElementsByClassName("c1border")[i].style.setProperty("border-top", "1px solid #2E3C51");
            document.getElementsByClassName("c1border")[i].style.setProperty("border-bottom", "1px solid #2E3C51");

        }
        for (i = 0; i < document.getElementsByClassName("Pages_").length; i++) {
            document.getElementsByClassName("Pages_")[i].style.setProperty("background-color", "#10151D");
            document.getElementsByClassName("Pages_")[i].style.setProperty("border", "1px solid #2E3C51");

        }
    }
}