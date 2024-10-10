const readline = require("readline-sync");


const Type = {
    FIRE: "Fuego",
    WATER: "Agua",
    GRASS: "Planta",
    ELECTRIC: "Eléctrico",
    PSYCHIC: "Psíquico",
    NORMAL: "Normal",
    ROCK: "Roca"
};

class Move {
    constructor(nombre, dmg) {
        this.nombre = nombre;
        this.dmg = dmg;
    }

    calcularDano(atk, dfs) {
        const randomFactor = Math.random() * 0.15 + 0.85; // Factor aleatorio entre 0.85 y 1.0
        return Math.max(1, Math.floor((atk / dfs) * this.dmg * randomFactor));
    }
}

class Pokemon {
    constructor(nombre, tipo, hp_actual, hp_max, atk, dfs, moves) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.hp_actual = hp_actual;
        this.hp_max = hp_max;
        this.atk = atk;
        this.dfs = dfs;
        this.moves = moves;
        this.healUsed = false;
    }

    atacar(move, oponente) {
        const dano = move.calcularDano(this.atk, oponente.dfs);
        oponente.recibirDano(dano);
        console.log(`${this.nombre} usa ${move.nombre} y causa ${dano} de daño a ${oponente.nombre}.`);
    }

    curarse() {
        if (!this.healUsed) {
            this.hp_actual = Math.min(this.hp_actual + this.hp_max * 0.5, this.hp_max);
            this.healUsed = true;
            console.log(`${this.nombre} se ha curado un 50% de su HP máximo.`);
        } else {
            console.log(`${this.nombre} ya no puede curarse.`);
        }
    }

    recibirDano(dano) {
        this.hp_actual = Math.max(this.hp_actual - dano, 0);
    }

    estaDerrotado() {
        return this.hp_actual <= 0;
    }
}


const movimientos = [
    new Move("Impactrueno", 40),
    new Move("Rayo", 90),
    new Move("Lanzallamas", 90),
    new Move("Vuelo", 70),
    new Move("Pistola Agua", 40),
    new Move("Burbuja", 30),
    new Move("Látigo Cepa", 45),
    new Move("Hoja Afilada", 55),
    new Move("Canto", 40),
    new Move("Psicorayo", 65),
    new Move("Ataque rapido", 30),
    new Move("Placaje", 40),
    new Move("Bola Sombra", 80),
    new Move("Pulso umbrio", 80),
    new Move("Terremoto", 100),
    new Move("Lanza rocas", 50)
];

const pokemons = [
    new Pokemon("Pikachu", Type.ELECTRIC, 55, 55, 55, 40, [movimientos[0], movimientos[1]]),
    new Pokemon("Charizard", Type.FIRE, 78, 78, 84, 78, [movimientos[2], movimientos[3]]),
    new Pokemon("Squirtle", Type.WATER, 44, 44, 48, 65, [movimientos[4], movimientos[5]]),
    new Pokemon("Bulbasaur", Type.GRASS, 45, 45, 49, 49, [movimientos[6], movimientos[7]]),
    new Pokemon("Jigglypuff", Type.NORMAL, 115, 115, 45, 20, [movimientos[8], movimientos[9]]),
    new Pokemon("Eevee", Type.NORMAL, 55, 55, 55, 50, [movimientos[10], movimientos[11]]),
    new Pokemon("Gengar", Type.PSYCHIC, 60, 60, 65, 60, [movimientos[12], movimientos[13]]),
    new Pokemon("Onix", Type.ROCK, 35, 35, 45, 160, [movimientos[14],movimientos[15]])
];


function seleccionarPokemonAleatorio() {
    return pokemons[Math.floor(Math.random() * pokemons.length)];
}

const pokemonJugador = seleccionarPokemonAleatorio();
const pokemonIA = seleccionarPokemonAleatorio();

console.log(`El jugador ha elegido a ${pokemonJugador.nombre} (${pokemonJugador.tipo})`);
console.log(`El Rival ha elegido a ${pokemonIA.nombre} (${pokemonIA.tipo})`);
console.log("-------------------------------------------------------------")
console.log(`HP de ${pokemonJugador.nombre}: ${pokemonJugador.hp_actual}`);
console.log(`HP de ${pokemonIA.nombre}: ${pokemonIA.hp_actual}\n`);
console.log("-------------------------------------------------------------")


function iniciarCombate(pokemonJugador, pokemonIA) {
    let turnoJugador = true;

    while (!pokemonJugador.estaDerrotado() && !pokemonIA.estaDerrotado()) {
        const atacante = turnoJugador ? pokemonJugador : pokemonIA;
        const defensor = turnoJugador ? pokemonIA : pokemonJugador;

        if (turnoJugador) {
            console.log(`Es tu turno. ¿Qué deseas hacer?`);
            const accion = readline.question("1) Atacar  2) Curarse\n");

            if (accion === "1") {
                const movIdx = readline.question(
                    `Selecciona un movimiento: 1) ${atacante.moves[0].nombre}  2) ${atacante.moves[1].nombre}\n`
                );
                const movimiento = atacante.moves[movIdx - 1];
                atacante.atacar(movimiento, defensor);
            } else if (accion === "2") {
                atacante.curarse();
            } else {
                console.log("Acción no válida.");
            }
        } else {
            const accionIA = Math.random() > 0.5 ? "atacar" : "curarse";
            if (accionIA === "atacar") {
                const movimiento = atacante.moves[Math.floor(Math.random() * atacante.moves.length)];
                atacante.atacar(movimiento, defensor);
            } else {
                atacante.curarse();
            }
        }
        console.log("-------------------------------------------------------------")
        console.log(`HP de ${pokemonJugador.nombre}: ${pokemonJugador.hp_actual}`);
        console.log(`HP de ${pokemonIA.nombre}: ${pokemonIA.hp_actual}\n`);
        console.log("-------------------------------------------------------------")
        turnoJugador = !turnoJugador;
    }

    if (pokemonJugador.estaDerrotado()) {
        console.log(`${pokemonJugador.nombre} ha sido derrotado. ¡El Rival gana!`);
    } else {
        console.log(`${pokemonIA.nombre} ha sido derrotado. ¡Has ganado!`);
    }
}

iniciarCombate(pokemonJugador, pokemonIA);