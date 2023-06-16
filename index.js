// document.querySelector(".w").addEventListener("click",wButtonSound);

// function wButtonSound(){
//     var aud=new Audio("sounds/crash.mp3");
//     aud.play();
// }

//making event listner for each button
var noOfButtons=document.querySelectorAll("button").length;
for (let index = 0; index < noOfButtons; index++) {
    document.querySelectorAll(".drum")[index].addEventListener("click",function (){
        var buttonname=this.innerHTML; // getting inner html for clicked button
        
        switch (buttonname) {
            case "w":
                var aud=new Audio("sounds/crash.mp3");
                aud.play();
                break;
            case "a":
                var aud=new Audio("sounds/kick-bass.mp3");
                aud.play();
                break;
            case "s":
                var aud=new Audio("sounds/snare.mp3");
                aud.play();
                break;
            case "d":
                var aud=new Audio("sounds/tom-1.mp3");
                aud.play();
                break;
            case "j":
                var aud=new Audio("sounds/tom-2.mp3");
                aud.play();
                break;
            case "k":
                var aud=new Audio("sounds/tom-3.mp3");
                aud.play();
                break;
            case "l":
                var aud=new Audio("sounds/tom-4.mp3");
                aud.play();
                break;
            default:
                break;
        }
        animateButton(buttonname);
    });
    
}

document.addEventListener("keypress",function(event){
    var buttonname=event.key;
    
    switch (buttonname) {
        case "w":
            var aud=new Audio("sounds/crash.mp3");
            aud.play();
            break;
        case "a":
            var aud=new Audio("sounds/kick-bass.mp3");
            aud.play();
            break;
        case "s":
            var aud=new Audio("sounds/snare.mp3");
            aud.play();
            break;
        case "d":
            var aud=new Audio("sounds/tom-1.mp3");
            aud.play();
            break;
        case "j":
            var aud=new Audio("sounds/tom-2.mp3");
            aud.play();
            break;
        case "k":
            var aud=new Audio("sounds/tom-3.mp3");
            aud.play();
            break;
        case "l":
            var aud=new Audio("sounds/tom-4.mp3");
            aud.play();
            break;
        default:
            break;
    }
    animateButton(buttonname);
})

//making function to show button pressed
function animateButton(char){
    var button=document.querySelector("."+char);
    button.classList.add("pressed");
    // time delay of 1 second
    window.setTimeout(function(){
        button.classList.remove("pressed");
    }, 100);

}
