function findHighestNum() {
    
    let highestNum = Number.MIN_SAFE_INTEGER;

    while(true) {

        let input = prompt("Enter something here (enter 0 to exit):");
        
        let num = parseFloat(input);

        if(num === 0) {
            break;
        }

        if(!isNaN(num) && num > highestNum) {
            highestNum = num;
        }
    }

    
    console.log("The highest number entered is: " + highestNum);
}
findHighestNum();