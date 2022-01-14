/**
 * 使用数组的归并排序
 * @param nums1
 * @param nums2
 * @returns number
 */
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let totalLen = nums1.length + nums2.length;
    let totalArr: number[] = [];
    let i1 = 0,
        i2 = 0;
    while (i1 + i2 < totalLen) {
        let val1 = nums1[i1];
        let val2 = nums2[i2];
        if (val2 == null || val1 < val2) {
            totalArr.push(val1);
            i1++;
        } else {
            totalArr.push(val2);
            i2++;
        }
    }

    return totalLen % 2 ? totalArr[parseInt(String(totalLen / 2))] : (totalArr[totalLen / 2 - 1] + totalArr[totalLen / 2]) / 2;
}
let num1 = [1, 2, 3, 4],
    num2 = [2, 4, 5, 6];
console.log(findMedianSortedArrays(num1, num2));

export default void 0;
