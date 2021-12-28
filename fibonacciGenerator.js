function fibonacciGenerator (n) {

  var output = [];

    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (var a = 2; a < n; a++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }


  return output;
}

// output = fibonacciGenerator(10);
console.log(fibonacciGenerator(7))
