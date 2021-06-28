//Time complexity: O(n)
function charCount(str) {
    let result = {}
    for(let i = 0; i < str.length; i++){
        let char = str[i]
        result[char] = result[char]++ || 1
    }
    return result
}