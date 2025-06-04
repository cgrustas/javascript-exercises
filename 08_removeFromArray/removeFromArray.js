const removeFromArray = function(arr, ...items) {
    for (let i = 0; i < items.length; i++) {
        let item = items[i];
        while (arr.includes(item)) {
            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
