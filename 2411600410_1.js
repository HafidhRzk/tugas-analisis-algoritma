function findOvertakeTime() {
    let distanceAli = 0;
    let distanceBadu = 0;
    let time = 0;

    let speedAli = 2;
    const speedBadu = 3;


    while (distanceBadu <= distanceAli) {
        if (time % 10 === 0 && time !== 0) {
            speedAli += 0.1;
        }

        distanceAli += speedAli;
        if (time >= 60) {
            distanceBadu += speedBadu;
        }

        console.log(`Time: ${time}s, Ali's distance: ${distanceAli.toFixed(2)}m, Badu's distance: ${distanceBadu.toFixed(2)}m`);

        time++;

        if (distanceBadu > distanceAli) {
            break;
        }

        if (distanceAli >= 1000 || distanceBadu >= 1000) {
            break;
        }
    }

    const hours = Math.floor(time / 3600) + 8;
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (distanceAli > distanceBadu) {
        console.log("Ali finish to point B before Badu Overtake")
    }

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

console.log(findOvertakeTime());
