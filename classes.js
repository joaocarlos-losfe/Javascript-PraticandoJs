//classe basica

class Pessoa
{
    constructor ()
    {
        this.nome = '';
        this.idade = 0;
        this.altura = 0.00;
    }

    setPerson(nome, idade, altura)
    {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    get PrintPerson()
    {
        return `${this.nome}, ${this.idade}, ${this.altura}`;
    }
}

let pessoa = new Pessoa();

pessoa.setPerson("joao", 23, 1.75);

let p = pessoa.PrintPerson;

//console.log(p);