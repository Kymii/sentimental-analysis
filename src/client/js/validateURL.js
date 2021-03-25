const validate = (str) => {
    //I had trouble finding a regex that fit my needs so I took a try at making one myself. I wanted
    //one that allowed for urls with https://www or http://www or started without either for example, google.com
    //So the beginning of the regex follows this pattern followed by a . character, then 1 or more characters followed by another . and 2-4 letters (ie. com/edu/info)
    //the ending is quite greedy with only an optional / followed by 0 or more characters or numbers
    const regex = /^(http:\/\/w{3}\.)|(https:\/\/w{3}\.|\w).+\.\w{2,4}(\/.*)*/
    return regex.test(str)
}

export {validate}