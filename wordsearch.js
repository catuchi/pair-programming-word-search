const wordSearch = (letters, word) => { 
    if (!word) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (let l of horizontalJoin) {
        // if (l.includes(word)) return true
        if (l === word) {
            return true;
        }
    }

    return false;
}

module.exports = wordSearch