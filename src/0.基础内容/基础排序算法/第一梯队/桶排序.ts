//桶排序
//思想：桶排序是为了弥补计数排序的无法适用于非整数的情况,也是分治思想的体现
// 桶排序按值区间将原始数组分配到不同的值区间（桶），分完之后桶已经是有序的了，只有遍历这几个桶，分别排好每个桶的顺序就行了
// 时间复杂度：桶数量为n时O(n) 空间复杂度：桶数量为n时O(n) 是否稳定：稳定

import mergeSort from "../第二梯队/归并排序";
import quickSort from "../第二梯队/快速排序";

// [10, 6, 5, 4, 3, 1, 6, 7, 8]
// max=10 min = 1  bucketSize = 5 bucketCount =  Math.floor((max-min)/bucketSize) + 1 = 2
// bucketCount = [[],[]] 桶数组
// [10, 6, 5, 4, 3, 1, 6, 7, 8] 放入桶里 => 通过 (arr[i]-min)/bucketSize 可以得出每个元素应该放在第几个桶里
// [[5,4,3,1],[10,6,6,7,8]] =>通过其他排序算法分别排桶里的元素排完得到[[1,3,4,5],[6,6,7,8,10]] =>[1,3,4,5,6,6,7,8,10]
/**
 *
 * @param arr 原始数组
 * @param bucketSize 桶最多能放几个元素
 * @returns
 */
function bucketSort(arr: number[], bucketSize: number = 5) {
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    //设置通过每个桶里有bucketSize个,所以需要Math.floor((max - min) / bucketSize) + 1个桶
    let bucketCount = Math.floor((max - min) / bucketSize) + 1;

    let bucketArr = new Array(bucketCount);
    //给每个桶都填入一个数组用于存放值
    for (let i = 0; i < bucketCount; i++) {
        bucketArr[i] = [];
    }
    //将所有数组放入桶里
    for (let i = 0; i < arr.length; i++) {
        let j = Math.floor((arr[i] - min) / bucketSize);
        bucketArr[j].push(arr[i]);
    }
    //遍历桶，分别给每个桶排序
    for (let i = 0; i < bucketArr.length; i++) {
        //这里使用归并排序
        bucketArr[i] = mergeSort(bucketArr[i]);
        // bucketArr[i] = quickSort(bucketArr[i]);
    }
    //将[[1,2],[3,4]] =>[1,2,3,4]
    return bucketArr.flat();
}
function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    // let array = [7, 1, 6, 5, 3, 2, 4];
    // let array = [5, 2, 1, 0, 3];

    console.time();
    console.log(JSON.stringify(bucketSort(array)));
    console.timeEnd();
}

main();
export default bucketSort;
