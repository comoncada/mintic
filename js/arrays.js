const hello = "Hello";
const car = {
    brand: 'Mazda',
    color: 'Red',
};
function getCarBrand(car, userName) {
    userName = 'Jhon';
    console.log(car.brand);
    return userName;
}
const today = new Date('2021-09-24');
const userName = 'Jule';
const otherUserName = getCarBrand({ brand: 'Renault', color: 'Blue' }, userName);
console.log(today.getDate());
// getCarBrand({ brand: 'Renault'});
