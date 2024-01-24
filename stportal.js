//for login form
function check(){
    var user = document.getElementById("username").value
    var username = user.toLowerCase();
    var pass = document.getElementById("password").value
    if (username == "2021f-bmcs-001" && pass == "abcd1234"){
         
        location.assign('https://ssuetstudentportal001.netlify.app');
        alert("Welcome to Student portal, Rabeea");
        
    }
    else if (username == "2022f-bmcs-020" && pass == "abcd1234"){
         
         location.assign('https://ssuetstudentportal020.netlify.app');
         alert("Welcome to Student portal, Mustafa");
         
     }
    else if (username == "2022s-bmcs-010" && pass == "abcd1234"){
         
         location.assign('https://ssuetstudentportal010.netlify.app');
         alert("Welcome to Student portal, Laraib");
         
     }
    else{
        alert("Incorrect Login")
    }
}
