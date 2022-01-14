//堆排序
// 堆结构 堆是具有以下性质的完全二叉树；
// 1.每个节点的值都大于或等于其左右孩子的值，称为大顶堆。用于升序排列。
// 2.每个节点的值都小于或等于其左右孩子的值，称为小顶堆。用于降序排列。
///
//时间复杂度 O(nlogn)
let len: number; //多个地方要用
/**
 * 构建最大堆
 * @param arr
 */
function buildMaxHeap(arr: number[]) {
    len = arr.length;
    for (let i = Math.floor(len / 2); i >= 0; i--) {
        heapify(arr, i);
    }
}

/**
 *堆调整
 * @param arr
 * @param i 当前堆的下标
 */
function heapify(arr: number[], i: number) {
    let left = 2 * i + 1; //左孩子的下标
    let right = 2 * i + 2; //右孩子的下标
    let largest = i;
    //确保在left在长度内,比较值的大小
    if (left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        swap(arr, i, largest);
        heapify(arr, largest); //自调用可以拿出子孙节点中的最大值
    }
}

/**
 * 更换 堆的值
 */
function swap(arr: number[], i: number, j: number) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

/**
 * 升序
 * @param arr
 */
function heapSort(arr: number[]) {
    //构建一个初步的最大堆,//可以得到最大值
    buildMaxHeap(arr);
    //调整最大堆
    for (let i = arr.length - 1; i > 0; i--) {
        swap(arr, 0, i); //将上次的最大堆拿出来 将最大的值换到最后
        len--; //最后已经是有序的了 所以数组长度-1
        heapify(arr, 0); //从堆顶继续计算，会得到一个最大堆
    }
    return arr;
}

function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    console.time();
    console.log(JSON.stringify(heapSort(array)));
    console.timeEnd();
}

main();

export default heapSort;
