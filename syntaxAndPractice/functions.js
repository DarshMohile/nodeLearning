console.log("The server file is running");


//Types to write a function


//the normal way
function add(a, b)
{
    return a+b;
}
var ans = add(1,2)
console.log("Normal func: " + ans);


//combined with variable declaration
var ans1 = function (a,b)
{
    return a+b;
}
console.log("combined func: " + ans1(2,2));


//shorthand
var ans2 = (a,b) => {return a+b;}
console.log("Shorthand func: " + ans2(4,5));


//MORE shorthand
var ans3 = (a,b) => a+b;
console.log("Shorthand func: " + ans3(6,7));


//auto-Running functions which run without calling
(function()
{
    console.log("This funtion is running without any function calls!!");
})();


//callback functions
function callback()
{
    console.log("This function is being called from another function");
}

const addition = function(a, b, callback)
{
    var result = a+b;
    console.log("Result is: " + result);
    console.log("Calling a callback function...");
    callback();
}

addition(3, 4, callback);


//Writing function inside a parameter
addition(1, 2, function()
{
    console.log("This function is written inside parameters.");
});


//shorthand
addition(2, 3, () => console.log("This is a shorthand callback function"));