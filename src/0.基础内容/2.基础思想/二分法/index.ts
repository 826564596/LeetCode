/**
 *二分法必须的查找数组必须是有序的
 * @param arr 有序数组
 * @param item 待查元素
 * @returns 待查元素在有序数组中的索引
 */
function binarySearch(arr: number[], item: number): number {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid];
        if (guess == item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1; //跳过mid
        } else if (guess < item) {
            low = mid + 1; //跳过mid
        }
    }
    return -1;
}

function main() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];
    console.log(binarySearch(arr, 10));
}

main();
