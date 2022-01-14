//堆排序
//时间复杂度

/**
 *
 * @param array 待调整的堆
 * @param parentIndex 要下沉的父节点
 * @param length 堆的有效大小
 */
function downAdjust(array: number[], parentIndex: number, length: number) {
    // temp 保存父节点的值，用作最后的赋值
    let temp = array[parentIndex];
    let childrenIndex = parentIndex * 2 + 1;
    while (childrenIndex < length) {
        if (childrenIndex + 1 < length) {
        }
    }
}

/**
 *
 * @param array array待调整的堆
 */
function heapSort(array: number[]) {
    for (let index = array.length - 2; index >= 0; index--) {
        downAdjust(array, index, array.length - 1);
    }
}
function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    console.time();
    heapSort(array);
    console.timeEnd();
}

main();
