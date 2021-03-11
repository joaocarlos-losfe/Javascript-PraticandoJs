function createPerson(firstName, lastName, addres, numeros, smartphones) 
{
    return {
        firstName: firstName,
        lastName: lastName,
        addres: addres,
        numeros_da_sorte: numeros,
        smartphones: smartphones,
        getFullName() 
        {
            return firstName + ' ' + lastName;
        }
    }
}

let pessoa = createPerson("joão carlos", "sousa fé", 
{pais: "Brasil", city: "Dom Expedito"}, 
[2,5,9,23,24,100], 
[{asus: ["zenfone 3", "zenfone l1"]}, {motorola: ["moto g1", "moto g2", "moto g3"]}]);

console.log(pessoa);
console.log(pessoa.getFullName());
console.log(pessoa.firstName);
console.log(pessoa.numeros_da_sorte);
console.log(pessoa.smartphones);