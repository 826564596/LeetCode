// 插入排序
// 时间复杂度: O(n^2); 空间复杂度：O(1) 是否稳定：稳定 原始数组越有序，性能越好，所以希尔排序就是先让原始数组有序
// 插入排序思想：维护一个有序区，把元素一个一个插入到有序区的适当位置，直到所有元素有序
function insertSort(array: number[]) {
    // 从index==1开始即将第一个元素作为一个有序区,所以拿第二个元素比较
    for (let index = 1; index < array.length; index++) {
        let t = array[index];
        let j = index - 1; //表示有序区需要比较的次数
        //插入排序优化
        for (; j >= 0 && array[j] > t; j--) {
            array[j + 1] = array[j];
        }
        //每次都要插入到j+1 的地方，因为会将j减到 index-1-1的地方
        array[j + 1] = t;
    }
    return array;
}

let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];

console.time("插入排序时间");
console.log(JSON.stringify(insertSort(array)));
console.timeEnd("插入排序时间");

export default insertSort;
