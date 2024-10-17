function Juego(player){
 const arrayppt = ["piedra", "papel", "tijeras"];
 const arrayia = arrayppt[Math.floor(Math.random() * arrayppt.length)];
 let mensage = "";
    if(player === arrayia){
        mensage = "Empate"
    }
    else if(player === "piedra" && arrayia === "tijeras"){
        mensage = "Victoria"
    }
    else if(player === "papel" && arrayia === "piedra"){
        mensage = "Victoria"
    }
    else if(player === "tijeras" && arrayia === "papel"){
        mensage = "Victoria"
    }
    else{
        mensage = "Derrota"
    }
    document.getElementById('g').textContent = `Resultado: ${mensage}`;
    document.getElementById('u').textContent = `Tu elección: ${clases(player)}`;
    document.getElementById('c').textContent = `Computadora: ${clases(arrayia)}`;
}

function clases(x){
switch(x){
    case "piedra":
        return "⛰️";

    case "papel":
        return "📄";

    case "tijeras":
        return "✂️";
}  
}