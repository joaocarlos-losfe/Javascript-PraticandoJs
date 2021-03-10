console.clear();

function maior_e_menor_elemento(array)
{
    let maior = array[0];
    let menor = array[0];

    console.log("array repassado: " + array);

    for (i=0; i<array.length; i++)
    {
        if(array[i] > maior)
            maior = array[i];

        if(array[i] < menor)
            menor = array[i];
    }

    let menor_e_maior = [menor, maior];

    return menor_e_maior;
}

let arr = [1,3,0,2,10,-14,-1,6,5,19,7,8];

arr.length

let maior_e_menor = maior_e_menor_elemento(arr);

console.log("menor e maior elemento respectivamente: " + maior_e_menor);