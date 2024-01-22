class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = tipo;
        this.tipo = idade;
    }

    attack(){
        console.log(`O ${this.nome} atacou usando ${this.tipo}`);
    }
    }

let Ataque = new heroi('Guerreiro', 'Espada', 18)
Ataque.attack('Ataque de Espada')







