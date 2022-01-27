const lengthOfLongestSubstring = function (s: String) {
    let map = new Map(),
        max = 0;
    for (let i = 0, j = 0; j < s.length; j++) {
        if (map.has(s[j])) {
            i = Math.max(map.get(s[j]) + 1, i);
        }
        max = Math.max(max, j - i + 1);
        map.set(s[j], j);
        // console.log(map);
    }
    return max;
};
