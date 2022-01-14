//快速排序
//思想：快排也是分治思想的经典体现,即：选择一个基准元素，大于它的在一边，小于它的在另一边，并递归
//时间复杂度：O(nlogn)

function quickSort(arr: number[], left: number, right: number) {}

function main() {
    let array = [10, 6, 5, 4, 3, 1, 6, 7, 8];
    console.time();
    console.log(JSON.stringify(quickSort(array, 0, array.length - 1)));
    console.timeEnd();
}

main();

export default quickSort;
