function solution(my_string) {
    var answer = '';

    my_string.split('').forEach(el => {
        if(el === el.toUpperCase()) { // 대문자
            answer += el.toLowerCase();
        } else { // 소문자
            answer += el.toUpperCase();
        }
    });
    
    return answer;
}