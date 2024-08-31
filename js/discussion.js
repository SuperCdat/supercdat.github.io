function readygo() {

    if (localStorage.deleteBackground == "false") {
        document.getElementById("Body").style.backgroundImage = "url(assets/unnamed" + Math.floor(Math.random() * 5) + ".jpg)";
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