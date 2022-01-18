//快速排序
//思想：快排也是分治思想的经典体现,即：选择一个基准元素，大于它的在一边，小于它的在另一边，并递归
//时间复杂度：平均O(nlogn) 最坏O(n^2)  是否稳定：不稳定 弊端会根据所选的基准pivot 影响性能

/**
 * 值交换
 * @param arr
 * @param i
 * @param index
 */
function swap(arr: number[], i: number, index: number) {
    let t = arr[i];
    arr[i] = arr[index];
    arr[index] = t;
}

/**
 * 生成[n,m]区间的随机整数
 * @param minNum
 * @param maxNum
 * @returns
 */
function randomNum(minNum: number, maxNum: number) {
    switch (arguments.length) {
        case 1:
            return Math.floor(Math.random() * minNum + 1);
            break;
        case 2:
            return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
            break;
        default:
            return 0;
            break;
    }
}
/**
 *分区隔断
 * @param arr
 * @param left
 * @param right
 */
function partition(arr: number[], left: number, right: number) {
    //随机基准
    let pivot = randomNum(left, right);
    //先将选取的基准值换到最后面，arr[right]就是基准值
    swap(arr, pivot, right);
    let i = left;
    let j = right - 1; //换完后的基准不用排 所以减一
    while (i <= j) {
        if (arr[i] <= arr[right]) {
            i++;
        } else {
            swap(arr, i, j);
            j--;
        }
    }
    //将基准换回i的地方
    swap(arr, i, right);
    return i;
}

/**
 *快速排序
 * @param arr
 * @param left
 * @param right
 * @returns
 */
function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
    //递归抛出条件
    if (left >= right) {
        return arr;
    }
    let len = arr.length;
    let pivotIndex;
    left = typeof left != "number" ? 0 : left;
    right = typeof right != "number" ? len - 1 : right;
    //选择基准元素下标,第一次算完可以得到pivotIndex前面的都小于arr[pivotIndex],后面的都大于arr[pivotIndex]

    // [10, 6, 5, 4, 3, 1, 6, 7, 8] => pivotIndex = 3 => left:[1,3,4] middle:[5] right:[6,6,7,10,8]
    // [1,3,4] => [1,3,4]
    //[6,6,7,10,8]  递归完 =>[6,6,7,8,10]
    //=>[1,3,4,5,6,6,7,8,10]
    pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
    return arr;
}

function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    // let array = [7, 1, 6, 5, 3, 2, 4];
    // let array = [5, 2, 1, 0, 3];

    console.time();
    console.log(JSON.stringify(quickSort(array)));

    console.timeEnd();
}

// main();

export default quickSort;
