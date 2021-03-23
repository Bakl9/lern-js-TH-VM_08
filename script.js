var currentYear = 2018
var carName = 'Ford'
var carYear = 2014
var carAge = currentYear - carYear 

// если в.м меньше 5 лет ...
// если в.м больше или равно 5 лет и меньше или больше 10 лет 
// иначе ошибка 

if (carAge < 5 ) {
    console.log(carName + ' Младше 5 лет')
} else if (carAge => 5 && carAge <= 10) {
    console.log(carAge + ' Машина больше или равно 5 лет и меньше или больше 10 лет ')
} else {
    console.log ('Возраст ' + carName + ' Равняется '+ carAge+ ' годам')
}

let name = ''

if (name) {
    console.log(true)
} else {
    console.log(false)
};

let name = 'Alex'

if (name) {
    console.log(true)
} else {
    console.log(false)
};

0 null undefined '' Nan = false 
