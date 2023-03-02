function roadRadar(drivingSpeed, areaType) {

    let speedLimit = 0;

    switch (areaType) {

        case "motorway":
            speedLimit = 130;
            break;
        case "interstate":
            speedLimit = 90;
            break;
        case "city":
            speedLimit = 50;
            break;
        case "residential":
            speedLimit = 20;
            break;
    }

    let speedDifference = speedLimit - drivingSpeed;

    if (speedDifference >= 0) {
        console.log(`Driving ${drivingSpeed} km/h in a ${speedLimit} zone`);
    } else if (Math.abs(speedDifference) <= 20) {
        console.log(`The speed is ${Math.abs(speedDifference)} km/h faster than the allowed speed of ${speedLimit} - speeding`);
    } else if (Math.abs(speedDifference) <= 40) {
        console.log(`The speed is ${Math.abs(speedDifference)} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
    } else {
        console.log(`The speed is ${Math.abs(speedDifference)} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
    }
}

roadRadar(40, 'city');