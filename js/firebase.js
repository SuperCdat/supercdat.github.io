import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyDc4gG1fGxYI64nymEfSjw1BISrIdyvwA4",
    authDomain: "cd-s-web-discussion.firebaseapp.com",
    databaseURL: "https://cd-s-web-discussion-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cd-s-web-discussion",
    storageBucket: "cd-s-web-discussion.appspot.com",
    messagingSenderId: "179301109876",
    appId: "1:179301109876:web:46e5dcbafad0b13b240121",
    measurementId: "G-J3560LF2N6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase, child, remove, update, ref, set, get} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-database.js";

const db = getDatabase();

window.AddData = () => {
    window.onload=function(){    
        let Displayname_Sign = document.getElementById("Displayname_Sign");
        let Signname_Sign = document.getElementById("Signname_Sign");
        let Signpassword_Sign = document.getElementById("Signpassword_Sign");
        let Signpassword_Again_Sign = document.getElementById("Signpassword_Again_Sign");
        let remember_me_Sign = document.getElementById("remember_me_Sign");

    }

    const dbRef = ref(db);

    if (Signname_Sign.value != "") {
        get(child(dbRef, "Datas/Users/" + Signname_Sign.value)).then((snapshot)=>{
            if (snapshot.exists()) {
                let issue_text = document.getElementById("issue_text");
                issue_text.textContent = "Tên đăng nhập đã tồn tại, vui lòng sử dụng tên khác";
                issue_text.style.display = "block";
            }
            else if (Displayname_Sign.value == "") {
                let issue_text = document.getElementById("issue_text");
                issue_text.textContent = "Chưa nhập tên hiển thị";
                issue_text.style.display = "block";
            }
            else if (Signpassword_Sign.value == "" || Signpassword_Again_Sign.value == "") {
                let issue_text = document.getElementById("issue_text");
                issue_text.textContent = "Chưa nhập mật khẩu";
                issue_text.style.display = "block";
            }
            else if (Signpassword_Sign.value != Signpassword_Again_Sign.value) {
                let issue_text = document.getElementById("issue_text");
                issue_text.textContent = "Mật khẩu không trùng khớp";
                issue_text.style.display = "block";
            }
            else {

                let issue_text = document.getElementById("issue_text");
                issue_text.style.display = "none";

                if (remember_me_Sign.checked) {
                    localStorage.Signname = Signname_Sign.value;
                    localStorage.Password = Signpassword_Sign.value;
                }

                let Platform = navigator.userAgent;
                const newDate = new Date();
                // let CurrentDate = (newDate.getDate() + " - " + (newDate.getMonth() + 1) + " - " + newDate.getFullYear());

                localStorage.logname = Signname_Sign.value;
                localStorage.disname = Displayname_Sign.value;

                let CurrentDate = (newDate.getDate() + " - " + (newDate.getMonth() + 1) + " - " + newDate.getFullYear() + " | " + newDate.getHours() + ":" + newDate.getMinutes() + ":" + newDate.getSeconds());

                set(ref(db, "Datas/Users/" + Signname_Sign.value), {
                    DisplayName : Displayname_Sign.value,
                    SignName : Signname_Sign.value,
                    Password : Signpassword_Sign.value,
                    Platform : Platform,
                    DateCreated : CurrentDate,
                }).then(() => {
                    window.alert("Tạo tài khoản thành công!");
                    document.getElementById("gotodscs").click();

                }).catch(() => {
                    alert("Tạo tài khoản thất bại.");
                    console.log(error);
                })
            }
        });
    }
    else {
        let issue_text = document.getElementById("issue_text");
        issue_text.textContent = "Chưa nhập tên đăng nhập";
        issue_text.style.display = "block";
    }


}


window.LogIn = () => {
    window.onload=function(){
        let Signname = document.getElementById("Signname");
        let Signpassword = document.getElementById("Signpassword");
        let remember_me = document.getElementById("remember_me");

    }

    const dbRef = ref(db);

    get(child(dbRef, "Datas/Users/" + Signname.value)).then((snapshot)=>{
        if ((!snapshot.exists()) || (Signpassword.value != snapshot.val().Password)) {
            let issue_text_log = document.getElementById("issue_text_log");
            issue_text_log.textContent = "Sai mật khẩu hoặc tên đăng nhập";
            issue_text_log.style.display = "block";
        }
        else {
            let issue_text_log = document.getElementById("issue_text_log");
            issue_text_log.style.display = "none";
            document.getElementById("gotodscs").click();

            localStorage.logname = Signname.value;
            localStorage.disname = snapshot.val().DisplayName;



            if (remember_me.checked) {
                localStorage.Signname = Signname.value;
                localStorage.Password = Signpassword.value;
            }

        }
    });
}

window.Del_Sign_Cache = () => {
    localStorage.Signname = "";
    localStorage.Password = "";
    localStorage.is_autolog = false;
    localStorage.theme = "Dark";
    localStorage.removeAnim = false;
    localStorage.removeBlur = false;
    localStorage.enableScrollbar = false;
    localStorage.blurLevel = "50";
    localStorage.deleteBackground = false;

    document.getElementById("del_success_symbol").style.opacity = 1;
    setTimeout(function() {
        document.getElementById("del_success_symbol").style.opacity = 0;

    }, 1000);

}
