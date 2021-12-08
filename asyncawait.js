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
                resolve();  //Go ahead and run the '.then' part of the command
            }
            else {
                reject("Something went wrong"); //print err if something goes wrong with the appending to the fruits list.
            }
        }, 2000);
    });
};

const init = async() => {
    try{
        await postFruits("Kiwi");
        getFruits();
    } catch(err) {
        console.log(err);
    }
};

init();