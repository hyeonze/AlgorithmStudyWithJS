function solution(my_string) {
    let answer = 0;
    let currMark = '';

    my_string.split(' ').forEach((el, i) => {
        if(i === 0) {
            answer = Number(el);
        } else if('+-'.indexOf(el) > -1) {
            currMark = el;
        } else if(el !== ' ') {
            if(currMark === '+') {
                answer += Number(el);
            } else {
                answer -= Number(el);
            }
        }

    });
    return answer;
}