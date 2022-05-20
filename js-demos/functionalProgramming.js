const nums1 = [1, 2, 3, 4, 5];
const nums2 = [10, 20, 30, 40, 50];
const nums3 = [100, 200, 301, 400, 500];

// Defined function
function add2(e) {
    console.log(e + 2);
}

nums1.forEach(add2); // leveraging log function as a callback function - these are just functions that are passed as arguments
nums2.forEach(add2);
nums3.forEach(add2);

// This is an anonymous callback function, only ever leveraged in this line
nums1.forEach((n) => console.log(n * 2));

nums2.forEach((n) => console.log(n * 50));

const forEachNums3 = nums3.forEach((n) => {
    if (n % 2 === 0) {
        return "even";
    }
    return "odd";
});

const mapNums3 = nums3.map((n) => {
    if (n % 2 === 0) {
        return "even";
    }
    return "odd";
});

console.log(forEachNums3);

console.log();

console.log(mapNums3);

nums3
    .map((n) => {
        if (n % 2 === 0) {
            return "even boo";
        }
        return "odd boo";
    })
    .forEach((e) => console.log(e));

console.log(nums3.map((n) => n * 50).reduce((a, b) => a + b));

nums3.map((n, i) => {
    console.log("Called by element: ", n);
    console.log("Called by index: ", nums3[i]);
});

nums1.filter((n) => n % 2 == 0).forEach((e) => console.log(e));
