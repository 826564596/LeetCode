// 选择排序
// 选择排序思想：先规定左边为最小每轮选择最小者,直接交换到数组最左边
// 时间复杂度: O(n^2); 空间复杂度：O(1) 是否稳定：不稳定 原始数组越无序，性能越好
function sort(array: number[]) {
    let num = 0;
    for (let index = 0; index < array.length - 1; index++) {
        let minIndex = index;
        for (let j = index + 1; j < array.length; j++) {
            num++;
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        let t = array[minIndex];
        array[minIndex] = array[index];
        array[index] = t;
    }
    console.log(num);
    return array;
}

let array10 = [10, 6, 5, 4, 3, 1, 6, 7, 8];

console.time("选择排序时间");
console.log(JSON.stringify(sort(array10)));
console.timeEnd("选择排序时间");

export default sort;
