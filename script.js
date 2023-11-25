//your JS code here. If required.
function rotateLine(){
    let unDiv = document.createElement("div");
    unDiv.id = "line";
	 unDiv.style.backgroundColor = "black";
	 unDiv.style.width = "200px";
     unDiv.style.height = "2px";
     unDiv.style.position = "absolute";
	 unDiv.style.top = "50%";
	 unDiv.style.left = "50%";
	unDiv.style.transformOrigin = "0% 50%";
	unDiv.style.animation = "rotateLine 2s linear infinite";
	document.body.appendChild(unDiv);

	let styleSheet = document.styleSheets[0];
	styleSheet.insertRule(  '@keyframes rotateLine {\
						  0%{\
		                       transform : rotate(0deg);\
						  }\
                          100%{\
                               transform : rotate(360deg);\
						  }\
						  }', styleSheet.cssRules.length);
}
rotateLine();