var ar_testing;
ar_testing = ["DS", 10, "HK", 20, "JP", 30, "VD"];
function ar_length() {
    return console.log("The length of Array is : " + ar_testing.length);
}
function ar_push(pushing) {
    return console.log("The length of Array after adding new array is : " + ar_testing.push(pushing));
}
function ar_print() {
    for (var i = 0; i < ar_testing.length; i++) {
        console.log("The list of aray is: " + ar_testing[i]);
    }
}
function ar_pop() {
    return console.log("The last emement of array has been removed form the arrray list, please print the list again : " + ar_testing.pop());
}
ar_length();
ar_print();
ar_push(10332659);
ar_print();
ar_pop();
ar_print();
