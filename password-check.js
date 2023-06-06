function handlePassword(){
    var password = prompt("What is da password?");
    if(password == "Vamos"){
        alert("pass!");
        sessionStorage.setItem("isLoggesdIn", "true");
        window.location.href = "main.html";
    } else{
        alert("fail");
    }
}