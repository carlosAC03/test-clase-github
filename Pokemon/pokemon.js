class pokemon{
    constructor(nombre, tipo, HP_actual,Hp_Max,ataque, defensa, movimiento1, movimiento2 ){
        this.nombre = nombre;
        this.tipo = tipo;
        this.HP_actual = HP_actual;
        this.Hp_Max = Hp_Max;
        this.ataque = ataque;
        this.defensa = defensa;
        this.movimiento1 = movimiento1;
        this.movimiento2 = movimiento2
    }
   
}
const pokemons = [
    new Pokemon("Pikachu","Eléctrico",35,35,55,40,"Impactrueno","Rayo"),
    new Pokemon("Charizard","Fuego/Volador",78,78,84,78,"Lanzallamas","Vuelo"),
    new Pokemon("Bulbasaur","Planta/Veneno",45,45,49,49,"Látigo Cepa","Hoja Afilada"),
    new Pokemon("Squirtle","Agua",44,44,48,65,"Pistola Agua","Hidro Bomba"),
    new Pokemon("Onix","Roca/Tierra",35,35,45,160,"Golpe Roca","Excavar")
];

