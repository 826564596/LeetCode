// 希尔排序
// 思想：是插入排序的升级版， 跳index比较大小，对原数组进行一些预处理，使原数组大部分元素变得有序
// 时间复杂度：O(n^1.3) 空间复杂度：O(1) 是否稳定：不稳定
function shellSort(arr: number[]) {
    // [10, 6, 5, 4, 3, 1, 6, 7, 8];
    //d=Math.floor( arr.length / 2) = 4
    // **** d = 4 ，x < d*****
    // x = 0; index = x + d =  0,4,8 =>即比较[10,3,8] =>[3,8,10] =>[3, 6, 5, 4, 8, 1, 6, 7, 10]
    // x = 1; index = x + d = 1,5 => 即比较[6,1] => [1,6] =>[3, 1, 5, 4, 8, 6, 6, 7, 10]
    // x = 2; index = x + d = 2,6 => 即比较[5,6] => [5,6] =>[3, 1, 5, 4, 8, 6, 6, 7, 10]
    // x = 3; index = x + d = 3,7 => 即比较[4,7] => [4,7] =>[3, 1, 5, 4, 8, 6, 6, 7, 10]
    // ****  d = 2 ，x < d*****
    // x = 0; index = x + d = 0,2,4,6,8=>即比较[3,5,8,6,10] =>[3,5,6,8,10]=>[3, 1, 5, 4, 6, 6, 8, 7, 10]
    // x = 1; index = x + d = 1,3,5,7 =>即比较[1,4,6,7] =>[1,4,6,7] =>[3, 1, 5, 4, 6, 6, 8, 7, 10]
    //****  d = 1 ，x < d*****
    // x = 0;index = x + d = 0,1,2,3,4,5,6,7,8 =>即比较[3, 1, 5, 4, 6, 6, 8, 7, 10]=>[1, 3, 4, 5, 6, 6, 7, 8, 10]
    let d = arr.length;
    while (d > 1) {
        //每次去上次间隔的一半，当d=1 时就是个插入排序
        d = Math.floor(d / 2);
        for (let x = 0; x < d; x++) {
            for (let index = x + d; index < arr.length; index += d) {
                //先把要插入的元素保存起来

                let t = arr[index];
                let j = index - d;
                //拿有序区和要插入的元素比较
                for (; j >= 0 && arr[j] > t; j -= d) {
                    //有序区元素大于
                    arr[index] = arr[j];
                }

                //j 会在抛出前-d 所以要上d
                arr[j + d] = t;
            }
            if (x == 0 && d == 1) {
                console.log();
            }
        }
    }
    return arr;
}

function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    // let array = [7, 1, 6, 5, 3, 2, 4];
    // let array = [5, 2, 1, 0, 3];

    console.time();
    console.log(JSON.stringify(shellSort(array)));
    console.timeEnd();
}

main();
export default shellSort;
