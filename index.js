/* document.querySelector("button").addEventListener("click", handleClick);
function handleClick(){
    alert("i got clicked")
}
// Called using function

document.querySelector("button.a").addEventListener("click", function (){
    alert("i got clicked")
} );

//Calling using anonymus fucntion

document.querySelector("button.s").addEventListener("click", function (){
    alert("i got clicked")
} );

document.querySelector("button.d").addEventListener("click", function (){
    alert("i got clicked")
} );

document.querySelector("button.j").addEventListener("click", function (){
    alert("i got clicked")
} );

document.querySelector("button.k").addEventListener("click", function (){
    alert("i got clicked")
} );

document.querySelector("button.l").addEventListener("click", function (){
    alert("i got clicked")
} ); */

//This was what i wrote.


for(var i=0;i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function()
    {
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
    });
}

document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch (key) 
    {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
    
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
    }
}

function buttonAnimation(key){
    var activebutton =document.querySelector("."+key);

    activebutton.classList.add("pressed");

    setTimeout(function(){
        activebutton.classList.remove("pressed");
    }, 100)
}