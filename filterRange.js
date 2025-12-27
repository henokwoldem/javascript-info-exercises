function filterRange(arr,from,to){
    let filteredArray = [];
    arr.forEach(element => {
        if(element >= from && element <= to){
            filteredArray.push(element)
        }
        
    });
    return filteredArray;
} 

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

