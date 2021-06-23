//O(n)
const addUpTo_1 = (n) => {
    let sum = 0
    for(let i = 1; i <= n; i++){
        sum += i
    }

    return sum
}

// O(1)
const addUpTo_2 = (n) => {
    return n * (n - 1) / 2
}
