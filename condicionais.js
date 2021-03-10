let maior_de_idade = 16;

let is_maior = maior_de_idade >= 18 ? true : false;

if(is_maior)
    console.log("é maior de idade. possui " + maior_de_idade + " anos");
else
    console.log("é menor de idade. possui " + maior_de_idade + " anos");


switch(maior_de_idade)
{
    case 18: console.log("maior que 18"); break;

    case 17: console.log("menor que 18"); break;

    default: console.log("é criança ainda o bichin");
}