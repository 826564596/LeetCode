//计数排序
//思想:统计原始数组的值出现的次数生成计数数组,遍历计数数组，生成排序数组。基于元素下标来确定元素的位置，不依靠元素的比较和交换
//时间复杂度：O(n+m) 空间复杂度：(n+m) 是否稳定：稳定 只适用于整数

// [10, 6, 5, 4, 3, 1, 6, 7, 8] => max = 10, min = 1 => [0, 0, 0, 0, 0, 0, 0, 0, 0]
// =>[1, 0, 1, 1, 1, 2, 1, 1, 0, 1] min + i 即为值 如countArr[5] = 2 ;即 6 出现两次
//=>[1, 3, 4, 5, 6, 6, 7, 8, 10]
function countSort(arr: number[]) {
    let max = arr[0];
    let min = arr[0];
    //拿到数组最大值和最小值
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    //根据最大值和最小值确定统计数组长度
    let length = max - min + 1;
    let countArr = new Array(length).fill(0);
    //向左偏移
    for (let i = 0; i < arr.length; i++) {
        countArr[arr[i] - min]++;
    }

    //根据统计数组输出数组序列
    let sortArr = new Array();
    for (let i = 0; i < countArr.length; i++) {
        for (let j = 0; j < countArr[i]; j++) {
            //向右偏移
            sortArr.push(i + min);
        }
    }
    return sortArr;
}

function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    // let array = [7, 1, 6, 5, 3, 2, 4];
    // let array = [5, 2, 1, 0, 3];

    console.time();
    console.log(JSON.stringify(countSort(array)));
    console.timeEnd();
}

main();
export default countSort;
