var win = Ti.UI.createWindow({
	backgroundColor: "white"
});
var readout = Ti.UI.createLabel({
	top: 200
});
win.add(readout);


/* REQUIRE Method #1
 * Using require like this only executes code.
 * The variables in this "layout" JS file are not directly accessible.
 */
require("layout");


/* REQUIRE Method #2
 * Using require like this provides access to the contents of the "utilities" JS file.
 * However, only the exported variables are accessible.
 */
var utilities = require("utilities");
win.add(utilities.button);
utilities.button.addEventListener("singletap", function(){
	readout.text = utilities.getRandom();
});

win.open();
