let ruchGracza = 1;

function ruch(pole){
    if(ruchGracza == 1){
        document.getElementById("pole" + pole).innerHTML = "O";
        ruchGracza = 0;
    }else{    
        document.getElementById("pole" + pole).innerHTML = "X";
        ruchGracza = 1;
    }
}

function reset(){
    for(let i = 1; i <= 9; i++){
        document.getElementById("pole" + i).innerHTML = "";
    }
}