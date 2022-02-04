const newArray = []

function writeCards(arrayOfNames, eventName){
    for(let i = 0; i < arrayOfNames.length; i++){
        newArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`)
    }
    return newArray;
}


function countDown(value) {
    while (value >= 0) {
        console.log(value)
        value--;
    }
}