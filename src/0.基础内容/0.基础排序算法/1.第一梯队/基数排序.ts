// 基数排序
// 思想：先排个位，再排十位，然后再排百位以此，只要排序算法是稳定的，最后整体就是有序的。
// 时间复杂度：O(k(m+n)) 空间复杂度：O(n+m) 是否稳定：稳定

/**
 *
 * @param arr
 * @param maxLength 数组元素的最大长度
 * @param index 排序到第几位
 */
function sort(arr: number[], maxLength: number, index: number) {
    let bucketArr = new Array();
    //0-9十个数,
    for (let i = 0; i < 10; i++) {
        bucketArr.push([]);
    }
    for (let i = 0; i < arr.length; i++) {
        let pad = String(arr[i]).padStart(maxLength, "0");
        let num = pad[maxLength - 1 - index];
        bucketArr[Number(num)].push(arr[i]);
    }

    if (index == 2) {
        console.log();
    }
    return bucketArr.flat();
}

// [666, 520, 36, 49, 9, 600, 8, 502, 998, 32]
//计算元素最大长度 maxLength = 3
// 数字使用桶排序（0-9）10个桶比较
// ***比较个位 分配到各个桶里
//[[520,600],[],[502,32],[],[],[],[666,36],[],[8,998],[49,9]]
//[520, 600, 502, 32, 666, 36, 8, 998, 49, 9]
// ***比较十位 分配到各个桶里
//[[600,502,8,9],[],[520],[32,36],[49],[],[666],[],[],[998]]
//[600, 502, 8, 9, 520, 32, 36, 49, 666, 998]
//***比较百位 分配到各个桶里
//[[8,9,32,36,49],[],[],[],[],[502,520],[600,666],[],[],[998]]
//[8, 9, 32, 36, 49, 502, 520, 600, 666, 998];
//结束
function radixSort(arr: number[]) {
    //计算原始数组的元素的最大长度
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        let length = String(arr[i]).length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    for (let i = 0; i < maxLength; i++) {
        arr = sort(arr, maxLength, i);
    }

    return arr;
}

function main() {
    // let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    let array = [666, 520, 36, 49, 9, 600, 8, 502, 998, 32];
    // let array = [7, 1, 6, 5, 3, 2, 4];
    // let array = [5, 2, 1, 0, 3];

    console.time();
    console.log(JSON.stringify(radixSort(array)));
    console.timeEnd();
}

main();
export default radixSort;
