function findFirstStringInBracket(str) {
    if (str.length === 0){
        return ""
    }

    const regex = /\((.*?)\)/g;
    const matches = regex.exec(str)
    if (matches === null) {
        return ""
    }

    return matches[1]
}

console.log(findFirstStringInBracket('Muhammad (Risky) Makira (test)'))
