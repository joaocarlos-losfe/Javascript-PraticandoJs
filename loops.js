//loops simples

for(i=0; i<10; i++)
    console.log(i);

for(i=0; i<=10; i++)
{
    if(i%2 == 0)
        console.log(i + " é par");
    
    if(i%2 == 1)
    console.log(i + " é impar");
}


let count = 0;

while(true)
{
    count++;
    if(count == 10)
    {
        console.log("fim do loop por condição. valor do count: ", count);
        break;
    }  
}

count = 0;

do
{
    console.log(count);
    count++;

}while(count < 5);

const Pessoa = 
{
    nome: "joao",
    idade: 23,
    email: "joaocarlos.losfe@gmail.com"
}

for (let key in Pessoa)
{
    console.log(Pessoa[key]);
}


const arr = [1,2,3,4,5];

for (let i in arr)
{
    console.log(i + ": " + arr[i]);
}

const pessoas = ["joao", "jose", "antotio"];

for(let pessoa of pessoas)
{
    console.log(pessoa);
}