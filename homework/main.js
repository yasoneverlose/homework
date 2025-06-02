function firstName(firstName) {
    return 'Hello ' + 'Max'

}

const result = firstName()
console.log(result)





const numbers = [3, 12, 8, 11, 7, 13, 3, 19, 10, 40];{

    for (let i = 0; i < numbers.length; i++)  {
        if (numbers[i] > 10) {
            console.log(numbers[i]);  
        }
    }
}





function calcNambers(num2, num3, operator) {
    switch (operator) {
        case 'minus':
        case '-':
            return num2 - num3;

        case 'plus':
        case '+':
            return num2 + num3;

        case 'multiplication':
        case '*':
            return num2 * num3;

        case 'division':
        case '/':
            return num2 / num3;
    }
}
console.log(calcNambers(2, 3, 'minus'));
console.log(calcNambers(2, 3, 'plus'));
console.log(calcNambers(2, 3, 'multiplication'));
console.log(calcNambers(2, 3, 'division'));



const  user = {
    name: 'William',
    age: 35,
    profession: 'web developer',
    sayHello(name){
        return( `Hello  ${name}`)
    }
}

console.log( `Hello  ${'William'}`)


const users = [
    {
        name: 'max',
        age: 23,
        isAdmin: false
    },
    {
        name: 'oliver',
        age: 35,
        isAdmin: true
    },
    {
        name: 'jack',
        age: 40,
        isAdmin: true,
    }
]

users.push ({
    name: 'charlie',
    age: 31,
    isAdmin: false
})


let checkUsersCount = 1
for(let i = 0; i < users.length; i++) {
    if(users[i].isAdmin == true)
    console.log(users[i])
    console.log(`users ${checkUsersCount}`)
}