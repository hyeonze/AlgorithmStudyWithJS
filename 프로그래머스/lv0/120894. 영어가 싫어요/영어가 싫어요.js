function solution(numbers) {
    const obj = {
        "zero": "0",
        "one": "1",
        "two": "2", 
        "three": "3", 
        "four": "4", 
        "five": "5", 
        "six": "6", 
        "seven": "7", 
        "eight": "8", 
        "nine": "9",
    };
    let buf = '';
    let ans = '';
    
    for(let i = 0; i < numbers.length; i++) {
        buf += numbers[i];
        if(obj[buf]) {
            ans += obj[buf];
            buf = '';
        }
    }
    
    return Number(ans);
}