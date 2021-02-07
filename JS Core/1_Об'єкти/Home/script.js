/*
// task 1
let person = {};
person.firstName = 'Ivan';
person.secondName = 'Ivanov';
person.showDate = function showDate(){
    console.log(this.firstName, this.secondName);
}
let newPerson = Object.assign({}, person, {firstName: 'Petro', secondName: 'Petriv'});
person.showDate();
newPerson.showDate();
*/

// task 2
/*let n1 = +prompt("Введіть перше число")
let n2 = +prompt("Введіть друге число")

function MyMath(mA = n1, mB = n2) {
    this.a = mA;
    this.b = mB;
    this.sum = () => console.log(this.a + this.b);
    this.multiplication = () => console.log(this.a * this.b);
    this.division = () => {
        if (this.b === 0) {
            console.error("Помилка! Ділити на ноль не можна!!")
        } else {
            console.log(this.a / this.b);
        }
    }
    this.subtraction = () => console.log(this.a - this.b);
}

let test = new MyMath();
test.sum();
test.multiplication();
test.division();
test.subtraction();*/


