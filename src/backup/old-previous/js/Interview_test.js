function curryAdd() {
    var sum = 0;

    return function (arguments) {

        for (let arg of arguments) {
            sum += arg;
        }
        return sum;

    }
}

var test = curryAdd();
test(1);
test(2);
test(3);
test(1, 2,3,4);
