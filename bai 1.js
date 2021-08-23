

function doSomeThing() {
    let old = parseInt(document.getElementById("old").value)
    let new2 = parseInt(document.getElementById("new").value)
    sub = new2 - old
    if (sub < 50) {
        multi = sub * 1.678
        alert(multi);
    } else if (sub >= 50 && sub <= 100) {
        multi = (50 * 1.678) + (sub - 50) * 1.734
        alert(multi);
    } else if (sub >= 101 && sub <= 200) {
        multi = (50 * 1.678) + (50 * 1.734) + (sub - 100) * 2.014
        alert(multi)
    } else if (sub >= 201 && sub <= 300) {
        multi = (50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (sub - 200) * 2.536
        alert(multi)
    } else if (sub >= 301 && sub <= 400) {
        multi = (50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (100 * 2536) + (sub - 300) * 2.834
        alert(multi)
    } else if (sub >= 401) {
        multi = (50 * 1.678) + (50 * 1.734) + (100 * 2.014) + (100 * 2536) + (100 * 2.834) + (sub - 400) * 2.927
        alert(multi)
    }


}

doSomeThing();

