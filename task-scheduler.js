/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    const cooldown = Array(26).fill(0);
    const queue = [];
    let last = null;
    tasks.sort();
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        if (task !== last) {
            queue.push({
                code: task.charCodeAt(0) - 65,
                tasks: 0,
            });
            // map[task] = 0;
        }
        queue[queue.length - 1].tasks++;
        last = task;
    }
    queue.sort((a, b) => b.tasks - a.tasks);
    console.log(queue);
    let tick = 0;
    let count = tasks.length;
    while (count > 0) {
        for (let i = 0; i < queue.length; i++) {
            if (cooldown[queue[i].code] === 0 && queue[i].tasks > 0) {
                queue[i].tasks--;
                count--;
                cooldown[queue[i].code] = n + 1;
                break;
            }
        }
        for (let i = 0; i < cooldown.length; i++) {
            if (cooldown[i] > 0) {
                cooldown[i]--;
            }
        }
        queue.sort((a, b) => b.tasks - a.tasks);
        tick++;
    }
    console.log(tick);
    return tick;
};

console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2));
