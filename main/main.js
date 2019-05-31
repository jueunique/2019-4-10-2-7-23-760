module.exports = function main(inputs) {
    // write your code here...
    return Math.round(inputs.parkTime * 0.25 + 6 + Math.max(0, (inputs.distance - 2) * 0.8) + Math.max(0, (inputs.distance - 8) * 0.4));
};
