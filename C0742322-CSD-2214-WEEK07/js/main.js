// Your code here!
function add() {
    var sum = 0;
    for (i = 117; i >= 11; i = i - 8) {
        document.writeln(i);
        //document.getElementById('s').innerHTML = i;
        sum = sum + i;
    }
    alert("sum is " + sum);
}