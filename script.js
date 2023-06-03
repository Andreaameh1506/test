//data types
//values
//variables
//let , const and var
//logical, assignment, equality and comparison operators
//basic mathematical operation
//type coersion and conversion
//string and templates literal
//truthy and falsy values


//DATATYPES==> This simply means types of data
//they are divided into 2  
//= primitive data Types
// 1. string
// 2. number: integer and floating numbers
// 3. boolean
// 4. undefined
// 5. null
// 6. bigint
// 7. symbol
//= complex
// 1. array
// 2. object
// 3. function

//VARIABLE ==> Variables are containers for storing datas
/*
Rules to declare variables in javascxript
  1. variables names are case sensitive
  2. variable names can only be started with an underscore or letter or dollar symbol
  3. numbers can only be used after a letter
  4. no other special character is allowed
*/
//const myName = "Andre"
//console.log(myName)
//let age = '45'
//let myFavColor = "Blue"
//myFavColor = "Red"
//console.log(myFavColor, myName, age)


//basic mathematical operation
let x = 5;
let y = 6;
//increase by 1 or decrease by 1
x = x + 1
y = y + 1
x = x - 1
y = y - 1
x++
y++
y--
x--
//increase by more than 1
x = x + 2
y = y + 3
x += 2
y += 3
x -= 2
y -= 3

//console.log(x , y)


//comp[arison or equality operator
// >, <, >=, <=, == , ===, !=, !==

//console.log(3 >= 2)

//console.log(4 == '4')
//console.log(4 != '4')
//console.log(4 === '4')
//console.log(4 !== '4')

//Truthy and falsy Values




//logical operators

// ! == NOT
// && == AND
// || == OR


//string to number
//console.log(Number('8') + 6)
//console.log( +'8' + 6)
//number to string
//console.log(String(10))
//console.log((10).toString())

/*
const myName = 'Andrew';
const myFavColor = "Red";
const age = 20;

//let txt = "My name is " + myName + ", my favourite colour is " + myFavColor + " and i am " + age + " years old"


txt = `My name is ${myName}, my favourite colour is ${myFavColor}, and i am ${age} years old`;
console.log(txt)




console.log()
*/


//conditional statements if /else
/*
let age = 16;
if (age >= 18) {
    console.log('You are an adult');
} else {
    console.log(`you have ${18-age} years left to be an adult`)
}
*/

/*
let age = prompt("Enter your age");
if (age >= 18) {
    alert('You are an adult');
} else {
    alert(`you have ${18-age} years left to be an adult`)
}
*/

//Nested if /else statement
/*
const school = prompt("which tech school did you attend");
if (school.toLowerCase() === 'codar') {
    const yourClass = prompt("Enter your class: weekdays / weekends");
    if (yourClass.toLowerCase() === 'weekend') {
        const yourClass = prompt("Who is your instructor? e.g. Matthew");
        if (instructor.toLowerCase() === 'Joshua') {

            alert('weekday students are not qualified')


        } else {
            alert('Come on saturday for your gift');
        }

    } else {
        alert('You dont have access')

    }

}
else {
    alert('you are not qualified')
}
*/

//A1 100 - 85, B2 84 - 75, B3 74 - 65, C4 64 - 60, C5 59 - 55, C6 54 - 50, D7 49 - 45 E8 44 - 40, F9 39 - 0
/*const score = +prompt("Enter your score", "e.g. 50");
if (score <= 100 && score >= 85) {
    alert("Your grade is A1")
} else if (score <= 84 && score >= 75) {
    alert("Your grade is B2")
} else if (score <= 74 && score >= 65) {
    alert("Your grade is B3")
} else if (score <= 64 && score >= 60) {
    alert("Your grade is C4")
} else if (score <= 59 && score >= 55) {
    alert("Your grade is C5")
} else if (score <= 54 && score >= 50) {
    alert("Your grade is C6")
} else if (score <= 49 && score >= 45) {
    alert("Your grade is D7 ")
} else if (score <= 44 && score >= 40) {
    alert("Your grade is E8 ")
} else if (score <= 39 && score >= 0) {
    alert("Your grade is F9")
} else {
    alert("score must be between 0 - 100")
}
*/

const dial = prompt("Enter your ussd code");
if (dial === "*131#") {
    const Select = +prompt(
        `select your plan:
        1. Daily
        2. weekly
        3. monthly
        `,
        1
    );
    if (Select === 1) {
        const Select = +prompt(
            `select your most preffered daily data bundle:
            1. 100Naira for 50MB
            2. 300Naira for 1GB
            3. 500Naira for 2GB
            `,
            1
        );
        if (Select === 1) {
            alert("Your subscription for 50MB is successful");
        } else if (Select === 2) {
            alert("Your subscription for 1GB is successful");
        } else if (Select === 3) {
            alert("Your subscription for 2GB is successful");
        } else {
            alert("Wrong Entry")
        }
    } else if (Select === 2) {
        const Select = +prompt(
            `select your most preffered weekly subscription bundle:
            1. 250Naira for 1GB
            2. 500Naira for 2GB
            3. 100Naira for 3GB
            `,
            1
        );

        if (Select === 1) {
            alert("Your subscription for 1GB is successful");
        } else if (Select === 2) {
            alert("Your subscription for 2GB is successful");
        } else if (Select === 3) {
            alert("Your subscription for 3GB is successful");
        } else {
            alert("Wrong Entry")
        }

    } else if (Select === 3) {
        const select = +prompt(
            `select your most preffered monthly subscription bundle:
            1. 1000Naira for 2.5GB
            2. 2000Naira for 4GB
            3. 3000Naira for 6GB
            `,
            1
        );
        if (Select === 1) {
            alert("Your subscription for 2.5GB is successful");
        } else if (Select === 2) {
            alert("Your subscription for 4GB is successful");
        } else if (Select === 3) {
            alert("Your subscription for 6GB is successful");
        } else {
            alert("Not in your plan")
        }
    }
} else {
    alert("Invalid code")
}