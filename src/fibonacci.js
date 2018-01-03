/* global define */

    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */
    // TODO: return definition of `fibonacci` function here

function fibonacci (index) {
    if(index < 0){
        return 0;
    }
    else if(index <=1){
        return 1;
    }
    else {
        return fibonacci(index-1) + fibonacci(index-2);
    }
}

module.exports = fibonacci;