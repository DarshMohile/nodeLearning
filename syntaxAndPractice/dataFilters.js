//Data and content filtering using "LoadAsh" library
var _ = require('lodash');

//using array with redundancy as sample data
var data = ['darsh', 'darsh', 8, 2, 8, 8, 2];
console.log('Unfiltered data is: ' + data);

//Filtering array and removing redundancies, storing filtered resunt in a var
var filter = _.uniq(data);

//Printing filtered data in console
console.log('Filtered data: ' + filter);

//Check if something is string or not
var sample = 'darsh';
var sample2 = 9;
console.log(_.isString(sample));
console.log(_.isString(sample2));