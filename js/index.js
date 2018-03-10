function update() {

	clear();

	if (document.getElementById("sel1").value === "lassonde") {
		document.getElementById("search").style.backgroundImage = "url(img/lasb.jpg)";
		var element = document.getElementById("rooms");
		var b = document.createElement("div");
		element.appendChild(b);
		var x = document.createElement("h1");
		var btn = document.createElement("BUTTON");
		btn.style.backgroundColor = "inherit";
		var mydiv = document.createElement("div");
		mydiv.setAttribute("id", "101");
		mydiv.style.display = "none";

		var img = document.createElement("IMG");

		img.src = 'img/LASB 01.png';
		mydiv.appendChild(img);
		btn.setAttribute("onclick", "c1()");
		var t = document.createTextNode("Room 101");
		btn.appendChild(t);
		x.appendChild(btn);
		b.appendChild(x);
		b.appendChild(mydiv);


		var y = document.createElement("span");
		var r = document.createTextNode("Available: 2:30-3:30");
		var n = document.createElement("br");
		y.appendChild(r);
		b.appendChild(y);
		b.style.borderStyle = "solid";
		var c = document.createElement("div");
		element.appendChild(c);
		//element.style.margin = "10%";
		var z = document.createElement("h1");
		var u = document.createTextNode("Room 102");


		var btn2 = document.createElement("BUTTON");
		btn2.style.backgroundColor = "inherit";
		var mydiv2 = document.createElement("div");
		mydiv2.setAttribute("id","c2");
		mydiv2.style.display = "none";
		var img2 = document.createElement("IMG");

		img2.src = 'img/class3.png';
		mydiv2.appendChild(img2);
		btn2.setAttribute("onclick", "c2()");

		btn2.appendChild(u);
		z.appendChild(btn2);
		c.appendChild(z);
		c.appendChild(mydiv2);


		var y = document.createElement("span");
		var r = document.createTextNode("Available: 3:00-4:30");
		y.appendChild(r);
		c.appendChild(y);
		c.style.borderStyle = "solid";
		var header = document.getElementsByTagName("h1");
		header.className = "bg-primary";
		document.getElementsByTagName("span").className = "bg-primary";
		element.style.textAlign = "center";
		element.style.borderRadius = "2px";
		// element.style.backgroundColor = "#428bca";
	} else if (document.getElementById("sel1").value === "vari") {
		document.getElementById("search").style.backgroundImage = "url(img/vari.jpg)";
		var x = document.createElement("h1");
		var t = document.createTextNode("Room 103");
		var b3 = document.createElement("div");
		var element = document.getElementById("rooms");


		var btn3 = document.createElement("BUTTON");
		btn3.style.backgroundColor = "inherit";
		var mydiv3 = document.createElement("div");
		mydiv3.setAttribute("id","c3");
		mydiv3.style.display = "none";
		var img3 = document.createElement("IMG");

		img3.src = 'img/class3.png';
		mydiv3.appendChild(img3);
		btn3.setAttribute("onclick", "c3()");

		btn3.appendChild(t);
		x.appendChild(btn3);
		b3.appendChild(x);
		b3.appendChild(mydiv3);
		element.appendChild(b3);

		var y = document.createElement("h2");
		var r = document.createTextNode("Available: 8:30-11:30");
		y.appendChild(r);
		b3.appendChild(y);
		// element.style.backgroundColor = "#428bca";
		element.style.borderStyle = "solid";
		element.style.textAlign = "center";
	} else if (document.getElementById("sel1").value === "clh") {
		document.getElementById("search").style.backgroundImage = "url(img/clh2.jpg)";

		var x = document.createElement("h1");
		var t = document.createTextNode("Room 105");
		var b4 = document.createElement("div");
		var element = document.getElementById("rooms");


		var btn4 = document.createElement("BUTTON");
		btn4.style.backgroundColor = "inherit";
		var mydiv4 = document.createElement("div");
		mydiv4.setAttribute("id","105");
		mydiv4.style.display = "none";
		var img4 = document.createElement("IMG");

		img4.src = 'img/LASB 01.png';
		mydiv4.appendChild(img4);
		btn4.setAttribute("onclick", "c4()");

		btn4.appendChild(t);
		x.appendChild(btn4);
		b4.appendChild(x);
		b4.appendChild(mydiv4);
		element.appendChild(b4);
		var y = document.createElement("span");
		var r = document.createTextNode("Available: 8:30-11:30");
		var n = document.createElement("br");
		y.appendChild(r);
		b4.appendChild(y);
		b4.style.borderStyle = "solid";

		//d.style.borderStyle = "solid";
		element.style.textAlign = "center";
		// d.style.backgroundColor = "#428bca";
	}

	document.body.style.backgroundImage = document.getElementById("sel1").value;
}





function c4() {
	var div = document.getElementById("105");
    if (div.style.display === "none") {

        div.style.display = "block";
    } else {

        div.style.display = "none";
    }
}


function c3() {
	var div = document.getElementById("c3");
    if (div.style.display === "none") {

        div.style.display = "block";
    } else {

        div.style.display = "none";
    }
}

function c2() {
	var div = document.getElementById("c2");
    if (div.style.display === "none") {

        div.style.display = "block";
    } else {

        div.style.display = "none";
    }
}


function c1() {
	var div = document.getElementById("101");
    if (div.style.display === "none") {

        div.style.display = "block";
    } else {

        div.style.display = "none";
    }

}


function clear(){
	var element = document.getElementById("rooms");
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

if (!jQuery) {
    console.log('jquery.popupoverlay - jQuery not defined.');
}
require('./jquery.popupoverlay');


// if (!jQuery) {
//     console.log('jquery.popupoverlay - jQuery not defined.');
// }
// require('./jquery.popupoverlay');
