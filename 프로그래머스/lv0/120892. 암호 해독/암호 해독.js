function solution(cipher, code) {
    let str = '';
    
    cipher.split('').forEach((el, i) => {
       if(i % code === code - 1) str += el;
    });
    
    return str;
}