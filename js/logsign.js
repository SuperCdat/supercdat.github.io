// function ready() {
//     let div1 = document.getElementById("div1");
//     div1.style.width = "80%";
//     div1.style.height = "400px";
//     console.log(div1.style.width);
// }



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
}

function LogtoSign_log() {
    let div1 = document.getElementById("div1");
    let body = document.getElementById("Body");

    div1.style.animation = "LogtoSign_log 0.5s";
    setTimeout(function (){
        div1.style.display = "none";

    }, 500);

    document.getElementById("divbackground").style.backgroundImage = document.getElementById("Body").style.backgroundImage;

}

function LogtoSign_sign() {
    let div1_Sign = document.getElementById("div1_Sign");
    div1_Sign.style.display = "block";
    div1_Sign.style.animation = "LogtoSign_sign 0.5s";
    setTimeout(function (){
        div1_Sign.style.left = "50%";
    }, 500);
}

function SigntoLog_log() {
    let div1 = document.getElementById("div1");
    div1.style.display = "block";
    div1.style.animation = "SigntoLog_log 0.5s";
}

function SigntoLog_sign() {
    let div1_Sign = document.getElementById("div1_Sign");
    let body = document.getElementById("Body");

    div1_Sign.style.animation = "SigntoLog_sign 0.5s";
    setTimeout(function (){
        div1_Sign.style.display = "none";

    }, 500);
}


function autolog() {

    if (document.getElementById("is_autolog").checked) {
        setTimeout(function (){

            // console.log(localStorage.Signname);
            let Signname = document.getElementById("Signname");
            let Signpassword = document.getElementById("Signpassword");

            Signname.value = localStorage.Signname;
            Signpassword.value = localStorage.Password;
            if (localStorage.Signname != "" && localStorage.Password != "") {
                document.getElementById("continue_btn").click();
                setTimeout(function (){
                    is_blur();
                }, 2000);
            }

            setTimeout(function (){
                if (localStorage.removeBlur == "true") {
                    div1.style.removeProperty("backdrop-filter");
                }
                else {
                    div1.style.setProperty("backdrop-filter", "blur(15px)");
                }
            }, 1000);
        }, 1000);
    }
}

function Signname_Enter() {
    document.getElementById("Signname").addEventListener("keypress", function (ev) {
        if (ev.key == "Enter") {
            document.getElementById("Signpassword").focus();
        }
    });
}
function Signpassword_Enter() {
    document.getElementById("Signpassword").addEventListener("keypress", function (ev) {
        if (ev.key == "Enter") {
            document.getElementById("continue_btn").click();
        }
    });
}

function Displayname_Sign_Enter() {
    document.getElementById("Displayname_Sign").addEventListener("keypress", function (ev) {
        if (ev.key == "Enter") {
            document.getElementById("Signname_Sign").focus();
        }
    });
}
function Signname_Sign_Enter() {
    document.getElementById("Signname_Sign").addEventListener("keypress", function (ev) {
        if (ev.key == "Enter") {
            document.getElementById("Signpassword_Sign").focus();
        }
    });
}
function Signpassword_Sign_Enter() {
    document.getElementById("Signpassword_Sign").addEventListener("keypress", function (ev) {
        if (ev.key == "Enter") {
            document.getElementById("Signpassword_Again_Sign").focus();
        }
    });
}
function Signpassword_Again_Sign_Enter() {
    document.getElementById("Signpassword_Again_Sign").addEventListener("keypress", function (ev) {
        if (ev.key == "Enter") {
            document.getElementById("continue_btn_Sign").click();
        }
    });
}