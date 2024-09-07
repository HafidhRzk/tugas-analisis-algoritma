const distanceAB = 1000;

let aliPosition = 0;
let aliSpeed = 2;
let aliTime = 0;

let baduPosition = 0;
let baduSpeed = 3;
let baduStartTime = 10;
let baduTime = baduStartTime;

while (true) {
    aliPosition += aliSpeed;
    aliSpeed += 0.1;
    aliTime += 1;

    if (baduTime >= baduStartTime) {
        baduPosition += baduSpeed;
    }
    baduTime += 1;

    if (aliPosition + baduPosition >= distanceAB) {
        console.log(`Ali and Badu pass each other at ${aliTime} seconds after 08:00.`);
        console.log("Ali distance from A: " + aliPosition.toFixed(2) + "m");
        console.log("Badu distance from B: " + baduPosition.toFixed(2) + "m");
        break;
    }
}
