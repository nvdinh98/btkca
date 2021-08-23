
function checkLevel() {
    let level = prompt("nhập Level Lương")
    let day = parseInt(prompt("Nhập số ngày công"));
    let salary;
    if(level == a) {
        salary = (5000000*day)/23
        console.log(salary)
        alert(salary)
    } else if ( level == b) {
        salary = (6000000*day)/23
        alert(salary)
    } else if(level == c) {
        salary = (8000000*day)/23
        alert(salary)
    } else if(level == d) {
        salary = (10000000*day)/23
        alert(salary)
    }
}
checkLevel()