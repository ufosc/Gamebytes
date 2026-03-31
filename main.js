const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

ctx.imageSmoothingEnabled = false;

var xpos = 10;
var ypos = 10

function update() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime"
    ctx.fillRect(xpos, ypos, 8, 8)

    requestAnimationFrame(update);
}


//key detection 
window.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
    console.log('Key code:', event.code);
});

var keyDown = function(e){
    if (e.key == "s") {
        ypos += 1;
        update();
    }
    if (e.key == "w") {        
        ypos -= 1;
        update();
    }
    if (e.key == "a") {
        xpos -= 1;
        update();
    }
    if (e.key == "d") {
        xpos += 1;
        update();
    }

};
window.addEventListener('keydown', keyDown);

// window.addEventListener("keypressed", function onEvent(event) {
//   if (event.key == "W") {
//    ypos += 1
//    update();
//   }
//   if (event.key == "S") {
//    ypos -= 1
//    update();
//   }
// });

update();

console.log(document.getElementById("gameCanvas"));