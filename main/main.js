module.exports = function main(number) {
    let stringsStyles = {
        0: ["._.", "|.|", "|_|"],
        1: ["...", "..|", "..|"],
        2: ["._.", "._|", "|_."],
        3: ["._.", "._|", "._|"],
        4: ["...", "|_|", "..|"],
        5: ["._.", "|_.", "._|"],
        6: ["._.", "|_.", "|_|"],
        7: ["._.", "..|", "..|"],
        8: ["._.", "|_|", "|_|"],
        9: ["._.", "|_|", "..|"]
    }
    
    //传参进来的数字 先拆分
    function splitNum(number) {
        return number.split("");
    }
    
    function matchingStyle(numbers, stringsStyle) {
        let stringSet = [];
    
        for (let i = 0; i < 3; i++) {
            let string = numbers.reduce((str, item) => {
                str += `${stringsStyle[item][i]} `;
                return str;
            }, "");
            stringSet.push(`${string.substring(0, string.length - 1)}\n`);
        }
    
        return stringSet;
    }
    
    // 格式化打印输入的数字
    function printDigit(stringSet) {
        return stringSet.reduce((pString, cString) => {
            pString += cString;
            return pString;
        })
    }
    
    let numbers = splitNum(number);
    let stringSet = matchingStyle(numbers, stringsStyles);
    let stringResult = printDigit(stringSet)
    console.log(stringResult);
    return stringResult
};