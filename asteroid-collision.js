/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    for (let i = 0; i < asteroids.length; i++) {
        let element = asteroids[i];
        if (element < 0) {
            let j = i - 1;
            while (j > -1 && element !== null) {
                if (asteroids[j] < 0) {
                    break;
                }
                if (asteroids[j] === null) {
                    j--;
                    continue;
                }
                if (element + asteroids[j] < 0) {
                    asteroids[j] = null;
                } else if (element + asteroids[j] === 0) {
                    asteroids[j] = null;
                    element = null;
                } else {
                    element = null;
                }
                j--;
            }
            asteroids[i] = element;
        }
    }
    console.log(asteroids)
    return asteroids.filter(element => element !== null);
};

console.log(asteroidCollision([10, 2, -5, -20, 5, -30]));
