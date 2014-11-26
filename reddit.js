var reddit = require("./data.json")
//console.log(reddit["data"]);

var rData = reddit.data.children;

// Write your solutions below

//console.log(reddit.data.children[0].data.title);
//data.children.data.title

//ASSIGNMENT #1:
//==============
// rData.forEach(function(element, indexInArray) {	
// 	console.log("Title is: ", element.data.title);	
// })

//ASSIGNMENT #2:
//==============
// var linkMap = rData.map(function (element, index) {
// 	return ('http://www.reddit.com' + element.data.permalink) ;
// })
// console.log(linkMap);


//ASSIGNMENT #3: 
//==============
// var selfKey = rData.filter(function (element) {
// 	return element.data.selftext;
// }) 
// console.log(rData.length)
// console.log(selfKey.length);

//ASSIGNMENT #4:
//==============
var scoreCount = rData.reduce(function (prev, current) {
	return (prev + current.data.score); 
},0); 
console.log(scoreCount);

