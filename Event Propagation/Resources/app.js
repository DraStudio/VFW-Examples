var win = Ti.UI.createWindow({backgroundColor: "white"});

var blueView = Ti.UI.createView({
	backgroundColor: "blue",
	width: 300,
	height: 100,
	top: 100,
	msg: "I'm a Blue View"
});
var blueLabel = Ti.UI.createLabel({
	color: "white",
	text: "Click Me"
});
blueView.add(blueLabel);

var redView = Ti.UI.createView({
	backgroundColor: "red",
	width: 300,
	height: 100,
	bottom: 100,
	msg: "I'm a Red View"
});
var redLabel = Ti.UI.createLabel({
	color: "white",
	text: "Click Me",
	msg: "I'm a White Label"
});
redView.add(redLabel);

win.add(blueView);
win.add(redView);


/* EVENT Method #1
 * This method uses the Javascript keyword of "this".
 * It returns the exact object that was click on, but nothing more.
 */
blueView.addEventListener("click", function(){
	blueLabel.text = this.msg;
});

/* EVENT Method #2
 * This method uses a parameter "e" representing the Event Data.
 * It returns an object containing the event type, source and more.
 * Clicking on the view vs. the label can return different information with this method.
 */
redView.addEventListener("click", function(e){
	redLabel.text = e.source.msg;
});


win.open();
