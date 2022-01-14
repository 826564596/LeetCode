/**
 * 冒泡排序的思想：把相邻的元素两两比较，当一个元素大于右侧相邻元素时，交换它们的位置；当一个元素小于或者等于右侧相邻元素时，位置不变
 * @param array
 */

import { constants } from "buffer";
import { listenerCount } from "process";

//升序排序
function bubbleSort(array: number[]) {
    let num = 0; //执行次数
    //外层循环只要循环array.length-1次
    for (let i = 0; i < array.length - 1; i++) {
        //内层循环需要扣掉有序区的长度 既需要扣掉i
        for (let j = 0; j < array.length - i - 1; j++) {
            num++;
            if (array[j] > array[j + 1]) {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
            }
        }
    }
    console.log(num);
    return array;
}

// 优化 标记是否有序
function bubbleSortTwo(array: number[]) {
    let num = 0; //执行次数
    //外层循环只要循环array.length-1次
    for (let i = 0; i < array.length - 1; i++) {
        let isSorted = true;
        //内层循环需要扣掉有序区的长度 既需要扣掉i
        for (let j = 0; j < array.length - i - 1; j++) {
            num++;
            if (array[j] > array[j + 1]) {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
                isSorted = false;
            }
        }
        //当数组后都是有序的时候可以节省一部分计算时间如：[1,0,3,4,5,6]，i=2时直接结束
        if (isSorted) {
            break;
        }
    }
    console.log(num);
    return array;
}
// 有序区优化
function bubbleSortThree(array: number[]) {
    //记录边界
    let sortBorder = array.length - 1;
    // 记录最后一次交换的位置
    let lastExcChangeIndex = 0;
    let num = 0; //执行次数
    //外层循环只要循环array.length-1次
    for (let i = 0; i < array.length - 1; i++) {
        let isSorted = true;
        //内层循环需要扣掉有序区的长度 既需要扣掉i
        for (let j = 0; j < sortBorder; j++) {
            num++;
            if (array[j] > array[j + 1]) {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
                //如果有交换发生 则后面不是有序的
                isSorted = false;
                lastExcChangeIndex = j;
            }
        }
        //记录上次比较的边界，可以节省内层循环
        sortBorder = lastExcChangeIndex;
        // console.log(i);

        //当数组后都是有序的时候可以节省一部分计算时间如：[1,0,3,4,5,6]，i=2时直接结束
        if (isSorted) {
            break;
        }
    }

    console.log(num);
    return array;
}

//鸡尾酒优化，冒泡一般是从左往右一次排序，鸡尾酒相当于从两个方向排序
function bubbleSortFour(array: number[]) {
    let num = 0;
    let outLength = Math.floor(array.length / 2);
    for (let i = 0; i < outLength; i++) {
        let sorted = true;
        for (let j = 0; j < array.length - 1 - i; j++) {
            num++;
            if (array[j] > array[j + 1]) {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
                sorted = false;
            }
        }
        if (sorted) {
            break;
        }
        if (i == 2) {
            console.log(JSON.stringify(array));
        }
        sorted = true;

        for (let j = array.length - 1 - i; j > i; j--) {
            num++;

            if (array[j] < array[j - 1]) {
                let t = array[j - 1];
                array[j - 1] = array[j];
                array[j] = t;
                sorted = false;
            }
        }

        // if (i == 1) {
        //     console.log(JSON.stringify(array));
        // }
        if (sorted) {
            break;
        }
    }
    console.log(num);
    return array;
}

//鸡尾酒优化 + 有序区
function bubbleSortSix(array: number[]) {
    let num = 0;
    let leftSortBorder = 0;
    let leftLastSortIndex = 0;
    let rightSortBorder = array.length - 1;
    let rightLastSortIndex = 0;

    let outLength = Math.floor(array.length / 2);
    for (let i = 0; i < outLength; i++) {
        let sorted = true;
        for (let j = leftSortBorder; j < rightSortBorder; j++) {
            num++;
            if (array[j] > array[j + 1]) {
                let t = array[j];
                array[j] = array[j + 1];
                array[j + 1] = t;
                sorted = false;
                rightLastSortIndex = j;
            }
        }
        rightSortBorder = rightLastSortIndex;
        if (sorted) {
            break;
        }

        sorted = true;

        for (let j = rightSortBorder; j > leftSortBorder; j--) {
            num++;

            if (array[j] < array[j - 1]) {
                let t = array[j - 1];
                array[j - 1] = array[j];
                array[j] = t;
                sorted = false;
                leftLastSortIndex = j;
            }
        }
        leftSortBorder = leftLastSortIndex;
        // if (i == 1) {
        console.log(leftSortBorder);
        console.log(rightSortBorder);
        // }
        if (sorted) {
            break;
        }
    }
    // console.log(num);
    return array;
}

let array1 = [10, 6, 5, 4, 3, 1, 6, 7, 8];
let array4 = [10, 6, 5, 4, 3, 1, 6, 7, 8];
let array5 = [10, 6, 5, 4, 3, 1, 6, 7, 8];

let array2 = [0, 1, 1, 3, 4, 5, 6, 6, 10];

// console.time("冒泡排序所耗费时间")
// console.log(JSON.stringify(bubbleSort(array2)))
// console.timeEnd("冒泡排序所耗费时间")

// console.time("冒泡排序有序优化所耗费时间");
// console.log(JSON.stringify(bubbleSortTwo(array2)));
// console.timeEnd("冒泡排序有序优化所耗费时间");

// console.time("冒泡排序有序优化所耗费时间");
// // console.log(JSON.stringify(bubbleSort(array1)));
// // console.log(JSON.stringify(bubbleSortTwo(array4)));
// console.log(JSON.stringify(bubbleSortThree(array5)));
// console.timeEnd("冒泡排序有序优化所耗费时间");

// console.time("冒泡排序有序优化所耗费时间");
// console.log(JSON.stringify(bubbleSortFour(array5)));

// console.timeEnd("冒泡排序有序优化所耗费时间");

console.time("冒泡排序有序优化所耗费时间");
console.log(JSON.stringify(bubbleSortSix(array5)));

console.timeEnd("冒泡排序有序优化所耗费时间");
