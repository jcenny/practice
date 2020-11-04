/*
 * Complete the 'maximumContainers' function below.
 *
 * The function accepts STRING_ARRAY scenarios as parameter.
 */
/*
I: array of strings 
O: none => print integers
C: none
E: none

6 2 2

containers: 3
return 2 => 1

=> iterate through scenarios
buy max amount of containers with starting budget,
check if amount of containers is enough to recieve more containers

*/

function maximumContainers(scenarios) {
    let result = '';
    for (let i = 0; i < scenarios.length; i++) {
        const [units, price, emptyNeeded] = scenarios[i].split(' ')
        let currentContainers = Math.floor(units/price);
        let maxContainers = currentContainers;
        // keep checking if current containers can be returned for new ones
        while (currentContainers >= emptyNeeded) {
            const freeContainers = Math.floor(currentContainers/emptyNeeded);
            currentContainers -= freeContainers * emptyNeeded;
            maxContainers += freeContainers;
            currentContainers += freeContainers
        }
        console.log(maxContainers)
    }
}
