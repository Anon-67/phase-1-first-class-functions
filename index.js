



function receivesAFunction(callback) {
    callback();
}
function test() {
    return "test";
}

function returnsANamedFunction() {
    return test;
}


function returnsAnAnonymousFunction() {
    return function () {
        console.log("im just here so i dont get fined");
    }
};

