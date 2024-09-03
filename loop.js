// Loop through an object and print the key-value-pairs with their types

let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};

// for(const key in myObject){
//     if(myObject.hasOwnProperty(key)){
//         const value = myObject[key];
//         console.log(`${key} : ${value} Type: ${typeof value}`);
//     }
// }

Object.entries(myObject).forEach(([key, value]) => {
    console.log(`${key}: ${value} | Type: ${typeof value}`);
}); // solved.