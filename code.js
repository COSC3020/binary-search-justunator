//Used this to help me understand how a binary search actually functions
//https://www.geeksforgeeks.org/binary-search/
function binarySearch(list, element) {
    var high = list.length - 1
    var low = 0
    var mid = Math.round(low + (high - low)/2)
    //console.log(list) //to see if the binary search is splitting properly
    if (list[mid] == element){
        return mid;
    }
    else if (list[mid] > element){ //where I learned how the slice method worked
        let Mindex = binarySearch(list.slice(0, mid), element) //https://www.w3schools.com/jsref/jsref_slice_array.asp
        return Mindex;
    }
    else if (list[mid] < element){
        let Mindex = binarySearch(list.slice(mid , high+1), element)
        return Mindex + mid;
    }
    
    return -1;
}


//console.log("Index:", binarySearch([1,2,3,4,5,6,7,8,9,10,11,12],"not real")) //testing purposes