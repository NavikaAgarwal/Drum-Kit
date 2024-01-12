
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}
function handleClick(){ 
             makeSound(this.innerHTML);  
             buttonAnimation(this.innerHTML); 
            } 
            
            document.addEventListener("keypress", aditya);
            function aditya(event){
                makeSound(event.key); 
                buttonAnimation(event.key); 
}

function makeSound(adi){
    switch (adi) {
        case "w":
            var audio=new Audio('sounds/tom-1.mp3'); 
             audio.play(); 
            break;
        case "a":
            var audio=new Audio('sounds/tom-2.mp3'); 
             audio.play(); 
            break;
        case "s":
            var audio=new Audio('sounds/tom-3.mp3'); 
             audio.play(); 
            break;
        case "d":
            var audio=new Audio('sounds/tom-4.mp3'); 
             audio.play(); 
            break;
        case "j":
            var audio=new Audio('sounds/snare.mp3'); 
             audio.play(); 
            break;
        case "k":
            var audio=new Audio('sounds/crash.mp3'); 
             audio.play(); 
            break;
        case "l":
            var audio=new Audio('sounds/kick-bass.mp3'); 
             audio.play(); 
            break;
    
        default: 
        console.log(adi)
            break;
    }
} 

function buttonAnimation(adi1){
    var activeButton = document.querySelector("."+adi1);
    activeButton.classList.add("pressed"); 
    setInterval(function(){
        activeButton.classList.remove("pressed");
    },1000) 
}