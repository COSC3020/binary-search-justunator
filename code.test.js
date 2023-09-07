const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    jsc.forall("array nat", function(arr) {
        arr.sort(function(a,b){return a-b}) // sorting the array so it actually works
        if(arr.length > 0) {
            return binarySearch(arr, arr[0]) == 0;
        } else {
            return binarySearch(arr, "foo") == -1;
        }
    });
jsc.assert(testSearch);
