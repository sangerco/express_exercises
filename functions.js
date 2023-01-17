function getMean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

function getMedian(arr) {
    let mid = Math.floor(arr.length / 2);
    nums = [...arr].sort((a,b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
}

function getMode(arr) {
    let mode = {};
    let max = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if (mode[arr[i]]) {
            mode[arr[i]]++;
        } else {
            mode[arr[i]] = 1;
        }

        if (count < mode[arr[i]]) {
            max = arr[i];
            count = mode[arr[i]];
        }

    }
    return max;
}

module.exports = { getMean, getMedian, getMode };