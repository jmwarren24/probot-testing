//jshint esversion:6

// 2 Ways to write functions.  I think the first is deprecated after esversion:5

function print (data) {
    console.log(data);
}

const prnt = (data) => {
    console.log(data);
};

print("test");

prnt("testing");