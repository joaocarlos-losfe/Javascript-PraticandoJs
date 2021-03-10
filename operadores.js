function inc(value)
{
    return ++value;
}

function dec(value)
{
    return --value;
}

let salario = 100;

console.log(salario + salario);
console.log(salario * salario);
console.log(salario / salario + 1);
console.log(salario - salario);
console.log(salario ** 5); //exponenciação

salario++;

console.log(++salario);

let is_ok = salario < 80;

console.log(is_ok);

//comparando valor e tipo
console.log(1===1);
console.log('1'===1);

//comparação simples
console.log(1==1);

console.log('1'==1);

//operador ternario

let premio = 90;

let tipo =  premio >= 100 ? "premium" : "comum";

console.log(tipo);

let x = 9;

let final = x >= 10 ? inc(x) : dec(x);

console.log(final);

//operadores logicos

let n1 = 5;
let n2 = 10;

console.log((n1 < n2) && (n1 + n2) < 15 );

console.log((n1 > n2) && (n1 + n2) >= 15 );

console.log((n1 > n2) || (n1 + n2) >= 15 );