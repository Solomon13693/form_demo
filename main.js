function myFunction()  {
let username = document.querySelector("#username").value
let password = document.querySelector("#password").value

if (username === "solomon" && password === "12345"){
    window.location="Microsoft web/index.html";
} 
else if (username == "" && password == "" || username === null && password === null ){
    document.querySelector("#error").innerHTML="Inputs can't be blank";
}
else{
    document.querySelector("#error").innerHTML="Inputs details not correct";
}
};
