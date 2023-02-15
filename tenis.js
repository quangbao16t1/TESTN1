function combinationHours(hours) {
    if (hours < 0) return []; 
    if (hours == 0) return [[]]; 

    let results = [];
    const combination = [1, 2];

    for (let i = 0; i < combination.length; i++) {
        let hourCurrent = combination[i];
        let hourRemaining = hours - hourCurrent; 
        let hourRecursion = combinationHours(hourRemaining)

        for (let hourItem of hourRecursion) {
            hourItem.push(hourCurrent);
            results.push(hourItem);
        }
    }        
    return results;
}

console.log(combinationHours(8));