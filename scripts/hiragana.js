
const hglist = ["A","I","U","E","O","KA","KI","KU","KE","KO","SA","SHI","SU","SE","SO","TA","CHI","TSU","TE","TO","NA","NI","NU","NE","NO","HA","HI","HU","HE","HO","MA","MI","MU","ME","MO","YA","YU","YO","RA","RI","RU","RE","RO","WA","WO","N","GA","GI"]

var ansLabel = document.getElementById("Anslabel");
var randomlabel = "";
var succesLabel = "Hola";

const textBox = document.getElementById("fnamelol");

function validateForm() {
    let x = document.getElementById("fnamelol").value.toLowerCase();
    if ( x == "" ) {
        succesLabel = "Name must be filled out";
        ansLabel.innerHTML = succesLabel;
        return false;
    }
   if ( x == randomlabel ){
        succesLabel ="Excelent ＼(^o^)／";
        ansLabel.innerHTML = succesLabel;
        ansLabel.style.color = "green";
        setTimeout(UpdateImage, 500);
        return true;
    }    
    succesLabel = "You're wrong";
    ansLabel.innerHTML = succesLabel;
    ansLabel.style.color = "red";
    return false;
} 

function getImagePath(){
    let randomElement = hglist[Math.floor(Math.random() * hglist.length)]
    randomlabel = randomElement.toLowerCase();
    let randomIndex = Math.floor(Math.random() * 20);
    let path = `./hiragana_images/${randomElement}/${randomIndex}.jpg`;
    return path;
}

function UpdateImage(){
     document.getElementById("lol").src = getImagePath();
     document.getElementById("fnamelol").value = "";
}

textBox.addEventListener("keydown", function( event ){
    if( event.key == "Enter" ){
        validateForm();
    }
});

window.onload = UpdateImage;
