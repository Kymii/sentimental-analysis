const validate = (str) => {
    const regex = /^(http:\/\/w{3}\.)|(https:\/\/w{3}\.|\w).+\.\w{2,4}(\/.*)*/
    return regex.test(str)
}

export {validate}