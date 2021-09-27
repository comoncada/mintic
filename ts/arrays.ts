type Car = {
    brand: string,
    color: string,
};


const hello: string = "Hello";



const car : Car = {
    brand: 'Mazda',
    color: 'Red',
}



function getCarBrand(car: Car, userName: string) {
    userName = 'Jhon';
    console.log(car.brand);
    return userName;
}

const today = new Date('2021-09-24');

const userName = 'Jule';
const otherUserName = getCarBrand ({brand: 'Renault', color: 'Blue'}, userName);
console.log(today.getDate());

// getCarBrand({ brand: 'Renault'});
