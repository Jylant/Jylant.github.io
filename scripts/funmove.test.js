// Test case 1: Object hits left wall
let x = 0;
let y = 100;
let vx = -5;
let vy = 5;
let object = { offsetWidth: 50, offsetHeight: 50, style: { left: x + "px", top: y + "px" } };
update();
console.assert(vx === 5, "Test case 1 failed");

// Test case 2: Object hits right wall
x = window.innerWidth - 50;
y = 100;
vx = 5;
vy = 5;
object = { offsetWidth: 50, offsetHeight: 50, style: { left: x + "px", top: y + "px" } };
update();
console.assert(vx === -5, "Test case 2 failed");

// Test case 3: Object hits top wall
x = 100;
y = 0;
vx = 5;
vy = -5;
object = { offsetWidth: 50, offsetHeight: 50, style: { left: x + "px", top: y + "px" } };
update();
console.assert(vy === 5, "Test case 3 failed");

// Test case 4: Object hits bottom wall
x = 100;
y = window.innerHeight - 50;
vx = 5;
vy = 5;
object = { offsetWidth: 50, offsetHeight: 50, style: { left: x + "px", top: y + "px" } };
update();
console.assert(vy === -5, "Test case 4 failed");

// Test case 5: Object hits diagonal
x = 100;
y = slope * x + 10;
vx = 5;
vy = 5;
object = { offsetWidth: 50, offsetHeight: 50, style: { left: x + "px", top: y + "px" } };
update();
console.assert(vy === -5, "Test case 5 failed");