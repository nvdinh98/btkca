function getSalary() {
    let numberOfdate = document.getElementById("date").value
    numberOfdate= parseFloat(numberOfdate)
    const numberOfMonth = 22
    let level = document.getElementById("level").value;
    switch (level) {
        case "a":
            result = numberOfdate*5000000/numberOfMonth
            break;
        case "b " :
            result = numberOfdate*6000000/numberOfMonth
            breal;
        case "c":
            result = numberOfdate*8000000/numberOfMonth
            break;
        case "d":
            result = numberOfdate*10000000/numberOfMonth
            break;
        default :
            result = "nothing"
            break;

    }
    document.write(result)
}
getSalary();