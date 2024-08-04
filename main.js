var is_topctp_expanded = false;
var curvar;

function initstart() {
    let top_center = document.getElementById("topid_centerpart");
    top_center.style.height = "400px";
    let center_center = document.getElementById("centerid_centerpart");
    center_center.style.height = "400px";
    curvar = 0
}

function hideorshowtopctp() {
    let top_center = document.getElementById("topid_centerpart");
    console.log(curvar);
    if (curvar == 0) {
        curvar = 1;
        fade_out()
        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
            }
          
            delay(500).then(() => expandtopcpt());

    }
    else if (curvar == 2) {
        curvar = 1;
        let pos = 1090;
        let pos2 = 52.5;
        let pos3 = 96;
        let x = setInterval(()=>{
            pos -= 10;
            top_center.style.height = pos + "px";
            pos2 -= 0.41304347826087;
            top_center.style.top = pos2 + "%";
            pos3 -= 0.0144927536231884;
            top_center.style.width = pos3 + "%";
            if (top_center.style.height === "400px") {
                clearInterval(x);
                function delay(time) {
                    return new Promise(resolve => setTimeout(resolve, time));
                    }
                  
                    delay(250).then(() => fade_in());
            }
        }, 1)
    }
}

function expandtopcpt() {
    let top_center = document.getElementById("topid_centerpart");
    top_center.style.zIndex = 1;
    let pos = 400;
    let pos2 = 24;
    let pos3 = 95.5;
    let x = setInterval(()=>{
        pos += 10;
        top_center.style.height = pos + "px";
        pos2 += 0.41304347826087;
        top_center.style.top = pos2 + "%";
        pos3 += 0.0144927536231884/2;
        top_center.style.width = pos3 + "%";
        if (top_center.style.height === "1090px") {
            clearInterval(x);
        }
    }, 1)
}

function fade_out() {
    is_topctp_expanded = true;
    let center_center = document.getElementById("centerid_centerpart");
    let bottom_center = document.getElementById("bottomid_centerpart");
    let currentdidtime = 0.5;
    let x = setInterval(()=>{
        center_center.style.background = "rgba(255, 255, 255, " + currentdidtime + ")";
        bottom_center.style.background = "rgba(255, 255, 255, " + currentdidtime + ")";
        currentdidtime -= 0.05;
        console.log(currentdidtime);
        if (currentdidtime < 0.01) {
            clearInterval(x);
            center_center.style.background = "rgba(255, 255, 255, 0)";
            bottom_center.style.background = "rgba(255, 255, 255, 0)";
            curvar = 2;
        }
    }, 50)
}

function fade_in() {
    is_topctp_expanded = false;
    let center_center = document.getElementById("centerid_centerpart");
    let bottom_center = document.getElementById("bottomid_centerpart");
    let currentdidtime = 0.0;
    let y = setInterval(()=>{
        center_center.style.background = "rgba(255, 255, 255, " + currentdidtime + ")";
        bottom_center.style.background = "rgba(255, 255, 255, " + currentdidtime + ")";
        currentdidtime += 0.05;
        console.log(currentdidtime)
        if (currentdidtime > 0.49) {
            clearInterval(y);
            curvar = 0;
        }
    }, 50)
}

function onhovertopctp() {
    if (!is_topctp_expanded) {
        let top_center = document.getElementById("topid_centerpart");
        top_center.style.width = "95.5%";
        top_center.style.height = "402px";
    }
}
function onleavetopctp() {
    if (!is_topctp_expanded) {
    let top_center = document.getElementById("topid_centerpart");
    top_center.style.width = "95%";
    top_center.style.height = "400px";
    }
}



