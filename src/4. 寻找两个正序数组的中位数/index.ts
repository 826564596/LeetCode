/**
 * 最暴力简单的解法：通过合并两个数组，排序，判断数组长度奇偶输出。时间复杂度达到了 O(n^2)
 * @param nums1
 * @param nums2
 * @returns number
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let number: number[] = [...nums1, ...nums2].sort((a, b) => a - b);
    let l = number.length;
    return l % 2 ? number[parseInt(String(l / 2))] : (number[l / 2 - 1] + number[l / 2]) / 2;
}

let nums1 = [1, 2],
    nums2 = [3];
console.log(findMedianSortedArrays(nums1, nums2));

export default void 0;
