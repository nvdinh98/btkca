function checkLevel() {
    let level = prompt("nhập Level Lương")
    let day = prompt("Nhập số ngày công");
    let salary;
    switch (level) {
        case "a":
            salary = 5000000 * day / 22

            break;
        case "b":
            salary = 6000000 * day / 23

            break;
        case "c":
            salary = 8000000 * day / 23

            break;
        case "d":
            salary = 5000000 * day / 23

            break;
        default :
            salary = -1
    }
    alert(salary)

}

checkLevel()

