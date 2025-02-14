const texts = [
    "We been dating for a year now..",
    "But just to make sure..",
    "Let's do this one more time..",
    "Will you be my Valentine?"
];

let index = 0;

function changeText(){ 
        index = (index + 1) % texts.length; // Loop back to the first text
        if (index===3){
            document.getElementById("hide").style.display = "none";
            document.getElementById("content").style.fontFamily = "cursive";
            document.getElementById("content").style.color = "red";
            document.getElementById("content").style.fontSize = "56px";
            document.getElementById("choice1").style.display = "block";
            document.getElementById("choice2").style.display = "block";




        }
        document.getElementById("content").textContent = texts[index];
    
}

function changeTextBack() {
    let index = texts.length -1;
    document.getElementById("content").textContent = texts[index];
    index = (index - 1 + texts.length) % texts.length; // Loop back to the last text
}