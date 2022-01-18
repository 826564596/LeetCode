// 归并排序
// 思想：把数组拆成两两一组，有序合并，并递归，经典的分治思想
//时间复杂度：O(nlogn) 空间复杂度：O(n) 是否稳定：稳定 但是需要额外的merge数组 需要额外空间
function merge(left: number[], right: number[]) {
    let arr: number[] = [];
    //每次都截取第一个数,left和right长度每次都会减少
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }
    }
    //如果左边数组还有长度
    while (left.length) {
        arr.push(left.shift());
    }
    //如果右边数组还有长度
    while (right.length) {
        arr.push(right.shift());
    }
    return arr;
}

function mergeSort(arr: number[]) {
    //递归抛出条件
    if (arr.length < 2) {
        return arr;
    }
    //计算数组的中点，奇数向下取整
    let middle = Math.floor(arr.length / 2);
    // [10, 6, 5, 4, 3, 1, 6, 7, 8] =>left:[10, 6, 5, 4],right:[ 3, 1, 6, 7, 8];
    // [10, 6, 5, 4] => left:[10, 6],right:[5, 4]
    // [10, 6] => left:[10],right:[6] => 触发递归抛出条件=> merge =>left: [6,10]
    // [5, 4] =>left:[5],right:[4] => 触发递归抛出条件=> merge =>  right:[4,5]
    // left:[6,10] 和right: [4,5]合并 => merge =>left:[4,5,6,10]

    // [3, 1, 6, 7, 8] => left:[3, 1],right:[6, 7, 8]
    // [3, 1] => left:[3],right:[1] => 触发递归抛出条件=> merge =>left: [1,3]
    // [6, 7, 8] =>left:[6],right:[7,8] => [7,8] => left:[7],right:[8] 触发递归抛出条件=> merge =>  right:[7,8]
    // left:[6],right:[7,8] => right:[6,7,8]
    // left: [1,3] 和right:[6,7,8]合并 => merge =>right::[1,3,6,7,8]
    // left:[4,5,6,10],right::[1,3,6,7,8]=>merge=>[1,3,4,5,6,6,7,8,10]
    let left: number[] = mergeSort(arr.slice(0, middle));
    let right: number[] = mergeSort(arr.slice(middle));

    return merge(left, right);
}

function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    console.time();
    console.log(JSON.stringify(mergeSort(array)));
    // console.log(JSON.stringify(merge([1, 2, 3, 4], [5, 6])));

    console.timeEnd();
}

// main();

export default mergeSort;
