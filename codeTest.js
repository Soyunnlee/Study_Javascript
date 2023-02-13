

function getMaxNumber(n){
    let maxNum = 0;
    for(let i=-0; i<arr.length ; i++){
        if(arr[i] > maxNum) maxNum = arr[i];
    }
    return maxNum;
}

const arr=[1,4,634,645,36,7,3]

console.log(getMaxNumber(arr));