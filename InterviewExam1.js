// creates Array with 1002 items
const testArray = [];
for (let i = 0; i <= 999; i++) {
    testArray.push(i)
}
for (let i = 0; i <= 1; i++){
    testArray.push(Math.floor(Math.random() * 1000) + 1);
}
//shuffles array
testArray.sort(() => Math.random() - 0.5);

// Creates a sorted clone of the unsorted array
let sortedTestArray = testArray.sort(function(a,b) {
    return a - b
});

// creates an array for the duplicates
let duplicates = [];

// Compares sorted values, pushes the duplicated items into the duplicates array
for (let i = 0; i < testArray.length - 1; i++) {
    if (sortedTestArray[i + 1] === sortedTestArray[i]) {
        duplicates.push(sortedTestArray[i]);
    }
}

// Logs the duplicated values in the console
    console.table(duplicates);