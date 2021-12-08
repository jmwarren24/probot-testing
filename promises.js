
let fruits = ["Apple", "Banana", "Orange"];

const getFruits = () => {
    setTimeout(() => {
        fruits.forEach(data => {
            console.log(data);
        });
    }, 1000);
};

const postFruits = (fruit) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            fruits.push(fruit);
            let err = false;
            if(!err) {
                resolve();
            }
            else {
                reject("Something went wrong");
            }
        }, 2000);
    });
};

postFruits("Kiwi").then(getFruits).catch(err => {
    console.log(err);
});