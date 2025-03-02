//Converting a JSON data to an object
const json = '{"Name": "Darsh", "age": "20", "bird": "Duck"}';

//convert into object
var obj = JSON.parse(json);
console.log(obj);

//Individual fields can also be printed
console.log('name is: ' + obj.Name);
console.log('Age is: ' + obj.age);
console.log('Bird is a/an: ' + obj.Bird);

//Converting Objects into JSON data
const obj2 = {
    name: "Darsh",
    age: 20
};

//convert into JSON
var json2 = JSON.stringify(obj2);
console.log('Converted JSON is: ' + json2);