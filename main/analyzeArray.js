function analyzeArray(array){
    const object = {
        average: average(),

        min: min(),

        max: max(),

        length: length()
    };

    function average(){
        let sum = 0;
            for(let i = 0; i < array.length; i++){
                sum += array[i];
            }
            return sum / array.length;
    }

    function min(){
        const minimum = Math.min.apply(null, array);
        return minimum;
    }

    function max(){
        const maximum = Math.max.apply(null, array);
        return maximum;
    }

    function length(){
        return array.length;
    }

    return object;
}

module.exports = analyzeArray;