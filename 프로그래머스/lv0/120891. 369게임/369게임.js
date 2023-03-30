function solution(order) {
    const str = String(order).split('');
    const table = '369';
    let cnt = 0;
    
    str.forEach(el => {
        if(table.indexOf(el) > -1) cnt++;
    });
    
    return cnt;
}