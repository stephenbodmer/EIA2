//Aufgabe:    03 Canvas: Skipiste mit Animation
//Name:       Stephen Bodmer
//Matrikel:   256218
//Datum:      27.10.2017
//Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
//Er wurde nicht kopiert und auch nicht diktiert.
var aufgabe3;
(function(aufgabe3) {
	window.addEventListener("load", skipiste);
	let ski;
	let arrayX = [];
	let arrayY = [];
	let sunX = [];
	let sunY = [];
	let skiX = [];
	let skiY = [];
	let wolkeX = [];
	let wolkeY = [];
	let image;
	function skipiste() {
		let canvas = document.getElementsByTagName("canvas")[0];
		console.log(canvas);
		ski = canvas.getContext("2d");
		console.log(ski);
		// Himmel
		ski.fillStyle = "#81DAF5";
		ski.fillRect(0, 0, 800, 600);
		// Sonne
		// ski.beginPath();
		// ski.strokeStyle = "yellow";
		// ski.arc(700, 100, 50, 0, 2 * Math.PI);
		// ski.stroke();
		// ski.fillStyle = "yellow";
		// ski.fill();
		// Berg 1
		ski.beginPath();
		ski.moveTo(200, 150);
		ski.lineTo(500, 600);
		ski.lineTo(-100, 800);
		ski.closePath();
		ski.strokeStyle = "grey";
		ski.stroke();
		ski.fillStyle = "grey";
		ski.fill();
		// Piste hinten
		ski.beginPath();
		ski.strokeStyle = "lightgrey";
		ski.arc(650, 1370, 1000, 0, 2 * Math.PI);
		ski.stroke();
		ski.fillStyle = "white";
		ski.fill();
		// Berg vorne
		ski.beginPath();
		ski.moveTo(80, 200);
		ski.lineTo(300, 600);
		ski.lineTo(-100, 600);
		ski.closePath();
		ski.strokeStyle = "lightgrey";
		ski.stroke();
		ski.fillStyle = "lightgrey";
		ski.fill();
		// Piste vorne
		ski.beginPath();
		ski.strokeStyle = "lightgrey";
		ski.arc(300, 1750, 1300, 0, 2 * Math.PI);
		ski.stroke();
		ski.fillStyle = "white";
		ski.fill();
		// Wolke
//		ski.beginPath();
//		ski.arc(100, 75, 25, 0, 2 * Math.PI);
//		ski.arc(110, 50, 30, 0, 2 * Math.PI);
//		ski.arc(125, 50, 30, 0, 2 * Math.PI);
//		ski.arc(130, 70, 40, 0, 2 * Math.PI);
//		ski.arc(175, 70, 40, 0, 2 * Math.PI);
//		ski.arc(200, 70, 30, 0, 2 * Math.PI);
//		ski.strokeStyle = "darkgrey";
//		ski.stroke();
//		ski.fillStyle = "white";
//		ski.fill();
		// Seilbahn
		// Pfosten links
		ski.beginPath();
		ski.moveTo(245, 190);
		ski.lineTo(245, 230);
		ski.closePath();
		ski.strokeStyle = "black";
		ski.stroke();
		// Pfosten rechts
		ski.beginPath();
		ski.moveTo(750, 350);
		ski.lineTo(750, 400);
		ski.closePath();
		ski.strokeStyle = "black";
		ski.stroke();
		// Seil
		ski.beginPath();
		ski.moveTo(245, 190);
		ski.lineTo(750, 350);
		ski.closePath();
		ski.strokeStyle = "black";
		ski.stroke();

		// Schleifen
		
		// Bäume
		for (var i = 0; i < 40; i++) {
			drawTree(Math.floor(Math.random() * 550 + 50), Math.floor(Math
					.random() * 100 + 480), ski);
			drawTree();
		}
		
		// Wolke
		for (let i = 0; i < 2; i++) {
			wolkeX[i] = 10;
			wolkeY[i] = 100;
		}

		// Sonne
		for (let i = 0; i < 1; i++) {
			sunX[i] = 10;
			sunY[i] = 10;
		}

		// Schnee
		for (let i = 0; i < 500; i++) {
			arrayX[i] = 0 + Math.random() * 800;
			arrayY[i] = 0 + Math.random() * 600;
		}

		// Skifahrer
		for (let i = 0; i < 1; i++) {
			skiX[i] = 100 + Math.random() * 400;
			skiY[i] = 100 + Math.random() * 700;
		}

		image = ski.getImageData(0, 0, 800, 600);
		animate();
	}

	// Funktionen

	function drawTree(x, y) {
		ski.fillStyle = "brown";
		ski.fillRect(x, y, 8, 10);
		ski.beginPath();
		ski.moveTo(x - 10, y);
		ski.lineTo(x + 15, y);
		ski.lineTo(x + 4, y - 50);
		ski.lineTo(x - 8, y);
		ski.fillStyle = "green";
		ski.fill();
		ski.closePath();
	}
	
	function createSnow(x, y) {
		ski.beginPath();
		ski.arc(x, y, 2, 0 * Math.PI, 2.0 * Math.PI);
		ski.strokeStyle = "lightgrey";
		ski.stroke();
		ski.fillStyle = "white";
		ski.fill();
		ski.closePath();
	}
	
	function createWolke(x, y) {
		ski.beginPath();
		ski.arc(x, y, 25, 0, 2 * Math.PI);
//		ski.arc(x+10, y, 30, 0, 2 * Math.PI);
//		ski.arc(x+15, y+10, 30, 0, 2 * Math.PI);
//		ski.arc(x+15, y+20, 40, 0, 2 * Math.PI);
//		ski.arc(x+45, y+20, 40, 0, 2 * Math.PI);
//		ski.arc(x+25, y+20, 30, 0, 2 * Math.PI);
		ski.strokeStyle = "darkgrey";
		ski.stroke();
		ski.fillStyle = "white";
		ski.fill();
	}

	function drawSun(x, y) {
		ski.beginPath();
		ski.strokeStyle = "yellow";
		ski.arc(x, y, 50, 0, 2 * Math.PI);
		ski.stroke();
		ski.fillStyle = "yellow";
		ski.fill();
	}

	function drawSkifahrer(x, y) {
		ski.beginPath();
		ski.fillStyle = "#070B19";
		ski.fillRect(x, y, 5, -40);
		ski.beginPath();
		ski.arc(x + 3, y - 50, 10, 0, 10 * Math.PI);
		ski.fillStyle = "#070B19";
		ski.fill();
		ski.stroke();
		ski.moveTo(x + 20, y - 10);
		ski.lineTo(x - 20, y + 10);
		ski.fill;
		ski.stroke();
	}

	// Animation

	function animate() {
		console.log("Timeout");
		ski.clearRect(0, 0, 800, 600);
		ski.putImageData(image, 0, 0);
		
//		for (let i = 0; i < wolkeX.length; i++) {
//            if (wolkeX[i] > 800) {
//                wolkeX[i] = 20;
//            }
//            wolkeX[i] += 1;
//            wolkeY[i] += 0;
//            createWolke(wolkeX[i], wolkeY[i]);

		for (let i = 0; i < sunX.length; i++) {
			if (sunY[i] > 800) {
				sunY[i] = 0;
			}
			sunY[i] += 0.5;
			sunX[i] += 2; 
			drawSun(sunX[i], sunY[i]);
		}

		for (let i = 0; i < arrayX.length; i++) {
			if (arrayY[i] > 600) {
				arrayY[i] = 0;
			}
			arrayY[i] += Math.random();
			createSnow(arrayX[i], arrayY[i]);
		}

		for (let i = 0; i < skiX.length; i++) {
			skiX[i] -= 2;
			skiY[i] += 3;
			drawSkifahrer(skiX[i], skiY[i]);
			if (skiY[i] > 600) {
				skiY[i] = 400;
				skiX[i] = 700;
			}
		}

		window.setTimeout(animate, 1);
	}
})(aufgabe3 || (aufgabe3 = {}));
// # sourceMappingURL=hallo.js.map
