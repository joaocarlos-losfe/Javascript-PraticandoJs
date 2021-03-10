let Pessoa = 
{
    nome : "string",
    idade: 23,
    is_ok: true,
    variavel: null,
    v2: null,

    endereco : 
    {
        pais: "Brasil",
        cidade: "Dom Expedito Lopes",
        Pov: "Buriti grande"

    }
}

console.log(Pessoa);

Pessoa.nome = "jose";

console.log(Pessoa);

console.log(Pessoa.endereco);

let Pessoas = [Pessoa, Pessoa];

console.log(Pessoas);
