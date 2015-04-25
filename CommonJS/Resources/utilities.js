//BUTTON
var btnView = Ti.UI.createView({
	backgroundColor: "blue",
	width: 200,
	height: 50,
});
var btnLabel = Ti.UI.createLabel({
	color: "white",
	text: "Random Number"
});
btnView.add(btnLabel);


//RANDOM NUMBER GENERATOR
var getRandom = function(){
	var num = Math.random() * 100;
	return num;
};


exports.button = btnView;
exports.getRandom = getRandom;