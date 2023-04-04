function solution(array) {
    const answer = [-1, -1];
    array.forEach((el, i) => {
        if(el > answer[0]) {
            [answer[0], answer[1]] = [el, i];
        }
    });
    
    return answer;
}