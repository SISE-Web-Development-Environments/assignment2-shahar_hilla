var randomMonster1=5;
var randomMonster2=5;
var randomMonster3=5;
var randomMonster4=5;

// function exitGame() {
//     if (confirm("Do you sure you want to quit the game?")) {
//         return show('welcome', 'game');
//     }
// }

function playFunction(){
    showColorsChosenForCookies();
    if(isMonsterChecked() & isNumCookiesValid() & isTimeLegal()){
        musicController();
        return show('game','settings');
    }else{
       // alert("You did not fill all the settings!");
        //  alert("sad");
    }

}

function isTimeLegal(){
    let valid=true;
    var gameT=document.getElementById("gameTime").value;
    if(gameT<60){
        alert("The min time in seconds is 60 seconds to game");
        valid=false;
    }
    return valid;

}
function isNumCookiesValid(){
    let valid=true;
    var food=document.getElementById("numberCookies").value;
    if (food < 50 ) {
        alert("Num of cookies is less than 50");
        valid=false;
    } else if (food>90) {
        alert("Num of cookies is greater than 90");
        valid=false;
    }
    return valid;
}
function startNewGame() {
    if (confirm("Do you sure you want to start new game?")) {
        return show('settings', 'game');
    }
}

function fillFormRandom() {

    clearCheckBox();
    document.getElementById('numberCookies').value = Math.round(Math.random() * 40 + 50);
    document.getElementById('fiveCookie').value = getRandomColor();
    document.getElementById('fiveChip').value = getRandomColor();
    document.getElementById('fifthCookie').value = getRandomColor();
    document.getElementById('fifthChip').value = getRandomColor();
    document.getElementById('twentyCookie').value = getRandomColor();
    document.getElementById('twentyChip').value = getRandomColor();

    while(!isMonsterChecked()){
        randomCheckBox();
    }

    document.getElementById('gameTime').value = Math.round(Math.random() * 120 + 60);


}

function fillChoice() {

    clearCheckBox();
    document.getElementById('numberCookies').value = 70;
    document.getElementById('fiveCookie').value = "#b37700";
    document.getElementById('fiveChip').value = "#664400";
    document.getElementById('fifthCookie').value = "#ffcc99";
    document.getElementById('fifthChip').value = "#fff2e6";
    document.getElementById('twentyCookie').value = "#331a00";
    document.getElementById('twentyChip').value = "#ffffff";

    document.getElementById("monster1").checked = true;
    document.getElementById("monster3").checked = true;
    document.getElementById("monster4").checked = true;

    document.getElementById('gameTime').value = 120;

}

function clearCheckBox() {
    document.getElementById("monster1").checked = false;
    document.getElementById("monster2").checked = false;
    document.getElementById("monster3").checked = false;
    document.getElementById("monster4").checked = false;
}

function randomCheckBox(){
    let randomCheckBox=Math.round(Math.random());
    if(randomCheckBox==1){
        document.getElementById("monster1").checked = true;
    }
    randomCheckBox=Math.round(Math.random());
    if(randomCheckBox==1){
        document.getElementById("monster2").checked = true;
    }
    randomCheckBox=Math.round(Math.random());
    if(randomCheckBox==1){
        document.getElementById("monster3").checked = true;
    }
    randomCheckBox=Math.round(Math.random());
    if(randomCheckBox==1){
        document.getElementById("monster4").checked = true;
    }
}



function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function showColorsChosenForCookies() {
    document.getElementById("fivePointsCook").style.background = document.getElementById("fiveCookie").value;
    document.getElementById("fivePointsChip").style.background = document.getElementById("fiveChip").value;

    document.getElementById("fifthPointsCook").style.background = document.getElementById("fifthCookie").value;
    document.getElementById("fifthPointsChip").style.background = document.getElementById("fifthChip").value;

    document.getElementById("twentyPointsCook").style.background = document.getElementById("twentyCookie").value;
    document.getElementById("twentyPointsChip").style.background = document.getElementById("twentyChip").value;
}

function isMonsterChecked() {
    let chx = document.getElementsByTagName('input');
    for (let i=0; i<chx.length; i++) {
        if (chx[i].type === 'checkbox' && chx[i].checked) {
            return true;
        }
    }
   // alert("You need to choose at least one monster");
    return false;
}

function createMonsterPositions(){
    let monster1 = document.getElementById('monster1');
    let monster2 = document.getElementById('monster2');
    let monster3 = document.getElementById('monster3');
    let monster4 = document.getElementById('monster4');
    if(monster1.checked){
        randomMonster1= Math.round(Math.random()*3);

    }
    if(monster2.checked){
        randomMonster2= Math.round(Math.random()*3);
        if(monster1.checked){
            while(randomMonster2===randomMonster1){
                randomMonster2= Math.round(Math.random()*3);
            }
        }
    }
    if(monster3.checked){
        randomMonster3= Math.round(Math.random()*3);
        if(monster1.checked & monster2.checked){
            while(randomMonster3===randomMonster1 || randomMonster3===randomMonster2){
                randomMonster3= Math.round(Math.random()*3);
            }
        }else if(monster1.checked){
            while(randomMonster3===randomMonster1){
                randomMonster3= Math.round(Math.random()*3);
            }
        }else if(monster2.checked){
            while(randomMonster3===randomMonster2){
                randomMonster3= Math.round(Math.random()*3);
            }
        }
    }
    if(monster4.checked){
        randomMonster4= Math.round(Math.random()*3);
        if(monster1.checked & monster2.checked & monster3.checked){
            while(randomMonster4===randomMonster1 || randomMonster4===randomMonster2|| randomMonster4===randomMonster3){
                randomMonster4= Math.round(Math.random()*3);
            }
        }else if(monster1.checked & monster2.checked){
            while(randomMonster4===randomMonster1 || randomMonster4===randomMonster2){
                randomMonster4= Math.round(Math.random()*3);
            }
        }else if(monster3.checked & monster2.checked){
            while(randomMonster4===randomMonster3 || randomMonster4===randomMonster2){
                randomMonster4= Math.round(Math.random()*3);
            }
        }else if(monster1.checked & monster3.checked){
            while(randomMonster4===randomMonster1 || randomMonster4===randomMonster3){
                randomMonster4= Math.round(Math.random()*3);
            }
        }else if(monster1.checked){
            while(randomMonster4===randomMonster1){
                randomMonster4= Math.round(Math.random()*3);
            }
        }else if(monster2.checked){
            while(randomMonster4===randomMonster2){
                randomMonster4= Math.round(Math.random()*3);
            }
        }else if(monster3.checked){
            while(randomMonster4===randomMonster3){
                randomMonster4= Math.round(Math.random()*3);
            }
        }
    }
}