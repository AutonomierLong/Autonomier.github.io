let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "./Images/Scenery.jpg")
    {
        myImage.setAttribute("src", "./Images/Scenery01.jpg");    
    }
    else
    {
        myImage.setAttribute("src", "./Images/Scenery.jpg");
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector("h1");

function setUsername(){
    let myName = prompt("请输入您的名字");
    if(!myName)
        setUsername()
    else
    {
        localStorage.setItem("name",myName);
        myHeading.textContent = myName + " is a cool guy.";
    }
}

if(!localStorage.getItem("name")){
    setUsername();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName + " is a cool guy!";
}

myButton.onclick = function(){
    setUsername();
}