// import * as img from '../MARIO GAME/background.jpg';    -- USING THIS IMAGE TO MAKE PLATFORMS AND SIMILARLY IMPORTING OTHER IMAGES FOR OTHER WORKS 



const canvas = document.querySelector('canvas');

const c = canvas.getContext("2d");
canvas.width = 3000;
canvas.height = 600;
// console.log(img);
const gravity = 2.5;
let position = 100; 

let scrollSet = 0;
// console.log("background img = ",background);

let keys = {
    right : {
        pressed: false
    },
    left : {
        pressed : false
    },
    up: {
        pressed : false
    },
    down: {
        pressed : false
    }
};

// DESIGN PLATFORM  
class Platform{
    constructor({x,y}){
        this.position = {
            x,
            y
        },
        this.width = 200;
        this.height = 20;
        // this.image = image;
    }


    draw() {
        // console.log("platform draw");
        c.fillStyle = 'blue';
        c.fillRect(this.position.x, this.position.y, this.width, this.height);


        // NOW REPLACE PLATFORM FROM BRICS TO IMG 
        // c.drawImage(this.image, this.position.x, this.position.y);
    }
} 

//CREATING PLAYER
class Player{

    //giving default detials of player 
    constructor(){
        this.position = {
            x:100,
            y:200
        }, 
        this.velocity = {
            x: 0, 
            y: 1
        }
        this.width = 50
        this.height = 50
    }

    // draw player on screen 
    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);
        // c.strokeRect(this.position.x, this.position.y)="red";
    }

    // movement player 
    update(){
        this.draw();

       
            this.position.y += this.velocity.y;
       
            this.position.x += this.velocity.x;

       
        
        // adding gravity to player 
        if((this.position.y + this.velocity.y + this.height) <= canvas.height ){
            this.velocity.y += gravity;
        }
        else {
            this.velocity.y = 0;
            // this.velocity.y = -gravity;
        }


        //MOVEMENTS
        if(keys.right.pressed){
            this.velocity.x += 1;
            console.log("velocity = ", this.velocity);
        }
        else if(keys.left.pressed){
            this.velocity.x -= 1;
        }
        else if(keys.up.pressed){
            this.velocity.y -= 5;
        }
        else if(keys.down.pressed){
            this.velocity.y += 1;
        }
    }
}

const player = new Player();
const platform = [new Platform({x: 200 , y: 200}), new Platform({x: 600 , y: 300}), new Platform({x:1000 , y: 250})]


function animate(){
    requestAnimationFrame(animate);
    console.log("animate");
    c.clearRect(0,0,canvas.width , canvas.height);
    player.update();
    platform.forEach((platform)=>{
        platform.draw();
    })


    platform.forEach((platform)=>{
        if((player.position.y + player.height) < platform.position.y && player.position.x > platform.position.x && player.position.x < platform.position.x + platform.width){
            player.velocity.y = 0;
        }
    });

    if(player.position.x > 1500){
        document.getElementById('status').innerHTML = "<h1><style='text-align: center'>VICTORY</h1>";
    }

}

animate();



// player movements 
window.addEventListener('keydown', ({key})=>{
    switch(key){
        case 'a':
            console.log('left click');
            // player.velocity.x -= 10;
            keys.left.pressed = true;
            console.log(keys);
            console.log("left key = ",keys.left.pressed)
            break; 
        case 's':
            console.log('down');
            // player.velocity.y += 30;
            keys.down.pressed = true;
            console.log(keys);
            console.log("down key = ",keys.down.pressed)
            break;
        case 'd':
            console.log('right side');
            // player.velocity.x += 10;
            keys.right.pressed = true;
            console.log(keys);
            console.log("right key = ",keys.right.pressed)
            break;
        case 'w':
            console.log('up side ', keys);
            // player.velocity.y -= 30;
            keys.up.pressed = true;
            console.log(keys);   
            console.log("up key = ",keys.up.pressed , " and  ", keys);         
            break;
    }

});

window.addEventListener('keyup', ({key})=>{
    switch(key){
        case 'a':
            console.log('left click keyup');
            // player.velocity.x  = 0;
            keys.left.pressed = false;
            break; 
        case 's':
            console.log('down released');
            keys.down.pressed = false;
            break;
        case 'd':
            console.log('right side released');
            // player.velocity.x = 0;
            keys.right.pressed = false;
            break;
        case 'w':
            console.log('top side released');
            keys.up.pressed = false;
            break;
    }

});






var x = document.getElementById("demo");
// console.log("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}




//WEB WORKER  
const worker = new Worker();
worker.onmessage = function sum(){
    console.log("web worker result: " + message);
}


var alertbtn = document.getElementById("alertbtn");

function alert(){
    var alertbox = document.getElementById("hide");
    var loader = document.getElementById("loading");
    console.log("alert");
    alertbox.style.display = "block";
    if(alertbox.style.display == "none"){
        loader.style.display = "block";
    }
    else{
        loader.style.display = "none";
    }
};

var progress= document.getElementById("progressbar");
var pb1 = document.getElementById("pb1");
var pb2 = document.getElementById("pb2");
var pb3 = document.getElementById("pb3");

pb1.style.width = "50%";

var per1 = 50;