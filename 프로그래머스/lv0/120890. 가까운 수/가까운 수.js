// el에서 n을 뺀 절대값이 가장 작은 원소 찾기
function solution(array, n) {
    let res = 100;
    let idx = 0;
    
    array.forEach((el, i) => {
            if(Math.abs(el - n) < res) {
                res = Math.abs(el - n);
                idx = i;
            } else if(Math.abs(el - n) <= res && el < array[idx]) {
                idx = i;
            }
        }
    );
    return array[idx];
}