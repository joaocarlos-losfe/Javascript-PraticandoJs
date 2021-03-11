function fizzbuss(value)
{
    let div3 = value % 3;
    let div5 = value % 5;

    if(typeof value !== 'number')
        return "não é um numero";
   
    if(div3 == 0 && div5 == 0)
        return "fizzBuss"
    else if (div3 == 0)
        return "fizz"
    else if (div5 == 0)
        return "Buss"
    else
        return value;
}

let fiz_or_buss_fizzbuzz = fizzbuss(15);

console.log(fiz_or_buss_fizzbuzz);

