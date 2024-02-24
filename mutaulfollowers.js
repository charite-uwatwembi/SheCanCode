// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
const bobsFollowers = ["charite", "Tony", "Manzi", "baby"];

const tinasFollowers =["charite", "Tony", "lena"];
let mutualFollowers =[];
for(let i=o; i < bobsFollowers.length; i++){
    for(let j=0; j < tinasFollowers.length; j++){
        if(bobsFollowers[i] === tinasFollowers[j]){
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}
console.log("Mutual followers: ",mutualFollowers);
