function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let totalArr: number[] = []
    let totalLen = nums1.length + nums2.length
    let mid1 = Math.floor(totalLen / 2)
    let mid2 = (totalLen + 1) % 2 // 是否是奇数，奇数就不用加1了
    let i1 = 0
    let i2 = 0

    while (mid1 + mid2 >= totalArr.length) {
        let val1 = nums1[i1]
        let val2 = nums2[i2]

        // 其中一方不存在，则另一方 ++ 
        if (val2 == null ||
            val1 < val2) { // 小于则自己++ 
            totalArr.push(val1)
            i1++
        } else {
            totalArr.push(val2)
            i2++
        }

    }

    // mid1 - mid2 是因为偶数的时候，mid1 === 后面的一个位置
    return (totalArr[mid1] + totalArr[mid1 - mid2]) / 2;
};
