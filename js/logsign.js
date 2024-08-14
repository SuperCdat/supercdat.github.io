// function ready() {
//     let div1 = document.getElementById("div1");
//     div1.style.width = "80%";
//     div1.style.height = "400px";
//     console.log(div1.style.width);
// }



function readygo() {
    let swup = document.getElementById("swup");
    swup.style.display = "none";
    let body = document.getElementById("Body");
    body.style.height = "100%";
}

function LogtoSign_log() {
    let div1 = document.getElementById("div1");
    div1.style.animation = "LogtoSign_log 0.5s";
    setTimeout(function (){
        div1.style.display = "none";
    }, 500);

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
            }
        }, 1000);
    }
}   
