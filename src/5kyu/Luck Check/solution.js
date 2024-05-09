function luckCheck(str){
    if (!str || !/^\d+$/.test(str)) {
        throw new Error("Input must be a legal character string");
    }

    const mid = Math.floor(str.length / 2);
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 0; i < mid; i++) {
        leftSum += parseInt(str[i]);
        rightSum += parseInt(str[str.length - 1 - i]);
    }

    return leftSum === rightSum;


}