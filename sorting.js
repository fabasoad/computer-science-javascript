// https://www.interviewcake.com/sorting-algorithm-cheat-sheet

const swap = (a, x, y) => {  
    const temp = a[x];
    a[x] = a[y];
    a[y] = temp;
};

// worst    best     average   space
// O(n^2)   O(n^2)   O(n^2)    O(1)
const selectionSort = (a) => {
    console.log('Selection sort');
    const arr = [...a];
    for (let i = 0; i < arr.length; i++) {
        let min = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (arr[min] < arr[i]) {
            swap(arr, min, i);
        }
    }
    return arr;
};

// worst    best     average   space
// O(n^2)   O(n)     O(n^2)    O(1)
const insertionSort = (a) => {
    console.log('Insertion sort');
    const arr = [...a];
    let sortedIndex = 1;
    while (sortedIndex < arr.length) {
        for (let i = sortedIndex; i > 0; i--) {
            if (arr[i] < arr[i - 1]) {
                swap(arr, i, i - 1);
            } else {
                break;
            }
        }
        sortedIndex++;
    }
    return arr;
};

// worst    best     average   space
// O(nlgn)  O(nlgn)  O(nlgn)   O(n)
const mergeSort = (arr) => {
    console.log('Merge sort');
    const _mergeSort = (a) => {
        if (a.length > 2) {
            const border = Math.floor(a.length / 2);
            const left = _mergeSort(a.slice(0, border));
            const right = _mergeSort(a.slice(border));
            let leftIndex = 0;
            let rightIndex = 0;
            const result = [];
            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }
            return result.concat(leftIndex == left.length
                ? (rightIndex == right.length
                    ? []
                    : right.slice(rightIndex))
                : left.slice(leftIndex));
        } else {
            if (a.length == 2 && a[0] > a[1]) {
                swap(a, 0, 1);
            }
            return a;
        }
    }
    return _mergeSort([...arr]);
};

// worst    best     average   space
// O(n)     O(n)     O(n)      O(n)
const countingSort = (a) => {
    console.log('Counting sort');
    const max = Math.max(...a);
    const counters = Array(max + 1).fill(0);
    for (const element of a) {
        counters[element]++;
    }
    const result = [];
    for (let i = 0; i < counters.length; i++) {
        for (let j = 0; j < counters[i]; j++) {
            result.push(i);
        }
    }
    return result;
};

const sort = mergeSort;

const arr = [ 1, 23, 2, 43, 445, 2323, 123, 11, 222, 11, 222 ];
const res = sort(arr);
console.log('before:', arr);
console.log('after:', res);