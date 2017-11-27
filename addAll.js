function adding(array) {
    flag = "u"
    sum = 0;

    for (var i = 0; i < array.length; i++) {
        if (flag === "u" && array[i] !== 's') {
            // console.log(array[i])
            continue;
        } else if (array[i] === "s") {
            flag = "s"
            continue
        } else if (array[i] === "u") {
            flag = "u"
        }

        if (flag === "s") {
            console.log(array[i])
            sum = sum + parseInt(array[i])
        } else if (flag === "u") {
            continue;
        }
    }
    return sum

}

adding(["5", "7", "s", "3", "1", "s", "9", "u", "2", "8", "u"])